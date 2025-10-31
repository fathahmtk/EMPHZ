import React, { useEffect, useRef, useState } from 'react';

const SustainabilitySection: React.FC = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Sustainability is not an option
        </h2>
        <p className="text-xl text-[var(--color-text-secondary)] mb-16 max-w-3xl mx-auto">
           — it’s our engineering standard. See how our GRP solutions offer a lower Total Cost of Ownership and a superior lifecycle advantage.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {[{ factor: "Maintenance", emphzAdvantage: "None (zero corrosion)", competitor: "High (repainting, rust removal)" },
            { factor: "Installation", emphzAdvantage: "Fast (lightweight modules)", competitor: "Slow, requires heavy lifting" },
            { factor: "Lifecycle", emphzAdvantage: "50+ years", competitor: "10–20 years typical" },
            { factor: "Carbon Footprint", emphzAdvantage: "Minimal", competitor: "High embodied energy" }].map((item, index) => (
            <div key={index} className="flex flex-col items-start p-4">
              <h3 className="text-xl font-semibold mb-4 w-full text-left">{item.factor}</h3>
              <div className="w-full space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-md font-medium w-28 text-right text-[var(--color-text-primary)]">EMPHZ:</span>
                  <div className="relative flex-grow h-8 bg-[var(--color-surface-secondary)] rounded-full overflow-hidden border border-[var(--color-border)]">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-accent)] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: animated ? '80%' : '0%' }}
                    ></div>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-semibold text-sm">{item.emphzAdvantage}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-md font-medium text-[var(--color-text-secondary)] w-28 text-right">Competitor:</span>
                  <div className="relative flex-grow h-8 bg-[var(--color-surface-secondary)] rounded-full overflow-hidden border border-[var(--color-border)]">
                    <div
                      className="absolute inset-y-0 left-0 bg-gray-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: animated ? '30%' : '0%' }}
                    ></div>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-200 font-semibold text-sm">{item.competitor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;