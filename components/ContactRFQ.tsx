import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { CONTACT_OPTIONS, OFFICE_LOCATIONS, GENERAL_DOWNLOADS, COLOR_PALETTE } from '../constants';

const ContactRFQ: React.FC = () => {
  const navigate = useNavigate();

  const handleRequestQuoteClick = () => {
    navigate('/contact', { state: { scrollTo: 'rfq-form' } });
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-16`}>Let’s Engineer Your Next Project.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Options */}
          <div className={`text-left bg-white p-8 rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
            <h3 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-6`}>Get in Touch</h3>
            <div className="space-y-4">
              <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>
                <span className={`font-semibold block text-[${COLOR_PALETTE.TEXT_PRIMARY}]`}>General Enquiry:</span>{' '}
                <a href={`mailto:${CONTACT_OPTIONS.generalEnquiry}`} className={`hover:text-[${COLOR_PALETTE.NAVY}] transition-colors duration-200`}>{CONTACT_OPTIONS.generalEnquiry}</a>
              </p>
              <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>
                <span className={`font-semibold block text-[${COLOR_PALETTE.TEXT_PRIMARY}]`}>Technical Support:</span>{' '}
                <a href={`mailto:${CONTACT_OPTIONS.technicalSupport}`} className={`hover:text-[${COLOR_PALETTE.NAVY}] transition-colors duration-200`}>{CONTACT_OPTIONS.technicalSupport}</a>
              </p>
              <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>
                <span className={`font-semibold block text-[${COLOR_PALETTE.TEXT_PRIMARY}]`}>WhatsApp Channel:</span>{' '}
                <a href={CONTACT_OPTIONS.whatsApp} target="_blank" rel="noopener noreferrer" className={`hover:text-[${COLOR_PALETTE.NAVY}] transition-colors duration-200`}>EMPHZ Support Link</a>
              </p>
            </div>
            <div className="mt-8">
              <h4 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-3`}>Office Locations:</h4>
              <ul className="list-none space-y-2 text-gray-700">
                {OFFICE_LOCATIONS.map((location, index) => (
                  <li key={index} className="flex items-center">
                    <span className={`mr-2 text-xl text-[${COLOR_PALETTE.NAVY}]`}>📍</span> {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className={`text-center md:text-left bg-white p-8 rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}] flex flex-col justify-center`}>
            <h3 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-6`}>Ready to Partner?</h3>
            <div className="space-y-4">
              <Button variant="secondary" onClick={handleRequestQuoteClick} className="w-full justify-center">
                Request a Quotation
              </Button>
              <Button variant="outline" href={GENERAL_DOWNLOADS.find(d => d.name.includes("Product Catalog"))?.link || "#"} className="w-full justify-center">
                Download Company Profile PDF
              </Button>
            </div>
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm mt-6`}>
              Our team is available to discuss your specific project requirements and provide tailored composite solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactRFQ;