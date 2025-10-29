import React from 'react';
import Button from './Button';
import { HERO_SECTION } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <img 
          src={HERO_SECTION.backgroundImage} 
          alt="EMPHZ Factory Background" 
          className="w-full h-full object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          {HERO_SECTION.headline}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {HERO_SECTION.subline}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <Button variant="secondary" href="/products" className="min-w-[200px] text-lg">
            {HERO_SECTION.cta1}
          </Button>
          <Button variant="outline" href="/contact" className="min-w-[200px] text-lg border-white text-white hover:bg-white hover:text-black">
            {HERO_SECTION.cta2}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
