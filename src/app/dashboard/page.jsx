'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [interval, setInterval] = useState(300);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const API_URL = 'http://localhost:5000';

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const startMonitoring = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username, password, interval })
      });
      
      if (response.ok) {
        const data = await response.json();
        setStatus(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to start monitoring');
      }
    } catch (error) {
      setError('Failed to start monitoring');
    }
    setIsLoading(false);
  };

  const stopMonitoring = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/stop`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username })
      });
      
      if (response.ok) {
        setStatus(null);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to stop monitoring');
      }
    } catch (error) {
      setError('Failed to stop monitoring');
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 space-y-4">
      <h1 className="text-2xl font-bold text-center">Instagram Comment Moderator</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {error}
        </div>
      )}
      
      <input 
        className="w-full p-2 border rounded"
        placeholder="Instagram Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <input 
        type="password"
        className="w-full p-2 border rounded"
        placeholder="Instagram Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <input 
        type="number"
        className="w-full p-2 border rounded"
        placeholder="Check Interval (seconds)" 
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
      />
      
      {status ? (
        <div className="space-y-2">
          <p className="text-green-600">Monitoring Status: Active</p>
          <p>Last Check: {status.last_check}</p>
          <button 
            className={`w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={stopMonitoring}
            disabled={isLoading}
          >
            {isLoading ? 'Stopping...' : 'Stop Monitoring'}
          </button>
        </div>
      ) : (
        <button 
          className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${isLoading || !username || !password ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={startMonitoring}
          disabled={isLoading || !username || !password}
        >
          {isLoading ? 'Starting...' : 'Start Monitoring'}
        </button>
      )}
      
      <button 
        className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}