import React from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import { Product, ProductCategory } from '../types';
import { useProduct } from '../hooks/useProduct';
import MetaTags from '../components/MetaTags';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { useUIState } from '../UIStateContext';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { PRODUCT_FAQS } from '../constants';
import ProductImageCarousel from '../components/ProductImageCarousel';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';

const ProductDetailPage: React.FC = () => {
  const { productCode } = useParams<{ productCode: string }>();
  const { data: productData, isLoading, error } = useProduct(productCode);
  const { openQuickView } = useUIState();
  const navigate = useNavigate();

  // Normalize images to always be an array for easier handling
  const images = React.useMemo(() => {
    if (!productData?.product?.image) return [];
    return Array.isArray(productData.product.image) ? productData.product.image : [productData.product.image];
  }, [productData]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--color-brand)]"></div>
        <p className="mt-4 text-lg text-[var(--color-secondary)]">Loading Product Details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error Loading Product</h1>
        <p className="text-lg text-[var(--color-secondary)] mb-8 max-w-md">
          There was a problem fetching the details for this product. Please try again.
        </p>
        <div className="flex space-x-4">
          <Button onClick={() => window.location.reload()} variant="primary">
            Retry
          </Button>
          <Button onClick={() => navigate('/products')} variant="secondary">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }
  
  if (!productData) {
    return (
      <>
        <MetaTags title="Product Not Found" description="The requested product could not be found." />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-lg text-[var(--color-secondary)] mb-8">Sorry, we couldn't find the product you're looking for.</p>
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

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: category.name, path: `/products/category/${category.slug}` },
    { label: product.name },
  ];

  return (
    <>
      <MetaTags
        title={`${product.name} - ${category.name} | EMPHZ`}
        description={descriptionText || `Technical details for ${product.name}, part of EMPHZ's GRP composite solutions.`}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumbs items={breadcrumbItems} className="mb-8" />

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <ProductImageCarousel images={images} productName={product.name} />
          
          <div className="animate-fadeInUp">
            <span className="text-sm font-semibold text-[var(--color-brand)] uppercase tracking-wider">{category.name}</span>
            <h1 className="text-4xl font-bold mt-2 mb-4">{product.name}</h1>
            <p className="text-lg text-[var(--color-secondary)] mb-6">Product Code: {product.code}</p>
            {descriptionText && <p className="text-[var(--color-secondary)] leading-relaxed mb-6">{descriptionText}</p>}
            <div className="mt-8">
              <Button href="/contact" variant="primary">Request a Quote</Button>
            </div>
          </div>
        </div>
        
        {/* Key Applications Section */}
        {product.applications && product.applications.length > 0 && (
            <section className="my-20 p-8 bg-[var(--color-surface)] rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
              <h2 className="text-2xl font-semibold text-center mb-6">Key Applications</h2>
              <ul className="columns-1 md:columns-2 lg:columns-3 gap-x-8 text-[var(--color-secondary)] max-w-5xl mx-auto space-y-2">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-start break-inside-avoid">
                     <svg className="w-5 h-5 mr-2 text-[var(--color-brand)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </section>
        )}

        {/* Technical Highlights from Category */}
        {(category.sharedHighlights && category.sharedHighlights.length > 0) && (
            <div className="my-20 p-8 bg-[var(--color-surface)] rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
              <h4 className="text-2xl font-semibold text-center mb-6">Technical Highlights</h4>
              <ul className="columns-1 md:columns-2 lg:columns-3 gap-x-8 text-[var(--color-secondary)] max-w-5xl mx-auto space-y-2">
                {category.sharedHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start break-inside-avoid">
                    <svg className="w-5 h-5 mr-2 text-[var(--color-brand)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
        )}

        {/* Technical Specifications */}
        {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Technical Specifications</h2>
            <div className="overflow-x-auto bg-[var(--color-surface)] rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
              <table className="min-w-full">
                <thead className="bg-[var(--color-background)]">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                      Parameter
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                      Specification
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)]">
                      Certification / Standard
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {category.technicalSnapshot.map((spec, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--color-primary)]">{spec.parameter}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-secondary)]">{spec.specification}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-secondary)]">{spec.certification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="my-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto bg-[var(--color-surface)] p-4 sm:p-8 rounded-lg shadow-[var(--shadow-md)] border border-[var(--color-border)]">
            <Accordion type="single" collapsible className="w-full">
              {PRODUCT_FAQS.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--color-secondary)] leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

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