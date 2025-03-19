import React from 'react';
import logo from './letter-h.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-blue-950">
      <div className="container px-6 py-12 mx-auto">
        {/* Newsletter Section */}
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-white md:mx-3 xl:text-2xl">
            Subscribe to our newsletter for updates!
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-blue-900 duration-300 bg-white rounded-lg gap-x-3 hover:bg-gray-100 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <span>Sign Up Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300 md:my-10" />

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Quick Link */}
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Cuisines */}
          <div>
            <p className="font-semibold text-white">Social Medias</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                X Twitter
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-white">Services</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Reel Comments Moderation
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Story Comments Moderation
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                Post Comments Moderation
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <p className="font-semibold text-white">Contact Us</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                +91 0983091823
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:underline hover:text-white"
              >
                info@trollfighter.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300 md:my-10" />

        {/* Copyright Section */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <a href="#">
            <img
              className="w-auto h-7"
              src={logo}
              alt="Foodie Love Logo"
            />
          </a>

          <p className="mt-4 text-sm text-gray-300 sm:mt-0">
            © Copyright 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;