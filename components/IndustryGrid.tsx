import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { INDUSTRIES } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const IndustryCard: React.FC<{ industry: typeof INDUSTRIES[0] }> = ({ industry }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const isVisible = useIntersectionObserver(cardRef);

    return (
        <Link
            ref={cardRef}
            to={`/industries/${industry.slug}`}
            className={`block relative overflow-hidden rounded-[var(--radius)] shadow-lg group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--glow-shadow)] opacity-0 ${isVisible ? 'animate-fadeInScaleUp' : ''}`}
        >
            <img
                src={industry.image}
                alt={industry.name}
                loading="lazy"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:from-black/80 transition-all duration-300 flex items-end p-6">
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

const IndustryGrid: React.FC = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Across Sectors. Across Continents.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
        <div className="mt-16">
          <Button variant="primary" href="/industries">Explore All Industries</Button>
        </div>
      </div>
    </section>
  );
};

export default IndustryGrid;