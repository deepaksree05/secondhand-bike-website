import React from 'react';
import { Bike, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bike className="h-8 w-8 text-orange-500" />
          <span className="text-2xl font-bold">MotoTrade Pro</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#inventory" className="hover:text-orange-500 transition-colors">Inventory</a>
          <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-orange-500" />
            <span>7397300507</span>
          </div>
        </div>
      </div>
    </nav>
  );
}