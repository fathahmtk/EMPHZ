import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COLOR_PALETTE } from '../constants';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: 'Admin', path: '/admin' }, // Admin link
  ];

  return (
    <nav className={`bg-white/90 backdrop-blur-lg sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-[${COLOR_PALETTE.BORDER}]`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.ibb.co/hK4B5Q7/emphz-logo.png" alt="EMPHZ Logo" className="h-12" />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`text-[${COLOR_PALETTE.TEXT_PRIMARY}] focus:outline-none`}>
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
            <Link
              key={link.name}
              to={link.path}
              className={`text-[${COLOR_PALETTE.TEXT_PRIMARY}] hover:text-[${COLOR_PALETTE.TEAL}] font-medium transition-colors duration-300`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={onSearchClick}
            className={`text-[${COLOR_PALETTE.TEXT_PRIMARY}] hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-300 p-2 rounded-full hover:bg-gray-100`}
            aria-label="Search (Ctrl+K)"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
           <Link
              to="/contact"
              className={`text-[${COLOR_PALETTE.NAVY}] bg-[${COLOR_PALETTE.TEAL}]/20 hover:bg-[${COLOR_PALETTE.TEAL}]/40 font-semibold py-2 px-4 rounded-md transition-colors duration-300`}
            >
              Contact
            </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-3 px-4">
            <button
                onClick={() => {
                  setIsOpen(false);
                  onSearchClick();
                }}
                className={`flex items-center gap-2 text-left text-[${COLOR_PALETTE.TEXT_PRIMARY}] hover:text-[${COLOR_PALETTE.TEAL}] font-medium py-2`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-[${COLOR_PALETTE.TEXT_PRIMARY}] hover:text-[${COLOR_PALETTE.TEAL}] font-medium py-2`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;