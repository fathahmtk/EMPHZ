import React from 'react';
import Button from './Button';
import { HERO_SECTION } from '../constants';
import { useScrollPosition } from '../hooks/useScrollPosition';

const HeroSection: React.FC = () => {
  const { scrollY } = useScrollPosition();

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('${HERO_SECTION.backgroundImages[0]}')`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
        aria-hidden="true"
      />
      {/* Dark Gradient Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>


      <div className="relative z-20 p-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fadeInUp text-[var(--color-text-primary)]">
          {HERO_SECTION.headline}
        </h1>
        <p className="text-lg lg:text-xl font-normal text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {HERO_SECTION.subline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <Button variant="primary" href="/contact" className="px-8 py-4 text-lg">
            {HERO_SECTION.cta1}
          </Button>
          <Button variant="secondary" href="/products" className="px-8 py-4 text-lg">
            {HERO_SECTION.cta2}
          </Button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;