
import React from 'react';
import Button from './Button';
import { INDUSTRIES } from '../constants';

const IndustryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Across Sectors. Across Continents.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-transparent flex items-end p-6">
                <div className="text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm opacity-90">{industry.applicationExample}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Button variant="secondary" href="#">View Case Studies</Button>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;