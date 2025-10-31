import React from 'react';
import { BRAND_PILLARS } from '../constants';
import Icon from './Icon';

const BrandPillars: React.FC = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Our Foundation: Brand Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_PILLARS.map((pillar, index) => (
            <div key={index} className="bg-[var(--color-surface-primary)] backdrop-blur-md p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 border border-[var(--color-border)] hover:shadow-[var(--glow-shadow)]">
              <div className="text-[var(--color-brand)] mb-4">
                 <Icon name={pillar.icon} className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">{pillar.title}</h3>
              <p className="text-[var(--color-text-secondary)]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;