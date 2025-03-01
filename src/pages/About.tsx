import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-red-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the passion and tradition behind Papalenos Italian Restaurant
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </div>
      
      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">The Papaleno Family</h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-700 mb-4">
              Papalenos Italian Restaurant was founded in 1985 by Giuseppe and Maria Papaleno, who immigrated to America from Sicily with a dream of sharing their family's culinary traditions.
            </p>
            <p className="text-gray-700 mb-4">
              Starting as a small pizzeria with just a few tables, Giuseppe would make the pizzas while Maria greeted customers and managed the front of house. Their commitment to authentic recipes and quality ingredients quickly earned them a loyal following.
            </p>
            <p className="text-gray-700">
              Today, the second and third generations of the Papaleno family continue to run the restaurant, maintaining the same dedication to quality and tradition while embracing modern culinary innovations. What hasn't changed is our commitment to making every guest feel like part of our family.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do at Papalenos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Quality</h3>
              <p className="text-gray-700">
                We use only the finest ingredients, including imported Italian products and locally sourced seasonal items. Our commitment to quality is unwavering.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Family</h3>
              <p className="text-gray-700">
                We treat our staff and customers like family. Many of our employees have been with us for decades, and we've watched generations of families dine with us.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Tradition</h3>
              <p className="text-gray-700">
                We honor traditional Italian cooking methods and recipes that have been passed down through generations, preserving the authentic flavors of Italy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet the Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The passionate people behind your favorite Italian dishes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Chef Antonio Papaleno" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-red-800 mb-1">Antonio Papaleno</h3>
              <p className="text-sm text-yellow-600 mb-4">Executive Chef & Owner</p>
              <p className="text-gray-700">
                Grandson of founders Giuseppe and Maria, Antonio trained in Sicily before returning to lead our kitchen. His innovative approach to traditional recipes has earned us numerous culinary awards.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Sofia Papaleno" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-red-800 mb-1">Sofia Papaleno</h3>
              <p className="text-sm text-yellow-600 mb-4">General Manager</p>
              <p className="text-gray-700">
                With a background in hospitality management, Sofia ensures that every guest has an exceptional dining experience. Her warm personality embodies our family-first approach.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Marco Rossi" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-red-800 mb-1">Marco Rossi</h3>
              <p className="text-sm text-yellow-600 mb-4">Head Pizza Chef</p>
              <p className="text-gray-700">
                Marco has been perfecting his pizza dough for over 20 years. His secret fermentation process creates our signature light and crispy crust that customers rave about.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Restaurant */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-red-800 mb-4">Our Restaurant</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A warm and inviting space designed to make you feel at home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-md mb-4 h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant food" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            <div className="lg:mt-12">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant ambiance" 
                className="rounded-lg shadow-md mb-4 h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Pizza oven" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restaurant bar" 
                className="rounded-lg shadow-md mb-4 h-64 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Outdoor seating" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Community Involvement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-red-800 text-white rounded-lg shadow-md p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-serif font-bold mb-4">Community Involvement</h2>
              <p className="text-gray-200 mb-4">
                At Papalenos, we believe in giving back to the community that has supported us for over three decades. We regularly participate in local events, sponsor youth sports teams, and donate meals to those in need.
              </p>
              <p className="text-gray-200 mb-4">
                Our annual "Pasta for a Purpose" fundraiser has raised over $100,000 for local charities over the past decade.
              </p>
              <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-red-900 px-6 py-2 rounded font-medium transition-colors">
                Learn More About Our Community Work
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Community event" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;