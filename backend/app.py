import os
import re
import logging
import secrets
import threading
import time
from datetime import datetime, timedelta

from flask import Flask, request, jsonify
from flask_cors import CORS 
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.exc import IntegrityError

from instagrapi import Client
from transformers import pipeline
import bcrypt

# Database Setup
Base = declarative_base()
engine = create_engine('sqlite:///instagram_moderator.db', connect_args={'check_same_thread': False})
SessionLocal = scoped_session(sessionmaker(bind=engine))

# User Model
class User(Base):
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    @classmethod
    def hash_password(cls, password):
        return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.hashed_password)

# Create database tables
Base.metadata.create_all(engine)

# Flask App Setup
app = Flask(__name__)
CORS(app, supports_credentials=True)  

# Logging Configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# JWT Configuration
app.config['JWT_SECRET_KEY'] = secrets.token_hex(16)
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
jwt = JWTManager(app)

# Active Sessions Tracking
active_sessions = {}

# Comment Moderation Class
class CommentModerator:
    def __init__(self, username, password, check_interval, email):
        self.username = username
        self.password = password
        self.check_interval = int(check_interval)
        self.client = Client()
        self.running = False
        self.last_check = None
        self.error = None
        self.email = email
        
        os.environ["HF_HUB_DISABLE_SYMLINKS_WARNING"] = "1"
        self.pipe = pipeline("text-classification", 
                           model="facebook/roberta-hate-speech-dynabench-r4-target")

    def start_monitoring(self):
        """Start the monitoring thread"""
        self.running = True
        thread = threading.Thread(target=self._monitor_comments)
        thread.daemon = True
        thread.start()
        return True

    def stop_monitoring(self):
        """Stop the monitoring thread"""
        self.running = False
        return True

    def _monitor_comments(self):
        """Main monitoring loop"""
        try:
            # Login to Instagram
            self.client.login(self.username, self.password)
            user_id = self.client.user_id_from_username(self.username)

            while self.running:
                try:
                    user_media = self.client.user_medias(user_id, 5)
                    
                    for media in user_media:
                        media_id = re.search(r"id='(.*?)'", str(media)).group(1)
                        comment_count = re.search(r"comment_count='(.*?)'", str(media))
                        bad_comment_ids = []

                        # Get all comments
                        comments = self.client.media_comments(media_id, comment_count)
                        
                        for comment in comments:
                            text = re.search(r"text='(.*?)'", str(comment)).group(1)
                            comment_pk = int(re.search(r"pk='(.*?)'", str(comment)).group(1))
                            
                            # Check for hate speech
                            result = self.pipe(text)
                            if result[0]['label'] == "hate":
                                bad_comment_ids.append(comment_pk)

                        # Delete bad comments
                        if bad_comment_ids:
                            self.client.comment_bulk_delete(media_id, bad_comment_ids)

                    self.last_check = datetime.now()
                    self.error = None
                    time.sleep(self.check_interval)
                    
                except Exception as e:
                    self.error = str(e)
                    logger.error(f"Monitoring error: {e}")
                    time.sleep(60)  # Wait before retrying on error

        except Exception as e:
            self.error = str(e)
            logger.error(f"Fatal monitoring error: {e}")
            self.running = False

# Registration Route
@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'error': 'Email and password required'}), 400
    
    db = SessionLocal()
    try:
        # Check if user exists
        existing_user = db.query(User).filter_by(email=email).first()
        if existing_user:
            return jsonify({'error': 'User already exists'}), 400
        
        # Create new user
        new_user = User(
            email=email, 
            hashed_password=User.hash_password(password)
        )
        
        db.add(new_user)
        db.commit()
        
        logger.info(f"User registered: {email}")
        return jsonify({'message': 'User registered successfully'}), 201
    
    except IntegrityError:
        db.rollback()
        return jsonify({'error': 'Registration failed'}), 500
    finally:
        db.close()

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    db = SessionLocal()
    try:
        user = db.query(User).filter_by(email=email).first()
        
        if not user or not user.check_password(password):
            logger.warning(f"Failed login attempt for: {email}")
            return jsonify({'error': 'Invalid credentials'}), 401
        
        access_token = create_access_token(identity=email)
        logger.info(f"User logged in: {email}")
        return jsonify({
            'access_token': access_token,
            'email': email
        }), 200
    
    finally:
        db.close()

# Start Monitoring Route
@app.route('/start', methods=['POST'])
@jwt_required()
def start_monitoring():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    interval = data.get('interval', 300)  # Default 5 minutes
    email = get_jwt_identity()
    
    if username in active_sessions:
        return jsonify({'error': 'Monitoring already active for this username'}), 400
    
    moderator = CommentModerator(username, password, interval, email)
    if moderator.start_monitoring():
        active_sessions[username] = moderator
        logger.info(f"Monitoring started for {username} by {email}")
        return jsonify({'status': 'started', 'username': username})
    return jsonify({'error': 'Failed to start monitoring'}), 500

# Stop Monitoring Route
@app.route('/stop', methods=['POST'])
@jwt_required()
def stop_monitoring():
    username = request.json.get('username')
    email = get_jwt_identity()
    
    if username in active_sessions:
        moderator = active_sessions[username]
        moderator.stop_monitoring()
        del active_sessions[username]
        logger.info(f"Monitoring stopped for {username} by {email}")
        return jsonify({'status': 'stopped', 'username': username})
    return jsonify({'error': 'No active monitoring found for this username'}), 404

# Status Route
@app.route('/status', methods=['GET'])
@jwt_required()
def get_status():
    username = request.args.get('username')
    email = get_jwt_identity()
    
    if username in active_sessions:
        moderator = active_sessions[username]
        return jsonify({
            'username': username,
            'running': moderator.running,
            'last_check': str(moderator.last_check) if moderator.last_check else None,
            'error': moderator.error,
            'check_interval': moderator.check_interval
        })
    return jsonify({'error': 'No active monitoring found for this username'}), 404

if __name__ == '__main__':
    app.run(debug=True)