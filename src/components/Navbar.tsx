import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Pizza } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Pizza className="h-8 w-8" />
              <span className="text-2xl font-serif font-bold italic">Papalenos</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-yellow-200 transition-colors">Home</Link>
            <Link to="/menu" className="font-medium hover:text-yellow-200 transition-colors">Menu</Link>
            <Link to="/about" className="font-medium hover:text-yellow-200 transition-colors">About Us</Link>
            <Link to="/contact" className="font-medium hover:text-yellow-200 transition-colors">Contact</Link>
            <Link to="/#order" className="bg-yellow-500 text-red-900 px-4 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors">
              Order Online
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-200 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-800 shadow-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              to="/#order" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-500 text-red-900 hover:bg-yellow-400"
              onClick={toggleMenu}
            >
              Order Online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;