
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { useUIState } from '../UIStateContext';
import config from '../config';

const SunIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openSearch } = useUIState();

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

  return (
    <nav className="bg-white/90 dark:bg-zinc-900/80 backdrop-blur-lg sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-zinc-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="https://i.ibb.co/hK4B5Q7/emphz-logo.png" alt="EMPHZ Logo" className="h-12" />
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
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
              className="text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <div
            onClick={openSearch}
            className="flex items-center bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 rounded-md px-3 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-zinc-700 hover:text-gray-600 dark:hover:text-zinc-200 border border-gray-200 dark:border-zinc-700"
            role="button"
            aria-label="Search (Ctrl+K)"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm">Search...</span>
          </div>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 p-2 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
           <Link
              to="/contact"
              className="text-teal-700 dark:text-teal-400 bg-teal-500/20 hover:bg-teal-500/30 font-semibold py-2 px-4 rounded-md transition-colors duration-300"
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
                  openSearch();
                }}
                className="flex items-center gap-2 text-left text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 font-medium py-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-500 font-medium py-2"
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