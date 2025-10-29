import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)] text-white p-12 rounded-lg shadow-xl text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Ready to Build with the Future of Materials?
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how EMPHZ's GRP composite solutions can bring unparalleled durability, efficiency, and sustainability to your next project.
          </p>
          <Button 
            href="/contact"
            variant="glass"
            className="text-lg"
          >
            Request Your Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;