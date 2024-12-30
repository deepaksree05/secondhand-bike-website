import React from 'react';
import Navbar from './components/Navbar';
import BikeCard from './components/BikeCard';
import { ArrowRight, Star, Wrench, Shield, MapPin, Phone, Mail, Bike } from 'lucide-react';

function App() {
  const bikes = [
    {
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80",
      title: "Harley-Davidson Street Glide",
      price: 15999,
      year: 2021,
      condition: "Excellent",
      features: ["1750cc V-Twin", "ABS Brakes", "Touring Package"]
    },
    {
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80",
      title: "Honda CBR1000RR",
      price: 12499,
      year: 2022,
      condition: "Very Good",
      features: ["1000cc Engine", "Quick Shifter", "Öhlins Suspension"]
    },
    {
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80",
      title: "Kawasaki Ninja ZX-6R",
      price: 8999,
      year: 2023,
      condition: "Like New",
      features: ["636cc Engine", "Traction Control", "LED Lighting"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80" 
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 px-4">
            <h1 className="text-5xl md:text-6xl font-bold">Premium Used Motorcycles</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Discover our collection of quality pre-owned motorcycles at competitive prices
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center">
              View Inventory <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MotoTrade Pro?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Every motorcycle undergoes thorough mechanical inspection</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">Factory-trained technicians and dedicated support</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Included</h3>
              <p className="text-gray-600">90-day warranty on all purchased motorcycles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section id="inventory" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Motorcycles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {bikes.map((bike, index) => (
              <BikeCard key={index} {...bike} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Showroom</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Avadi ,Chennai</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">7397300507</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">deepaksree2001@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bike className="h-8 w-8 text-orange-500" />
                <span className="text-xl font-bold">MotoTrade Pro</span>
              </div>
              <p className="text-gray-400">Your trusted source for quality pre-owned motorcycles.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#inventory" className="hover:text-orange-500">Inventory</a></li>
                <li><a href="#services" className="hover:text-orange-500">Services</a></li>
                <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9AM - 6PM</li>
                <li>Saturday: 10AM - 5PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates on new arrivals and special offers.</p>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MotoTrade Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;