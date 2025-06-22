import React from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="text-amber-700 py-8 border border-l-0 border-r-0 border-b-0 border-amber-300 soft">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="https://cdn.vectorstock.com/i/500p/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg" alt="Job World Logo" className="h-16 w-32" />
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-8 text-center text-amber-600">
              <li>
                <Link to="/" className="hover:text-amber-500">Home</Link>
              </li>
              <li>
                <Link to="/internship" className="hover:text-amber-500">Internship</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-amber-500">Blogs</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-500">About</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-amber-500">Login</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-amber-600">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
              <FaInstagram /> {/* Instagram Icon */}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
              <FaLinkedinIn /> {/* LinkedIn Icon */}
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
              <FaWhatsapp /> {/* WhatsApp Icon */}
            </a>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 flex justify-center space-x-8 text-center text-sm text-amber-600">
          <p>&copy; {new Date().getFullYear()} Job World. All rights reserved.</p>
          <p>
            <Link to="/privacy" className="hover:text-amber-800">Privacy Policy</Link>
            {' | '}
            <Link to="/terms" className="hover:text-amber-800">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
