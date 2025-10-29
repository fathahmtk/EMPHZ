import React from 'react';
import {
  WARRANTY_COVERAGE,
  WARRANTY_EXCLUSIONS,
  INSTALLATION_REQUIREMENTS,
} from '../constants';
import config from '../config';

const WarrantyService: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Confidence Engineered into Every Product.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Warranty Coverage */}
          <div className="p-8 bg-[var(--color-surface)] rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold mb-4">Warranty Coverage</h3>
            <p className="text-[var(--color-text-primary)] leading-relaxed">{WARRANTY_COVERAGE}</p>
            <p className="text-[var(--color-text-secondary)] text-sm mt-4">
              Our warranty reflects our commitment to product integrity and long-term performance.
            </p>
          </div>

          {/* Exclusions */}
          <div className="p-8 bg-[var(--color-surface)] rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold mb-4">Exclusions</h3>
            <p className="text-[var(--color-text-primary)] leading-relaxed">{WARRANTY_EXCLUSIONS}</p>
            <p className="text-[var(--color-text-secondary)] text-sm mt-4">
              Please refer to our full warranty document for detailed terms and conditions.
            </p>
          </div>

          {/* Installation Requirements */}
          <div className="p-8 bg-[var(--color-surface)] rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold mb-4">Installation Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-text-primary)]">
              {INSTALLATION_REQUIREMENTS.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <p className="text-[var(--color-text-secondary)] text-sm mt-4">
              Proper installation ensures optimal performance and warranty validity.
            </p>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-20 text-center p-10 bg-[var(--color-primary)] text-white rounded-lg shadow-[var(--shadow-lg)]">
          <h3 className="text-2xl font-bold mb-4">Need Support?</h3>
          <p className="text-lg">
            📞 Call us at: <a href={`tel:${config.supportPhone}`} className="hover:text-[var(--color-brand-light)] transition-colors duration-200">{config.supportPhone}</a>
          </p>
          <p className="text-lg mt-2">
            ✉️ Email us: <a href={`mailto:${config.supportEmail}`} className="hover:text-[var(--color-brand-light)] transition-colors duration-200">{config.supportEmail}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarrantyService;