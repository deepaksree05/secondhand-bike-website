import React from 'react';
import { Check } from 'lucide-react';

interface BikeCardProps {
  image: string;
  title: string;
  price: number;
  year: number;
  condition: string;
  features: string[];
}

export default function BikeCard({ image, title, price, year, condition, features }: BikeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-orange-600"> ₹{price.toLocaleString()}</span>
          <div className="text-sm text-gray-600">
            <span className="mr-3">{year}</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">{condition}</span>
          </div>
        </div>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}