import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { INDUSTRIES } from '../constants';

const IndustryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Across Sectors. Across Continents.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <Link
              key={index}
              to={`/industries/${industry.slug}`}
              className="block relative overflow-hidden rounded-lg shadow-md group transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={industry.image}
                alt={industry.name}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/85 transition-colors duration-300 flex items-end p-6">
                <div className="text-left text-white">
                  <h3 className="text-2xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-sm opacity-90">{industry.applicationExample}</p>
                   <div className="mt-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-16">
          <Button variant="secondary" href="/industries">Explore All Industries</Button>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;