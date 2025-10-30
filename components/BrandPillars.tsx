import React from 'react';
import { BRAND_PILLARS } from '../constants';
import Icon from './Icon';

const BrandPillars: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 rounded-full text-sm font-semibold text-[var(--color-brand)] mb-4">Our Foundation</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-primary)]">Brand Pillars</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">The core principles that guide everything we do</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_PILLARS.map((pillar, index) => (
            <div key={index} className="group bg-[var(--color-surface)] p-8 rounded-xl shadow-[var(--shadow-md)] flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 border border-[var(--color-border)] hover:shadow-[var(--shadow-xl)] hover:border-[var(--color-brand)]/50">
              <div className="text-[var(--color-brand)] mb-6 group-hover:scale-125 transition-transform duration-300">
                 <Icon name={pillar.icon} className="h-14 w-14" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-300">{pillar.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;
