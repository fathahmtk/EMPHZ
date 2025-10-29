import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import InnovationPage from './pages/InnovationPage';
import SustainabilityPage from './pages/SustainabilityPage';
import CorporatePage from './pages/CorporatePage';
import SupportPage from './pages/SupportPage';
import KnowledgePage from './pages/KnowledgePage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import NotFoundPage from './pages/NotFoundPage';
import SearchModal from './components/SearchModal';

const ScrollToTop: React.FC = () => {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // Priority 1: scroll based on navigation state for cross-page anchors.
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return; // Exit after scrolling to the element
      }
    }

    // Priority 2: scroll based on URL hash (for direct links).
    // This is less reliable with HashRouter if the link contains a second hash.
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Use a slight delay to ensure the page has rendered before scrolling.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Otherwise, scroll to the top of the page on path change.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state]);

  return null;
};


const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenSearch = () => setIsSearchOpen(true);
  const handleCloseSearch = () => setIsSearchOpen(false);

  // Add keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onSearchClick={handleOpenSearch} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productCode" element={<ProductDetailPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
        <SearchModal isOpen={isSearchOpen} onClose={handleCloseSearch} />
      </div>
    </Router>
  );
};

export default App;