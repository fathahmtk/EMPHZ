
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product, ProductCategory } from '../types';
import { useProduct } from '../hooks/useProduct';
import MetaTags from '../components/MetaTags';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { useUIState } from '../UIStateContext';

const ProductDetailPage: React.FC = () => {
  const { productCode } = useParams<{ productCode: string }>();
  const { data: productData, isLoading } = useProduct(productCode);
  const { openQuickView } = useUIState();

  // Normalize images to always be an array for easier handling
  const images = React.useMemo(() => {
    if (!productData?.product?.image) return [];
    return Array.isArray(productData.product.image) ? productData.product.image : [productData.product.image];
  }, [productData]);

  const [activeIndex, setActiveIndex] = useState(0);
  
  // Image zoom functionality state
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  
  // Effect to reset active image when product changes
  useEffect(() => {
    setActiveIndex(0);
  }, [productCode]);

  const activeImage = images[activeIndex] || 'https://picsum.photos/800/600?random=product-placeholder';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  const handlePrevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500"></div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Loading Product Details...</p>
      </div>
    );
  }
  
  if (!productData) {
    return (
      <>
        <MetaTags title="Product Not Found" description="The requested product could not be found." />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button href="/products" variant="primary">
            Back to All Products
          </Button>
        </div>
      </>
    );
  }

  const { product, category } = productData;
  const relatedProducts = category.products.filter(p => p.code !== product.code).slice(0, 4);
  const descriptionText = product.description || product.useCase || product.innovation;

  return (
    <>
      <MetaTags
        title={`${product.name} - ${category.name} | EMPHZ`}
        description={descriptionText || `Technical details for ${product.name}, part of EMPHZ's GRP composite solutions.`}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8 text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="hover:text-gray-800 dark:hover:text-gray-200">Home</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="flex items-center">
              <Link to="/products" className="hover:text-gray-800 dark:hover:text-gray-200">Products</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-gray-800 dark:text-gray-200" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="flex flex-col gap-4">
            <div
              className="relative group aspect-square overflow-hidden rounded-lg shadow-lg cursor-zoom-in border border-gray-200 dark:border-zinc-700"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                src={activeImage}
                alt={`${product.name} - image ${activeIndex + 1}`}
                className="block w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: isZoomed ? 'scale(1.75)' : 'scale(1)',
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />

              {images.length > 1 && (
                <>
                  {/* Image Counter */}
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full pointer-events-none z-10">
                    {activeIndex + 1} / {images.length}
                  </div>

                  {/* Previous Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  {/* Next Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-md overflow-hidden border-2 transition-all duration-200 aspect-square focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                      activeIndex === index
                        ? 'border-teal-500'
                        : 'border-transparent hover:border-gray-400'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="animate-fadeInUp">
            <span className="text-sm font-semibold text-teal-600 dark:text-teal-500 uppercase tracking-wider">{category.name}</span>
            <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">Product Code: {product.code}</p>
            {descriptionText && <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{descriptionText}</p>}
            {product.applications && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Key Applications:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {product.applications.map((app, index) => <li key={index}>{app}</li>)}
                </ul>
              </div>
            )}
            <div className="mt-8">
              <Button href="/contact" variant="secondary">Request a Quote</Button>
            </div>
          </div>
        </div>
        
        {/* Technical Highlights from Category */}
        {(category.sharedHighlights && category.sharedHighlights.length > 0) && (
            <div className="mt-8 p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700 mb-20">
              <h4 className="text-2xl font-semibold text-center mb-4">Technical Highlights</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-4xl mx-auto">
                {category.sharedHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
        )}

        {/* Technical Specifications */}
        {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Technical Specifications</h2>
            <div className="overflow-x-auto bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700">
              <table className="min-w-full">
                <thead className="bg-gray-800 dark:bg-zinc-900 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Parameter
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Specification
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider">
                      Certification / Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  {category.technicalSnapshot.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-zinc-700/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{spec.parameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{spec.specification}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{spec.certification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.code} product={relatedProduct} onQuickViewClick={openQuickView} categoryName={category.name} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
