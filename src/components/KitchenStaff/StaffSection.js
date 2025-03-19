"use client"
import { useState } from 'react';

const staffMembers = [
  {
    name: 'Stafeny Rose',
    role: 'Head Of Kitchen',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Michael Reubens',
    role: 'Food Supervisor',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Angle Maria',
    role: 'Head Cook',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Kitchen Staff',
    role: 'Food Supervisor',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'David Miller',
    role: 'Food Supervisor',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Cristina Rose',
    role: 'Food Supervisor',
    description:
      'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];

export default function StaffSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % staffMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + staffMembers.length) % staffMembers.length);
  };

  return (
    <div className="relative py-16 bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Meet Our Team</h2>
        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex space-x-8">
            {staffMembers.slice(currentIndex, currentIndex + 3).map((staff, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <h3 className="text-2xl font-semibold text-white mt-4">{staff.name}</h3>
                <p className="text-sm text-gray-200">{staff.role}</p>
                <p className="text-sm text-gray-300 text-center mt-2">{staff.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}