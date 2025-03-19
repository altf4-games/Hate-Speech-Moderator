"use client"; // Marking this as a client component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // Importing Image from next/image for optimization
import logo from "./images/f copy.svg"; // Import your logo image

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  // Close the sidebar when the window is resized to larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(false); // Close the sidebar on large screens
      }
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add scroll event listener to toggle background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-5 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} className="mr-2" />
        <span
          className={`text-2xl font-bold uppercase tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          } hover:text-orange-500`}
        >
          Troll Fighter
        </span>
      </div>

      {/* Centered Navigation (Hidden on mobile) */}
      <div className="hidden md:flex flex-grow justify-center ">
        <nav className="flex space-x-8">
          <Link
            href="/"
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-orange-500`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-orange-500`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-orange-500`}
          >
            Services
          </Link>
          <Link
            href="/services"
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-orange-500`}
          >
            Blogs
          </Link>
          <Link
            href="/services"
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-orange-500`}
          >
            Categories
          </Link>
          <Link
            href="/contact"
            className={`text-2xl font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-orange-500`}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Auth Buttons (Login / Signup) - Hidden on mobile */}
      <div className="hidden md:flex space-x-4">
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
          onClick={() => router.push("/login")}
        >
          Sign Up
        </button>
      </div>

      {/* Hamburger Menu Icon (Visible on mobile) */}
      <div
        className="md:hidden flex flex-col space-y-1.5 cursor-pointer"
        onClick={toggleSidebar}
      >
        <span
          className={`w-6 h-1 rounded transition-all duration-300 ${
            isScrolled ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          className={`w-6 h-1 rounded transition-all duration-300 ${
            isScrolled ? "bg-black" : "bg-white"
          }`}
        ></span>
        <span
          className={`w-6 h-1 rounded transition-all duration-300 ${
            isScrolled ? "bg-black" : "bg-white"
          }`}
        ></span>
      </div>

      {/* Sidebar Navigation (Visible on mobile) */}
      <nav
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <Link
            href="/"
            className="block text-white text-lg font-medium py-3 hover:text-teal-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white text-lg font-medium py-3 hover:text-teal-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-white text-lg font-medium py-3 hover:text-teal-400 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-white text-lg font-medium py-3 hover:text-teal-400 transition-colors duration-300"
          >
            Contact
          </Link>

          {/* Login and Signup Buttons in Sidebar */}
          <div className="mt-6 space-y-4">
            <button
              className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
            <button
              className="w-full bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
              onClick={() => router.push("/login")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
