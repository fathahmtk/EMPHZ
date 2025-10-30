import React from 'react';
import { Link } from "react-router-dom";
import { CONTACT_OPTIONS, OFFICE_LOCATIONS, SOCIAL_LINKS } from '../constants';
import config from '../config';
import Logo from './Logo';
import Icon from './Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-primary)] text-[var(--color-text-secondary)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div className="md:col-span-1">
          <Logo className="h-12 w-auto mb-4" />
          <p className="text-sm leading-relaxed mb-6">
            Engineering Tomorrow's Infrastructure — Today.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[var(--color-brand)] transition-colors duration-200 hover:scale-110 transform">
              <Icon name="linkedin" className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-[var(--color-brand)] transition-colors duration-200 hover:scale-110 transform">
              <Icon name="twitter" className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.googleBusiness} target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="text-gray-400 hover:text-[var(--color-brand)] transition-colors duration-200 hover:scale-110 transform">
               <Icon name="google" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">→</span> Products</Link></li>
            <li><Link to="/industries" className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">→</span> Industries</Link></li>
            <li><Link to="/innovation" className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">→</span> Innovation</Link></li>
            <li><Link to="/sustainability" className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">→</span> Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">→</span> Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
          <ul className="space-y-3 text-sm">
             <li><a href={`mailto:${CONTACT_OPTIONS.generalEnquiry}`} className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">✉</span> {CONTACT_OPTIONS.generalEnquiry}</a></li>
             <li><a href={`tel:${config.supportPhone}`} className="hover:text-[var(--color-brand)] transition-colors duration-200 flex items-center gap-2"><span className="text-[var(--color-brand)]">📞</span> {config.supportPhone}</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">Our Locations</h3>
          <ul className="space-y-3 text-sm">
            {OFFICE_LOCATIONS.map((location, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[var(--color-brand)] mt-1 flex-shrink-0">📍</span>
                <span>{location}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-brand)]/20 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {currentYear} {config.companyName}. All rights reserved.</p>
        <p className="mt-2 text-xs">Engineered with precision. Built for excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
