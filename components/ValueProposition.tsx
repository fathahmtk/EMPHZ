

import React from 'react';
import { KEY_VALUE_PROPOSITIONS } from '../constants';
import Icon from './Icon';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-surface)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 rounded-full text-sm font-semibold text-[var(--color-brand)] mb-4">Why Choose Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[var(--color-primary)]">Our Core Advantages</h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">Discover what sets EMPHZ apart in engineering excellence and innovation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_VALUE_PROPOSITIONS.map((prop, index) => (
            <div key={index} className="group bg-[var(--color-background)] p-8 rounded-xl shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-brand)]/50 flex flex-col items-center text-center hover:-translate-y-2">
              <div className="p-5 bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-brand)]/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                 <Icon name={prop.icon} className="h-12 w-12 text-[var(--color-brand)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-brand)] transition-colors duration-300">{prop.coreValue}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
