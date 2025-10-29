
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_CATALOG, COLOR_PALETTE } from '../constants';
import { Product, ProductCategory } from '../types';
import MetaTags from '../components/MetaTags';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productCode } = useParams<{ productCode: string }>();

  // Find product and category
  let product: Product | undefined;
  let category: ProductCategory | undefined;

  for (const cat of PRODUCT_CATALOG) {
    const foundProduct = cat.products.find(p => p.code === productCode);
    if (foundProduct) {
      product = foundProduct;
      category = cat;
      break;
    }
  }

  // Normalize images to always be an array for easier handling
  const images = React.useMemo(() => {
    if (!product?.image) return [];
    return Array.isArray(product.image) ? product.image : [product.image];
  }, [product]);

  const [activeImage, setActiveImage] = useState<string>('');
  
  // Image zoom functionality state
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomLocked, setIsZoomLocked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const isMouseOver = React.useRef(false);
  
  // Effect to update the active image when the product or images change
  useEffect(() => {
    setActiveImage(images[0] || 'https://picsum.photos/800/600?random=product-placeholder');
  }, [productCode, images]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    isMouseOver.current = true;
    if (!isZoomLocked) setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    isMouseOver.current = false;
    if (!isZoomLocked) setIsZoomed(false);
  };

  const handleClick = () => {
    const newLockState = !isZoomLocked;
    setIsZoomLocked(newLockState);
    setIsZoomed(newLockState ? true : isMouseOver.current);
  };

  const handleQuickView = (product: Product) => {
    console.log('Quick View triggered for related product:', product.name);
    // In a real app, this could open a modal
  };
  
  if (!product || !category) {
    return (
      <>
        <MetaTags title="Product Not Found" description="The requested product could not be found." />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className={`text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Product Not Found</h1>
          <p className="text-lg text-gray-700 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button href="/products" variant="primary">
            Back to All Products
          </Button>
        </div>
      </>
    );
  }

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
        <nav className={`text-sm mb-8 text-[${COLOR_PALETTE.TEXT_SECONDARY}]`} aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className={`hover:text-[${COLOR_PALETTE.NAVY}]`}>Home</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="flex items-center">
              <Link to="/products" className={`hover:text-[${COLOR_PALETTE.NAVY}]`}>Products</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className={`text-[${COLOR_PALETTE.TEXT_PRIMARY}]`} aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="flex flex-col gap-4">
            <div
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-zoom-in border border-[${COLOR_PALETTE.BORDER}]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={handleClick}
            >
              <img
                src={activeImage}
                alt={product.name}
                className="block w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{
                  transform: isZoomed ? 'scale(1.75)' : 'scale(1)',
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }}
              />
            </div>

            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`rounded-md overflow-hidden border-2 transition-all duration-200 aspect-square focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${COLOR_PALETTE.TEAL}] ${
                      activeImage === img
                        ? `border-[${COLOR_PALETTE.TEAL}]`
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
            <span className={`text-sm font-semibold text-[${COLOR_PALETTE.TEAL}] uppercase tracking-wider`}>{category.name}</span>
            <h1 className={`text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mt-2 mb-4`}>{product.name}</h1>
            <p className={`text-lg text-[${COLOR_PALETTE.TEXT_SECONDARY}] mb-6`}>Product Code: {product.code}</p>
            {descriptionText && <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] leading-relaxed mb-6`}>{descriptionText}</p>}
            {product.applications && (
              <div className="mb-4">
                <h4 className={`text-lg font-semibold text-[${COLOR_PALETTE.NAVY}] mb-2`}>Key Applications:</h4>
                <ul className={`list-disc list-inside text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>
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
            <div className={`mt-8 p-8 bg-white rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}] mb-20`}>
              <h4 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4 text-center`}>Technical Highlights</h4>
              <ul className={`list-disc list-inside text-[${COLOR_PALETTE.TEXT_SECONDARY}] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-4xl mx-auto`}>
                {category.sharedHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
        )}

        {/* Technical Specifications */}
        {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
          <section className="mb-20">
            <h2 className={`text-3xl font-bold text-[${COLOR_PALETTE.NAVY}] text-center mb-10`}>Technical Specifications</h2>
            <div className={`overflow-x-auto bg-white rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
              <table className="min-w-full">
                <thead className={`bg-[${COLOR_PALETTE.NAVY}] text-white`}>
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
                <tbody className="divide-y divide-[${COLOR_PALETTE.BORDER}]">
                  {category.technicalSnapshot.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-[${COLOR_PALETTE.TEXT_PRIMARY}]`}>{spec.parameter}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{spec.specification}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{spec.certification}</td>
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
            <h2 className={`text-3xl font-bold text-[${COLOR_PALETTE.NAVY}] text-center mb-10`}>Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.code} product={relatedProduct} onQuickViewClick={handleQuickView} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
