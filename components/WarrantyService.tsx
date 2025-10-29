
import React from 'react';
import {
  WARRANTY_COVERAGE,
  WARRANTY_EXCLUSIONS,
  INSTALLATION_REQUIREMENTS,
  SUPPORT_CONTACT,
  COLOR_PALETTE
} from '../constants';

const WarrantyService: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] text-center mb-16`}>
          Confidence Engineered into Every Product.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Warranty Coverage */}
          <div className={`p-8 bg-[${COLOR_PALETTE.BACKGROUND}] rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
            <h3 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Warranty Coverage</h3>
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] leading-relaxed`}>{WARRANTY_COVERAGE}</p>
            <p className={`text-gray-500 text-sm mt-4`}>
              Our warranty reflects our commitment to product integrity and long-term performance.
            </p>
          </div>

          {/* Exclusions */}
          <div className={`p-8 bg-[${COLOR_PALETTE.BACKGROUND}] rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
            <h3 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Exclusions</h3>
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] leading-relaxed`}>{WARRANTY_EXCLUSIONS}</p>
            <p className="text-gray-500 text-sm mt-4">
              Please refer to our full warranty document for detailed terms and conditions.
            </p>
          </div>

          {/* Installation Requirements */}
          <div className={`p-8 bg-[${COLOR_PALETTE.BACKGROUND}] rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
            <h3 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Installation Requirements</h3>
            <ul className={`list-disc list-inside space-y-2 text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>
              {INSTALLATION_REQUIREMENTS.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm mt-4">
              Proper installation ensures optimal performance and warranty validity.
            </p>
          </div>
        </div>

        {/* Support Contact */}
        <div className={`mt-20 text-center p-10 bg-[${COLOR_PALETTE.NAVY}] text-white rounded-lg shadow-lg`}>
          <h3 className="text-2xl font-bold mb-4">Need Support?</h3>
          <p className="text-lg">
            📞 Call us at: <a href={`tel:${SUPPORT_CONTACT.phone}`} className={`hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>{SUPPORT_CONTACT.phone}</a>
          </p>
          <p className="text-lg mt-2">
            ✉️ Email us: <a href={`mailto:${SUPPORT_CONTACT.email}`} className={`hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>{SUPPORT_CONTACT.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarrantyService;