

import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_CATALOG, SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';

const ProductsPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.products.title}
        description={SEO_DATA.products.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Product Categories
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            Pioneering corrosion-proof, high-performance composite products built for power, infrastructure, and sustainability. Explore our specialized product lines below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATALOG.map((category) => (
            <Link
              key={category.code}
              to={`/products/category/${category.slug}`}
              className="block group bg-[var(--color-background)] rounded-lg shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-xl)] transition-all duration-300 border border-[var(--color-border)] overflow-hidden transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image || 'https://picsum.photos/600/400?random=category-placeholder'}
                  alt={category.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">
                  {category.name}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 flex-grow">
                  {category.tagline}
                </p>
                 {/* Product Previews */}
                <div className="mt-4 border-t border-[var(--color-border)] pt-3">
                  <p className="text-xs font-semibold text-[var(--color-text-primary)] mb-2">Includes:</p>
                  <ul className="space-y-1">
                    {category.products.slice(0, 3).map(p => (
                        <li key={p.code} className="text-xs text-[var(--color-text-secondary)] truncate">
                            &bull; {p.name}
                        </li>
                    ))}
                    {category.products.length > 3 && (
                        <li className="text-xs text-[var(--color-text-secondary)]">...and more.</li>
                    )}
                  </ul>
                </div>
                <div className="mt-auto pt-4 text-sm font-semibold text-[var(--color-brand)] group-hover:underline">
                  View Products &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;