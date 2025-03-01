import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza, Clock, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Pizza className="h-8 w-8" />
              <span className="text-2xl font-serif font-bold italic">Papalenos</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Authentic Italian cuisine with the finest ingredients, bringing the taste of Italy to your table since 1985.
            </p>
          </div>
          
          {/* Opening hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" /> Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Monday: 11:00 AM - 9:00 PM</li>
              <li>Tuesday: 11:00 AM - 9:00 PM</li>
              <li>Wednesday: 11:00 AM - 9:00 PM</li>
              <li>Thursday: 11:00 AM - 9:00 PM</li>
              <li>Friday: 11:00 AM - 9:00 PM</li>
              <li>Saturday: 11:00 AM - 9:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>108 Center St, Berea, Kentucky 40403</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>859-986-4497</span>
              </li>
            </ul>
          </div>
          
          {/* Quick links - Fixed positioning to be in line with other headers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-200">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-yellow-200">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-200">Contact</Link>
              </li>
              <li>
                <Link to="/#order" className="text-gray-300 hover:text-yellow-200">Order Online</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Papalenos Italian Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;