import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-white">
            ThoughtSphere
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white text-lg transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/create"
              className="text-gray-300 hover:text-white text-lg transition duration-300"
            >
              Create Post
            </Link>
            <Link
              to="/posts"
              className="text-gray-300 hover:text-white text-lg transition duration-300"
            >
              Post List
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white text-lg transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 shadow-lg rounded-lg py-4 mt-2">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-300 hover:bg-blue-700 hover:text-white transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/create"
              className="block px-4 py-2 text-gray-300 hover:bg-blue-700 hover:text-white transition"
              onClick={toggleMenu}
            >
              Create Post
            </Link>
            <Link
              to="/posts"
              className="block px-4 py-2 text-gray-300 hover:bg-blue-700 hover:text-white transition"
              onClick={toggleMenu}
            >
              Post List
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-300 hover:bg-blue-700 hover:text-white transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
