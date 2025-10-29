
import React from 'react';
import { ProductCategory as ProductCategoryType, Product } from '../types';
import ProductCard from './ProductCard';
import Button from './Button';

interface ProductCategoryProps {
  category: ProductCategoryType;
  onQuickViewClick: (product: Product) => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category, onQuickViewClick }) => {
  return (
    <section id={category.code} className="mb-24 scroll-mt-24">
      <h3 className="text-3xl font-bold mb-3">{category.name}</h3>
      <p className="text-xl text-[var(--color-text-secondary)] mb-10">{category.tagline}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {category.products.map((product) => (
          <ProductCard key={product.code} product={product} onQuickViewClick={onQuickViewClick} />
        ))}
      </div>

      {(category.sharedHighlights && category.sharedHighlights.length > 0) && (
        <div className="mt-12 p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
          <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Shared Technical Highlights</h4>
          <ul className="list-disc list-inside text-[var(--color-text-primary)] grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.sharedHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {(category.compliance && category.compliance.length > 0) && (
        <div className="mt-12 p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
          <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Structural Compliance</h4>
          <ul className="list-disc list-inside text-[var(--color-text-primary)] grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.compliance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {(category.advantages && category.advantages.length > 0) && (
        <div className="mt-12 p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
          <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Advantages</h4>
          <ul className="list-disc list-inside text-[var(--color-text-primary)] grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
        <div className="mt-12 p-8 bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
          <h4 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Technical Snapshot</h4>
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
          {category.materials && category.materials.length > 0 && (
            <p className="text-[var(--color-text-primary)] text-sm mt-4"><span className="font-semibold">Materials:</span> {category.materials.join(', ')}</p>
          )}
          {category.accessories && category.accessories.length > 0 && (
            <p className="text-[var(--color-text-primary)] text-sm mt-2"><span className="font-semibold">Accessories:</span> {category.accessories.join(', ')}</p>
          )}
          <div className="mt-6 text-center">
            <Button variant="primary" href="#" className="mt-4">Download Technical Datasheet</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCategory;