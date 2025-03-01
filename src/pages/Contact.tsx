import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="bg-red-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with any questions, feedback, or to make a reservation.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </div>
      
      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-2">Our Location</h3>
            <p className="text-gray-700">
              108 Center St<br />
              Berea, Kentucky 40403
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 text-red-700 hover:text-red-800 font-medium"
            >
              Get Directions
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-2">Phone</h3>
            <p className="text-gray-700 mb-2">
              <a href="tel:+18599864497" className="hover:text-red-700">859-986-4497</a>
            </p>
            <p className="mt-4 text-gray-600 text-sm">
              We aim to respond to all inquiries within 24 hours
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-2">Opening Hours</h3>
            <ul className="text-gray-700">
              <li className="mb-1">Monday: 11:00 AM - 9:00 PM</li>
              <li className="mb-1">Tuesday: 11:00 AM - 9:00 PM</li>
              <li className="mb-1">Wednesday: 11:00 AM - 9:00 PM</li>
              <li className="mb-1">Thursday: 11:00 AM - 9:00 PM</li>
              <li className="mb-1">Friday: 11:00 AM - 9:00 PM</li>
              <li className="mb-1">Saturday: 11:00 AM - 9:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="md:flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-serif font-bold text-red-800 mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Make a Reservation</option>
                  <option value="catering">Catering Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2 bg-gray-200">
            {/* This would be a Google Map in a real application */}
            <div className="h-full flex items-center justify-center p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-red-800 mb-2">Find Us</h3>
                <p className="text-gray-700 mb-4">
                  Located in the heart of Berea, Kentucky, just a short drive from I-75.
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md font-medium inline-block transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reservations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-red-800 text-white rounded-lg shadow-md p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Make a Reservation</h2>
              <p className="text-gray-200 mb-4">
                For parties of 6 or more, we recommend making a reservation to ensure we can accommodate your group. For smaller parties, walk-ins are welcome, but reservations are appreciated.
              </p>
              <p className="text-gray-200 mb-4">
                For special events or large parties, please contact us directly by phone at least one week in advance.
              </p>
              <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-red-900 px-6 py-2 rounded font-medium transition-colors">
                Book a Table
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant table setting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-2">Do you offer takeout?</h3>
            <p className="text-gray-700">
              Yes, we offer takeout services. You can order online through our website or by calling us directly.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-2">Do you accommodate dietary restrictions?</h3>
            <p className="text-gray-700">
              Absolutely! We offer gluten-free pasta and pizza options, and many of our dishes can be modified to accommodate vegetarian and vegan diets. Please inform your server about any allergies or dietary restrictions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-2">Do you have a private dining room?</h3>
            <p className="text-gray-700">
              Yes, we have a private dining room that can accommodate up to 30 guests. It's perfect for birthday celebrations, corporate events, and family gatherings. Please contact us for availability and pricing.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-red-800 mb-2">Do you offer catering services?</h3>
            <p className="text-gray-700">
              Yes, we offer catering for events of all sizes. Our catering menu includes a variety of appetizers, pasta dishes, pizzas, and desserts. Please contact us at least 48 hours in advance to place a catering order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;