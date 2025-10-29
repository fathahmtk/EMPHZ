import React, { useState, useEffect, useRef } from 'react';
import { PRODUCT_CATALOG, COLOR_PALETTE, TECHNICAL_STANDARD_SUMMARY, SEO_DATA } from '../constants';
import ProductCategory from '../components/ProductCategory';
import DownloadButtons from '../components/DownloadButtons';
import MetaTags from '../components/MetaTags';
import { TechnicalStandard, Product } from '../types';
import QuickViewModal from '../components/QuickViewModal';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(PRODUCT_CATALOG[0]?.code || '');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
          });
          setActiveCategory(topEntry.target.id);
        }
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: 0,
      }
    );
    observerRef.current = observer;

    PRODUCT_CATALOG.forEach(category => {
      const element = document.getElementById(category.code);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryCode: string) => {
    e.preventDefault();
    document.getElementById(categoryCode)?.scrollIntoView();
  };

  const handleMobileNavChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryCode = e.target.value;
    document.getElementById(categoryCode)?.scrollIntoView();
  };
  
  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <>
      <MetaTags
        title={SEO_DATA.products.title}
        description={SEO_DATA.products.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className={`text-4xl lg:text-5xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-6`}>
            Full Product Catalog
          </h1>
          <p className={`text-lg text-[${COLOR_PALETTE.TEXT_SECONDARY}] max-w-3xl mx-auto`}>
            Pioneering corrosion-proof, high-performance composite products built for power, infrastructure, and sustainability. Use the navigation below to explore our offerings.
          </p>
        </div>

        {/* Mobile Dropdown Nav */}
        <div className="md:hidden mb-8">
            <label htmlFor="category-select" className="sr-only">Jump to category</label>
            <select
                id="category-select"
                onChange={handleMobileNavChange}
                value={activeCategory}
                className={`w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[${COLOR_PALETTE.TEAL}]/80 focus:border-[${COLOR_PALETTE.TEAL}] text-lg font-semibold bg-white border-[${COLOR_PALETTE.BORDER}]`}
            >
                {PRODUCT_CATALOG.map(cat => <option key={cat.code} value={cat.code}>{cat.name}</option>)}
            </select>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Desktop Sidebar Nav */}
          <aside className="hidden md:block w-full md:w-1/4 lg:w-1/5">
              <div className="sticky top-28">
                  <h3 className={`text-xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Product Categories</h3>
                  <nav>
                      <ul className="space-y-2">
                          {PRODUCT_CATALOG.map(cat => (
                              <li key={cat.code}>
                                  <a 
                                      href={`#${cat.code}`}
                                      onClick={(e) => handleCategoryClick(e, cat.code)}
                                      className={`block p-2 rounded-md text-sm font-medium transition-all duration-200 border-l-4 ${
                                          activeCategory === cat.code
                                          ? `bg-[${COLOR_PALETTE.TEAL}]/10 border-[${COLOR_PALETTE.TEAL}] text-[${COLOR_PALETTE.NAVY}] font-semibold`
                                          : `border-transparent text-[${COLOR_PALETTE.TEXT_SECONDARY}] hover:bg-gray-100 hover:border-gray-300`
                                      }`}
                                  >
                                      {cat.name}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </nav>
              </div>
          </aside>
          
          {/* Main Content */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {PRODUCT_CATALOG.length > 0 ? (
              PRODUCT_CATALOG.map((category) => (
                <ProductCategory key={category.code} category={category} onQuickViewClick={handleQuickView} />
              ))
            ) : (
              <div className="text-center py-16">
                <h2 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}]`}>No Products Found</h2>
                <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] mt-2`}>The product catalog is currently empty. Please check back later.</p>
              </div>
            )}
          </main>
        </div>


        <section className="mb-16 mt-24">
          <h3 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-6 text-center`}>Technical Standard Summary</h3>
          <p className={`text-center text-lg text-[${COLOR_PALETTE.TEXT_SECONDARY}] mb-10 max-w-3xl mx-auto`}>
            Our products are rigorously tested and certified to meet the highest international and national standards.
          </p>
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm p-4 border border-[${COLOR_PALETTE.BORDER}]">
            <table className="min-w-full">
              <thead className={`bg-[${COLOR_PALETTE.NAVY}] text-white`}>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Property</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">EMPHZ Standard</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">International Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[${COLOR_PALETTE.BORDER}]">
                {TECHNICAL_STANDARD_SUMMARY.map((item: TechnicalStandard, index: number) => (
                  <tr key={index} className={`hover:bg-[${COLOR_PALETTE.BACKGROUND}]`}>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-[${COLOR_PALETTE.TEXT_PRIMARY}]`}>{item.property}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{item.emphzStandard}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{item.internationalCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <DownloadButtons />
      </div>
      <QuickViewModal product={quickViewProduct} onClose={handleCloseQuickView} />
    </>
  );
};

export default ProductsPage;