import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import { useUIState } from './UIStateContext';
import config from './config';
import ToastContainer from './components/ToastContainer';
import ContactFAB from './components/ContactFAB';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductCategoryPage = lazy(() => import('./pages/ProductCategoryPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const IndustryLandingPage = lazy(() => import('./pages/IndustryLandingPage'));
const AutomobileIndustryPage = lazy(() => import('./pages/AutomobileIndustryPage')); // New Page
const InnovationPage = lazy(() => import('./pages/InnovationPage'));
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage'));
const CorporatePage = lazy(() => import('./pages/CorporatePage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const KnowledgePage = lazy(() => import('./pages/KnowledgePage'));
const GrpApplicationsPage = lazy(() => import('./pages/GrpApplicationsPage'));
const GrpSingleDoorEnclosureTechnicalPage = lazy(() => import('./pages/GrpSingleDoorEnclosureTechnicalPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const DigitalBusinessCardPage = lazy(() => import('./pages/DigitalBusinessCardPage'));

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

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
        <ScrollToTopButton />
        <ContactFAB />
      </div>
    </div>
  </>
);


const App: React.FC = () => {
  const {
    isSearchOpen,
    quickViewProduct,
    openSearch,
    closeSearch,
    closeQuickView,
  } = useUIState();

  // Add keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        isSearchOpen ? closeSearch() : openSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen, openSearch, closeSearch]);

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dbc" element={<DigitalBusinessCardPage />} />

          {/* Main website routes with layout */}
          <Route path="/*" element={
            <MainLayout>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/category/:categorySlug" element={<ProductCategoryPage />} />
                  <Route path="/products/:productCode" element={<ProductDetailPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/industries/automobile-transport" element={<AutomobileIndustryPage />} />
                  <Route path="/industries/:industrySlug" element={<IndustryLandingPage />} />
                  <Route path="/innovation" element={<InnovationPage />} />
                  <Route path="/sustainability" element={<SustainabilityPage />} />
                  <Route path="/corporate" element={<CorporatePage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/knowledge" element={<KnowledgePage />} />
                  <Route path="/knowledge/grp-applications" element={<GrpApplicationsPage />} />
                  <Route path="/knowledge/grp-single-door-enclosure-technical-data" element={<GrpSingleDoorEnclosureTechnicalPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  {config.isAdminPortalEnabled && <Route path="/admin" element={<AdminPage />} />}
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainLayout>
          } />
        </Routes>
      </Suspense>
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
      <QuickViewModal product={quickViewProduct} onClose={closeQuickView} />
      <ToastContainer />
    </Router>
  );
};

export default App;