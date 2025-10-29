import React from 'react';
import { QUALITY_FRAMEWORK, PROCESS_PHILOSOPHY } from '../constants';

const QualitySection: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Precision in Every Layer.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual: High-definition factory images */}
          <div className="lg:order-2 space-y-8">
            <img
              src="https://picsum.photos/800/600?random=factory-automated"
              alt="Automated SMC presses"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
            />
            <img
              src="https://picsum.photos/800/600?random=factory-qc"
              alt="QC lab in action"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg object-cover aspect-video"
            />
          </div>

          {/* Content: Quality Framework & Process Philosophy */}
          <div className="lg:order-1">
            <h3 className="text-2xl font-semibold mb-6">Quality Framework</h3>
            <ul className="space-y-4 mb-10">
              {QUALITY_FRAMEWORK.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-[var(--color-accent)] mr-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[var(--color-text-secondary)]">
                    <span className="font-semibold text-[var(--color-primary)]">{item.title}</span>{item.description}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Process Philosophy</h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {PROCESS_PHILOSOPHY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;