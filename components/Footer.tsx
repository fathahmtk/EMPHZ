import React from 'react';
import { Link } from "react-router-dom";
import { CONTACT_OPTIONS, OFFICE_LOCATIONS, SOCIAL_LINKS } from '../constants';
import config from '../config';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] text-[var(--color-text-secondary)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="md:col-span-1">
          <Logo className="h-12 w-auto mb-4" />
          <p className="text-sm">
            Engineering Tomorrow’s Infrastructure — Today.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href={SOCIAL_LINKS.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors duration-200">LinkedIn</a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors duration-200">Twitter</a>
            <a href={SOCIAL_LINKS.googleBusiness} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors duration-200">Google Profile</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors duration-200">Products</Link></li>
            <li><Link to="/industries" className="hover:text-[var(--color-accent)] transition-colors duration-200">Industries</Link></li>
            <li><Link to="/innovation" className="hover:text-[var(--color-accent)] transition-colors duration-200">Innovation</Link></li>
            <li><Link to="/sustainability" className="hover:text-[var(--color-accent)] transition-colors duration-200">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors duration-200">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
             <li><a href={`mailto:${CONTACT_OPTIONS.generalEnquiry}`} className="hover:text-[var(--color-accent)] transition-colors duration-200">{CONTACT_OPTIONS.generalEnquiry}</a></li>
             <li><a href={`tel:${config.supportPhone}`} className="hover:text-[var(--color-accent)] transition-colors duration-200">{config.supportPhone}</a></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Our Locations</h3>
          <ul className="space-y-2 text-sm">
            {OFFICE_LOCATIONS.map((location, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 mr-2">📍</span>
                <span>{location}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] mt-12 pt-8 text-center text-sm text-[var(--color-text-secondary)]">
        &copy; {currentYear} {config.companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;