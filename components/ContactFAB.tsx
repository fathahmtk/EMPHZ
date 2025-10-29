
import React, { useState } from 'react';
import config from '../config';

const WhatsAppIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const ContactIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const ContactFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative flex flex-col items-center">
      {/* Action Buttons: Visible when FAB is open */}
      <div
        className={`transition-all duration-300 ease-in-out flex flex-col items-center space-y-3 mb-3 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <a
          href={config.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
        <a
          href={`tel:${config.supportPhone}`}
          className="group relative bg-[var(--color-brand)] hover:bg-[var(--color-brand-light)] text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
          aria-label="Call Us"
        >
          <PhoneIcon />
           <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Us
          </span>
        </a>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={toggleOpen}
        className="bg-[var(--color-primary)] hover:bg-gray-900 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[var(--color-brand)]/50"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 scale-0' : 'rotate-0 scale-100'}`}>
            <ContactIcon />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0 scale-100' : '-rotate-180 scale-0'}`}>
            <CloseIcon />
        </div>
      </button>
    </div>
  );
};

export default ContactFAB;