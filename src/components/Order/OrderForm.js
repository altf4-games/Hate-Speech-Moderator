"use client"
import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deal: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-fixed bg-center relative"
      style={{
        height: '600px', // Fixed height for the entire section
        backgroundImage: "url('https://t3.ftcdn.net/jpg/08/24/15/22/360_F_824152233_dUPRJx2xbx5mO5fFdyLAAJLFcDUrvD5Z.jpg')", // Replace with your image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Darker overlay */}

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="p-8 w-full max-w-2xl relative z-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact Us</h2>

        {/* Name and Email in the same line */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {/* Phone Number and Select Deal in the next line */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="deal">
              Select a Deal
            </label>
            <select
              id="deal"
              name="deal"
              value={formData.deal}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="" disabled>Choose a deal</option>
              <option value="200">Deal One - $200</option>
              <option value="300">Deal Two - $300</option>
              <option value="400">Deal Three - $400</option>
              <option value="800">Deal Four - $800</option>
              <option value="1000">Deal Five - $1000</option>
              <option value="1500">Deal Six - $1500</option>
            </select>
          </div>
        </div>

        {/* Description in the last line */}
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter any additional details"
            rows="4"
          ></textarea>
        </div>

        {/* Place Order Button */}
        <button
          type="submit"
          className="w-30 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-950"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;