
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { TECHNICAL_STANDARD_SUMMARY, SEO_DATA } from '../constants';
import DownloadButtons from '../components/DownloadButtons';
import MetaTags from '../components/MetaTags';
import { TechnicalStandard, Product } from '../types';
import ProductCard from '../components/ProductCard';
import SkeletonProductCard from '../components/SkeletonProductCard';
import { useUIState } from '../UIStateContext';
import { useAllProducts } from '../hooks/useAllProducts';

// Extend Product type to include categoryName for display on the card
interface ProductWithCategoryName extends Product {
  categoryName: string;
}

const PAGE_SIZE = 8; // Number of products to load per "page"

const ProductsPage: React.FC = () => {
  const { openQuickView } = useUIState();
  const { data: allProductsWithCategory, isLoading: isCatalogLoading } = useAllProducts();

  // 1. Memoize the flattened product list
  const allProducts: ProductWithCategoryName[] = useMemo(() => {
    if (isCatalogLoading || !allProductsWithCategory) return [];
    return allProductsWithCategory.map(({ product, category }) => ({
      ...product,
      categoryName: category.name,
    }));
  }, [allProductsWithCategory, isCatalogLoading]);

  // 2. State for managing displayed products and loading status for infinite scroll
  const [displayedProducts, setDisplayedProducts] = useState<ProductWithCategoryName[]>([]);
  const [loading, setLoading] = useState(false); // For infinite scroll loading
  const [hasMore, setHasMore] = useState(true);
  
  // Effect to initialize displayed products once data is loaded
  useEffect(() => {
    if (allProducts.length > 0) {
      setDisplayedProducts(allProducts.slice(0, PAGE_SIZE));
      setHasMore(allProducts.length > PAGE_SIZE);
    }
  }, [allProducts]);

  // 3. Setup IntersectionObserver to trigger loading more products
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return; // Don't re-trigger if already loading
    if (observer.current) observer.current.disconnect(); // Disconnect previous observer
    
    observer.current = new IntersectionObserver(entries => {
      // If the last element is visible and there are more products to load
      if (entries[0].isIntersecting && hasMore) {
        setLoading(true);
        // Simulate a network delay for a smoother user experience
        setTimeout(() => {
          const currentLength = displayedProducts.length;
          const nextProducts = allProducts.slice(currentLength, currentLength + PAGE_SIZE);
          
          setDisplayedProducts(prevProducts => [...prevProducts, ...nextProducts]);
          setHasMore(currentLength + PAGE_SIZE < allProducts.length);
          setLoading(false);
        }, 800);
      }
    });
    
    if (node) observer.current.observe(node); // Observe the new last element
  }, [loading, hasMore, allProducts, displayedProducts.length]);

  // Initial loading state UI
  if (isCatalogLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-300 dark:bg-zinc-700 rounded-full w-1/2 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-zinc-600 rounded-full w-3/4 mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonProductCard key={`initial-skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <MetaTags
        title={SEO_DATA.products.title}
        description={SEO_DATA.products.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Full Product Catalog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pioneering corrosion-proof, high-performance composite products built for power, infrastructure, and sustainability. Scroll down to discover our extensive range of solutions.
          </p>
        </div>

        {/* Unified Product Grid */}
        <main>
          {displayedProducts.length === 0 && !loading ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold">No Products Found</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">The product catalog is currently empty. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedProducts.map((product, index) => (
                <div key={product.code} ref={index === displayedProducts.length - 1 ? lastProductElementRef : null}>
                  <ProductCard
                    product={product}
                    onQuickViewClick={() => openQuickView(product)}
                    categoryName={product.categoryName}
                  />
                </div>
              ))}
              {/* Skeleton Loader for infinite scroll */}
              {loading && (
                <>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <SkeletonProductCard key={`skeleton-${index}`} />
                  ))}
                </>
              )}
            </div>
          )}

          {/* End of List Message */}
          {!hasMore && !loading && displayedProducts.length > 0 && (
             <div className="text-center py-10 mt-8 border-t border-gray-200 dark:border-zinc-800">
               <p className="text-lg font-medium text-gray-500 dark:text-gray-400">You've viewed all products.</p>
             </div>
          )}
        </main>

        <section className="mb-16 mt-24">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Technical Standard Summary</h3>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Our products are rigorously tested and certified to meet the highest international and national standards.
          </p>
          <div className="overflow-x-auto bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-zinc-700">
            <table className="min-w-full">
              <thead className="bg-gray-800 dark:bg-zinc-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">Property</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">EMPHZ Standard</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">International Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                {TECHNICAL_STANDARD_SUMMARY.map((item: TechnicalStandard, index: number) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-zinc-700/50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.property}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{item.emphzStandard}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{item.internationalCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <DownloadButtons />
      </div>
    </>
  );
};

export default ProductsPage;
