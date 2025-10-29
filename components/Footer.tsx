import React from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE, CONTACT_OPTIONS, OFFICE_LOCATIONS, SUPPORT_CONTACT } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[${COLOR_PALETTE.NAVY}] text-gray-300 py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="md:col-span-1">
          <img src="https://i.ibb.co/hK4B5Q7/emphz-logo.png" alt="EMPHZ Logo" className="h-14 mb-4" />
          <p className="text-sm text-gray-400">
            Engineering Tomorrow’s Infrastructure — Today.
          </p>
          <div className="mt-6 flex space-x-4">
            {/* Placeholder for social media icons */}
            <a href="#" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}]`}><i className="fab fa-linkedin text-xl"></i>LinkedIn</a>
            <a href="#" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}]`}><i className="fab fa-twitter text-xl"></i>Twitter</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={`text-lg font-semibold text-white mb-4`}>Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>Products</Link></li>
            <li><Link to="/industries" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>Industries</Link></li>
            <li><Link to="/innovation" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>Innovation</Link></li>
            <li><Link to="/sustainability" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>Sustainability</Link></li>
            <li><Link to="/contact" className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className={`text-lg font-semibold text-white mb-4`}>Contact Us</h3>
          <ul className="space-y-2 text-sm">
             <li><a href={`mailto:${CONTACT_OPTIONS.generalEnquiry}`} className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>{CONTACT_OPTIONS.generalEnquiry}</a></li>
             <li><a href={`tel:${SUPPORT_CONTACT.phone}`} className={`text-gray-400 hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-200`}>{SUPPORT_CONTACT.phone}</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className={`text-lg font-semibold text-white mb-4`}>Our Locations</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {OFFICE_LOCATIONS.map((location, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2">📍</span>
                <span>{location}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
        &copy; {currentYear} EMPHZ Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;