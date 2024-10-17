import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h5 className="text-xl font-bold mb-4">Personal Blog</h5>
            <p className="text-gray-300">
              A place to share your thoughts and ideas with the world.
            </p>
            <div className="mt-6 flex space-x-3">
              <a
                href="#!"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#!"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="#!"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="#!"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-xl font-bold mb-4">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="text-gray-300 hover:text-white transition">
                  Create Post
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold mb-4">Categories</h6>
            <ul className="space-y-3">
              <li>
                <a href="#!" className="text-gray-300 hover:text-white transition">
                  Technology
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-300 hover:text-white transition">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-300 hover:text-white transition">
                  Travel
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-300 hover:text-white transition">
                  Food
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-xl font-bold mb-4">Contact</h6>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <i className="bi bi-geo-alt-fill"></i>
                <span>123 Blog Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="bi bi-envelope-fill"></i>
                <span>info@personalblog.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="bi bi-phone-fill"></i>
                <span>+1 234 567 8901</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 py-4 border-t border-white/10">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Personal Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
