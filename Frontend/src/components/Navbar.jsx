import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-lg fixed w-full top-0 z-40 font-roboto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/"><img src="https://cdn.vectorstock.com/i/500p/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg" alt="Logo" className="h-12 w-32" /></Link>
        

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-orange-600 font-bold">
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
        </ul>

        {/* Desktop Login Button */}
        {/* <Link to="/login" className="hidden md:block text-orange-600 font-bold hover:text-amber-500">
          Login
        </Link> */}

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-orange-600 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <ul className="text-center text-orange-600 font-bold space-y-4 py-6">
          <li>
            <Link to="/" className="hover:text-amber-500" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/internship" className="hover:text-amber-500" onClick={toggleMenu}>Internship</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-amber-500" onClick={toggleMenu}>Blogs</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-amber-500" onClick={toggleMenu}>About</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
