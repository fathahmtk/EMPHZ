import React from 'react';
import { WARRANTY_INFO } from '../constants';
import config from '../config';

const WarrantyService: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Confidence Engineered into Every Product.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WARRANTY_INFO.map(card => (
            <div key={card.title} className="bg-[var(--color-surface-primary)] rounded-[var(--radius)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden flex flex-col">
              <img src={card.image} alt={card.title} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)]">{card.title}</h3>
                
                <div className="flex-grow">
                  {typeof card.content === 'string' ? (
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">{card.content}</p>
                  ) : (
                    <ul className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)]">
                      {(card.content as string[]).map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  )}
                </div>

                <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-[var(--color-border)]">{card.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Contact */}
        <div className="mt-20 text-center p-10 bg-[var(--color-surface-primary)] rounded-[var(--radius)] shadow-[var(--shadow-lg)] border border-[var(--color-border)]">
          <h3 className="text-2xl font-bold mb-4 text-[var(--color-text-primary)]">Need Support?</h3>
          <p className="text-lg text-[var(--color-text-secondary)]">
            📞 Call us at: <a href={`tel:${config.supportPhone}`} className="hover:text-[var(--color-brand)] transition-colors duration-200">{config.supportPhone}</a>
          </p>
          <p className="text-lg mt-2 text-[var(--color-text-secondary)]">
            ✉️ Email us: <a href={`mailto:${config.supportEmail}`} className="hover:text-[var(--color-brand)] transition-colors duration-200">{config.supportEmail}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarrantyService;