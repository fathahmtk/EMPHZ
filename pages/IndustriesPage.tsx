
import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import { SEO_DATA, INDUSTRIES } from '../constants';

const IndustriesPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.industries.title}
        description={SEO_DATA.industries.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Industries We Empower
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            From power grids to public infrastructure, EMPHZ provides robust composite solutions engineered for the unique challenges of each sector. Explore our industry-specific applications to see how we deliver value.
          </p>
        </div>
        
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
      </div>
    </>
  );
};

export default IndustriesPage;