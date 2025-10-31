import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import { SEO_DATA, INDUSTRIES } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const IndustryCard: React.FC<{ industry: typeof INDUSTRIES[0] }> = ({ industry }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const isVisible = useIntersectionObserver(cardRef);

    return (
        <Link
            ref={cardRef}
            to={`/industries/${industry.slug}`}
            className={`block relative overflow-hidden rounded-[var(--radius)] shadow-md group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 ${isVisible ? 'animate-fadeInScaleUp' : ''}`}
        >
            <img
                src={industry.image}
                alt={industry.name}
                loading="lazy"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-left text-white">
                    <h3 className="text-2xl font-semibold mb-2">{industry.name}</h3>
                    <p className="text-sm opacity-90">{industry.applicationExample}</p>
                    <div className="mt-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        Learn More <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

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
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustriesPage;