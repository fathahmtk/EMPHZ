import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import { HERO_SECTION } from '../constants';

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = HERO_SECTION.backgroundImages;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // Auto-cycle every 7 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [handleNext]);

  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden"
      aria-roledescription="carousel"
      aria-live="polite"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`w-full h-full absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Image ${index + 1} of ${images.length}`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={src}
              alt={`EMPHZ Background ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'auto' : 'async'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              className={`w-full h-full object-cover ${
                index === currentIndex ? 'animate-hero-zoom' : ''
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-8 max-w-4xl mx-auto">
        <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 bg-[var(--color-brand)]/20 backdrop-blur-md border border-[var(--color-brand)]/40 rounded-full text-sm font-semibold text-white mb-4">Engineering Innovation</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fadeInUp text-shadow-strong" style={{ animationDelay: '0.2s' }}>
          {HERO_SECTION.headline}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light max-w-3xl mx-auto mb-10 animate-fadeInUp text-shadow-strong leading-relaxed" style={{ animationDelay: '0.3s' }}>
          {HERO_SECTION.subline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <Button variant="glass-cta" href="/products" className="px-8 py-4 text-base font-semibold">
            {HERO_SECTION.cta1}
          </Button>
          <Button variant="glass-subtle" href="/contact" className="px-8 py-4 text-base font-semibold">
            {HERO_SECTION.cta2}
          </Button>
        </div>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="absolute z-20 left-4 sm:left-8 top-1/2 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <div className="absolute z-20 right-4 sm:right-8 top-1/2 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full hover:bg-white/40 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Carousel Dot Indicators */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 backdrop-blur-md border border-white/40 ${
              index === currentIndex ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;