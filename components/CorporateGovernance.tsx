
import React from 'react';
import Button from './Button';
import { CORPORATE_DETAILS, CERTIFICATE_DOWNLOADS, COLOR_PALETTE } from '../constants';

const CorporateGovernance: React.FC = () => {
  return (
    <section className={`py-24 bg-[${COLOR_PALETTE.BACKGROUND}]`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] text-center mb-16`}>Built on Compliance. Driven by Trust.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]">
            <h3 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-6`}>Corporate Details</h3>
            <ul className="space-y-4">
              {CORPORATE_DETAILS.map((detail, index) => (
                <li key={index} className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>
                  <span className={`font-semibold block text-[${COLOR_PALETTE.TEXT_PRIMARY}]`}>{detail.parameter}:</span> {detail.detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]">
            <h3 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-6`}>Certifications & Legal</h3>
            <div className="space-y-4">
              {CERTIFICATE_DOWNLOADS.map((doc, index) => (
                <Button key={index} variant="outline" href={doc.link} className="w-full justify-center">
                  {doc.name}
                </Button>
              ))}
            </div>
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm mt-6`}>
              EMPHZ is committed to transparency and adherence to global and national standards.
              Download our official documents for detailed compliance information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateGovernance;