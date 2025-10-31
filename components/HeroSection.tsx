import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import { HERO_SECTION } from '../constants';

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // Key to reset animations
  const images = HERO_SECTION.backgroundImages;

  const resetProgress = () => {
    setProgressKey(prevKey => prevKey + 1);
  };

  const handleNext = useCallback((): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetProgress();
  }, [images.length]);

  const handlePrev = useCallback((): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetProgress();
  }, [images.length]);

  const goToSlide = useCallback((index: number): void => {
    setCurrentIndex(index);
    resetProgress();
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 7000); // Auto-cycle every 7 seconds
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
            // Use a key that changes for the active slide to force re-mount and restart animation
            key={`${src}-${index === currentIndex ? progressKey : 'inactive'}`}
            className={`w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
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
                index === currentIndex ? 'animate-zoom-out' : ''
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Hero Content - Adding a key resets the animation on each slide change */}
      <div className="relative z-10 p-8 max-w-4xl mx-auto" key={progressKey}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 animate-fadeInUp text-shadow-strong">
          {HERO_SECTION.headline}
        </h1>
        <p className="text-lg lg:text-xl font-normal max-w-3xl mx-auto mb-8 animate-fadeInUp text-shadow-strong" style={{ animationDelay: '0.3s' }}>
          {HERO_SECTION.subline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <Button variant="outline-light" href="/products" className="px-6 py-3 text-lg">
            {HERO_SECTION.cta1}
          </Button>
          <Button variant="glass-cta" href="/contact" className="px-6 py-3 text-lg">
            {HERO_SECTION.cta2}
          </Button>
        </div>
      </div>

      {/* Carousel Navigation Controls */}
      <div className="absolute z-20 left-4 sm:left-6 top-1/2 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-black/20 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <div className="absolute z-20 right-4 sm:right-6 top-1/2 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-black/20 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-black/50 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Bottom Controls Wrapper */}
      <div className="absolute z-20 bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-xs flex flex-col items-center gap-3">
        {/* Progress Bar */}
        <div className="w-full bg-white/30 backdrop-blur-sm rounded-full h-1 overflow-hidden">
            <div key={progressKey} className="h-full bg-[var(--color-brand)] animate-progress-bar"></div>
        </div>
        {/* Carousel Dot Indicators */}
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 backdrop-blur-md border border-white/40 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;