import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useUIState } from '../UIStateContext';
import config from '../config';
import Logo from './Logo';
import { useScroll } from '../hooks/useScroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSearch } = useUIState();
  const { isScrolled } = useScroll(10);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Corporate', path: '/corporate' },
    { name: 'Support', path: '/support' },
    { name: 'Knowledge', path: '/knowledge' },
    { name: 'Contact', path: '/contact' },
  ];

  if (config.isAdminPortalEnabled) {
    navLinks.push({ name: 'Admin', path: '/admin' });
  }

  const activeLinkStyle = {
    color: 'var(--color-brand)',
    fontWeight: '600',
  };

  return (
    <nav className={`bg-white/90 backdrop-blur-lg sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-[var(--color-border)] transition-shadow duration-300 ${isScrolled ? 'shadow-[var(--shadow-md)]' : 'shadow-none'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="flex items-center" aria-label="EMPHZ Homepage">
          <Logo className="h-10 w-auto" />
        </NavLink>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-primary)] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.slice(0, 5).map((link) => ( 
            <NavLink
              key={link.name}
              to={link.path}
              className="text-[var(--color-primary)] hover:text-[var(--color-brand)] font-medium transition-colors duration-300"
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              {link.name}
            </NavLink>
          ))}
          <div
            onClick={openSearch}
            className="flex items-center bg-gray-100 text-[var(--color-text-secondary)] rounded-lg px-3 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-[var(--color-text-primary)] border border-[var(--color-border)]"
            role="button"
            aria-label="Search (Ctrl+K)"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm">Search...</span>
          </div>
           <NavLink
              to="/contact"
              className="bg-[var(--color-brand)]/10 text-[var(--color-brand)] hover:bg-[var(--color-brand)]/20 font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
            >
              Contact
            </NavLink>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-3 px-4">
            <button
                onClick={() => {
                  setIsOpen(false);
                  openSearch();
                }}
                className="flex items-center gap-2 text-left text-[var(--color-primary)] hover:text-[var(--color-brand)] font-medium py-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </button>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-[var(--color-primary)] hover:text-[var(--color-brand)] font-medium py-2"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;