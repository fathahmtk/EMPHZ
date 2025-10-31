import React from 'react';
import Button from './Button';

const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-section-bg)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[var(--color-surface)] text-center p-12 rounded-lg shadow-xl border border-[var(--color-border)] overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-brand)]/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[var(--color-primary)]">
              Ready to Build with the Future of Materials?
            </h2>
            <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-[var(--color-secondary)]">
              Let's discuss how EMPHZ's GRP composite solutions can bring unparalleled durability, efficiency, and sustainability to your next project.
            </p>
            <Button 
              href="/contact"
              variant="primary"
              className="text-lg"
            >
              Request Your Quote Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;