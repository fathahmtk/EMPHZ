import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCategoryBySlug } from '../hooks/useCategoryBySlug';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { useUIState } from '../UIStateContext';
import { Product } from '../types';

const ProductCategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { category, isLoading, error } = useCategoryBySlug(categorySlug);
  const { openQuickView } = useUIState();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--color-accent)]"></div>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">Loading Category...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error Loading Category</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md">
          There was a problem fetching the details for this product category. Please try again.
        </p>
        <Button onClick={() => window.location.reload()} variant="primary">
          Retry
        </Button>
      </div>
    );
  }

  if (!category) {
    return (
      <>
        <MetaTags title="Category Not Found" description="The requested product category could not be found." />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-lg text-[var(--color-text-primary)] mb-8">Sorry, we couldn't find the product category you're looking for.</p>
          <Button href="/products" variant="primary">
            Back to All Categories
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <MetaTags
        title={SEO_DATA.productCategory.title(category.name)}
        description={SEO_DATA.productCategory.description(category.tagline)}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <nav className="text-sm mb-8 text-[var(--color-text-secondary)]" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="hover:text-[var(--color-primary)]">Home</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="flex items-center">
              <Link to="/products" className="hover:text-[var(--color-primary)]">Products</Link>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            </li>
            <li className="text-[var(--color-primary)]" aria-current="page">
              {category.name}
            </li>
          </ol>
        </nav>
        
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">{category.tagline}</p>
        </header>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {category.products.map((product: Product) => (
              <ProductCard
                key={product.code}
                product={product}
                onQuickViewClick={() => openQuickView(product)}
              />
            ))}
          </div>

          {(category.sharedHighlights && category.sharedHighlights.length > 0) && (
            <div className="mt-20 p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 text-center">Shared Technical Highlights</h3>
              <ul className="list-disc list-inside text-[var(--color-text-primary)] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl mx-auto">
                {category.sharedHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
            <div className="mt-12 p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 text-center">Technical Snapshot</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-[var(--color-background)]">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="py-3 px-6 text-left font-semibold text-sm">Parameter</th>
                      <th className="py-3 px-6 text-left font-semibold text-sm">Specification</th>
                      <th className="py-3 px-6 text-left font-semibold text-sm">Certification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)]">
                    {category.technicalSnapshot.map((param, index) => (
                      <tr key={index} className="even:bg-gray-50 hover:bg-teal-500/10">
                        <td className="py-4 px-6 text-[var(--color-primary)]">{param.parameter}</td>
                        <td className="py-4 px-6 text-[var(--color-text-primary)]">{param.specification}</td>
                        <td className="py-4 px-6 text-[var(--color-text-primary)]">{param.certification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </>
  );
};

export default ProductCategoryPage;
