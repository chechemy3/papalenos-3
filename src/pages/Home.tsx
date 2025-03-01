import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Users, ChefHat, ArrowRight } from 'lucide-react';
import { Timeline } from '../components/ui/timeline';

const Home = () => {
  const timelineData = [
    {
      title: "1985",
      content: (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            The Papaleno family opens a small pizzeria in the heart of the city, serving traditional recipes from their hometown in Sicily.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Original Papalenos restaurant" 
            className="rounded-lg shadow-md h-48 w-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "1995",
      content: (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            After growing popularity, Papalenos expands to a larger location and adds a full menu of pasta dishes and Italian specialties.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Expanded restaurant" 
              className="rounded-lg shadow-md h-32 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Pizza oven" 
              className="rounded-lg shadow-md h-32 w-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2005",
      content: (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Papalenos wins its first "Best Italian Restaurant" award and becomes a beloved institution in the community.
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <Award className="h-8 w-8" />
            </div>
          </div>
          <p className="text-gray-700 text-center font-medium">
            "Best Italian Restaurant in Kentucky"
          </p>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            With the third generation of the Papaleno family now involved, we continue to serve authentic Italian cuisine while embracing modern culinary innovations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern restaurant" 
              className="rounded-lg shadow-md h-32 w-full object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Outdoor seating" 
              className="rounded-lg shadow-md h-32 w-full object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Authentic Italian <span className="text-yellow-400">Cuisine</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
            Experience the taste of Italy with our handcrafted pizzas and homemade pasta
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/menu" 
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              View Menu
            </Link>
            <Link 
              to="/#order" 
              className="bg-yellow-500 hover:bg-yellow-600 text-red-900 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-800 mb-4">Welcome to Papalenos</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              For over 35 years, we've been serving authentic Italian cuisine made with love and the finest ingredients. 
              Our recipes have been passed down through generations, bringing the true taste of Italy to your table.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Authentic Recipes</h3>
              <p className="text-gray-700">
                Our dishes are prepared using traditional recipes from various regions of Italy, ensuring an authentic dining experience.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Quality Ingredients</h3>
              <p className="text-gray-700">
                We use only the finest and freshest ingredients, including imported Italian products, to create our delicious dishes.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="bg-red-700 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Family Atmosphere</h3>
              <p className="text-gray-700">
                Our warm and welcoming environment makes every guest feel like part of the Papalenos family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline data={timelineData} />

      {/* Featured Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-800 mb-4">Our Signature Dishes</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our most beloved dishes that have been perfected over generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Margherita Pizza" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">Margherita Pizza</h3>
                <p className="text-gray-700 mb-4">
                  Our classic pizza with San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.
                </p>
                <Link to="/menu" className="text-red-700 font-medium flex items-center hover:text-red-800">
                  View on Menu <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Fettuccine Alfredo" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">Fettuccine Alfredo</h3>
                <p className="text-gray-700 mb-4">
                  Homemade fettuccine pasta in a rich and creamy Alfredo sauce with Parmigiano-Reggiano cheese.
                </p>
                <Link to="/menu" className="text-red-700 font-medium flex items-center hover:text-red-800">
                  View on Menu <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Tiramisu" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">Tiramisu</h3>
                <p className="text-gray-700 mb-4">
                  Our signature dessert with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.
                </p>
                <Link to="/menu" className="text-red-700 font-medium flex items-center hover:text-red-800">
                  View on Menu <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="order" className="py-16 bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900 rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Order Online</h2>
                <p className="text-lg text-gray-200 mb-6">
                  Enjoy our authentic Italian cuisine in the comfort of your home. Order online for pickup.
                </p>
                <ul className="mb-8 space-y-2">
                  <li className="flex items-center">
                    <div className="bg-yellow-500 rounded-full p-1 mr-3">
                      <svg className="h-4 w-4 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Quick and easy ordering process</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-yellow-500 rounded-full p-1 mr-3">
                      <svg className="h-4 w-4 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Fresh, hot food ready for pickup</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-yellow-500 rounded-full p-1 mr-3">
                      <svg className="h-4 w-4 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Special offers and loyalty rewards</span>
                  </li>
                </ul>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-red-900 px-8 py-3 rounded-md font-medium text-lg transition-colors">
                  Place Your Order
                </button>
              </div>
              <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')" }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-red-800 mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The best Italian food I've had outside of Italy! The pasta is perfectly cooked and the pizza crust is amazing. Definitely worth a visit!"
              </p>
              <div className="font-medium text-red-800">- Maria S.</div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Papalenos has been our family's go-to Italian restaurant for years. The warm atmosphere and friendly staff make every visit special. The food is consistently excellent!"
              </p>
              <div className="font-medium text-red-800">- James T.</div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I ordered takeout and was impressed by how fresh everything tasted. The tiramisu is to die for! Will definitely be ordering again soon."
              </p>
              <div className="font-medium text-red-800">- Sarah L.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;