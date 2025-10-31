import React from 'react';
import Button from './Button';
import { CORPORATE_PAGE_CARDS } from '../constants';
import { CorporateDetail, CertificateDownload } from '../types';

const CorporateGovernance: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Built on Compliance. Driven by Trust.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {CORPORATE_PAGE_CARDS.map(card => (
            <div key={card.title} className="bg-[var(--color-surface-primary)] rounded-[var(--radius)] shadow-[var(--shadow-md)] border border-[var(--color-border)] overflow-hidden flex flex-col">
              <img src={card.image} alt={card.title} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold mb-6">{card.title}</h3>
                
                {card.type === 'details' && (
                  <ul className="space-y-4 flex-grow">
                    {(card.content as CorporateDetail[]).map((detail, index) => (
                      <li key={index} className="text-[var(--color-text-secondary)]">
                        <span className="font-semibold block text-[var(--color-text-primary)]">{detail.parameter}:</span> {detail.detail}
                      </li>
                    ))}
                  </ul>
                )}

                {card.type === 'downloads' && (
                  <div className="space-y-4 flex-grow flex flex-col">
                     <div className="space-y-4">
                        {(card.content as CertificateDownload[]).map((doc, index) => (
                        <Button key={index} variant="secondary" href={doc.link} className="w-full justify-center">
                            {doc.name}
                        </Button>
                        ))}
                     </div>
                      <p className="text-[var(--color-text-secondary)] text-sm mt-6 flex-grow flex items-end">
                        EMPHZ is committed to transparency and adherence to global standards. Download our official documents for detailed compliance information.
                      </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateGovernance;