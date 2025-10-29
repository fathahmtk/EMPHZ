import React from 'react';
import { ProductCategory as ProductCategoryType, Product } from '../types';
import ProductCard from './ProductCard';
import Button from './Button';
import { COLOR_PALETTE } from '../constants';

interface ProductCategoryProps {
  category: ProductCategoryType;
  onQuickViewClick: (product: Product) => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category, onQuickViewClick }) => {
  return (
    <section id={category.code} className="mb-24 scroll-mt-24">
      <h3 className={`text-3xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-3`}>{category.name}</h3>
      <p className={`text-xl text-[${COLOR_PALETTE.TEXT_SECONDARY}] mb-10`}>{category.tagline}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {category.products.map((product) => (
          <ProductCard key={product.code} product={product} onQuickViewClick={onQuickViewClick} />
        ))}
      </div>

      {(category.sharedHighlights && category.sharedHighlights.length > 0) && (
        <div className={`mt-12 p-8 bg-white rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
          <h4 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Shared Technical Highlights</h4>
          <ul className={`list-disc list-inside text-[${COLOR_PALETTE.TEXT_SECONDARY}] grid grid-cols-1 md:grid-cols-2 gap-3`}>
            {category.sharedHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {(category.compliance && category.compliance.length > 0) && (
        <div className={`mt-12 p-8 bg-white rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
          <h4 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Structural Compliance</h4>
          <ul className={`list-disc list-inside text-[${COLOR_PALETTE.TEXT_SECONDARY}] grid grid-cols-1 md:grid-cols-2 gap-3`}>
            {category.compliance.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {(category.advantages && category.advantages.length > 0) && (
        <div className={`mt-12 p-8 bg-white rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
          <h4 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Advantages</h4>
          <ul className={`list-disc list-inside text-[${COLOR_PALETTE.TEXT_SECONDARY}] grid grid-cols-1 md:grid-cols-2 gap-3`}>
            {category.advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {(category.technicalSnapshot && category.technicalSnapshot.length > 0) && (
        <div className={`mt-12 p-8 bg-white rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
          <h4 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>Technical Snapshot</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className={`bg-[${COLOR_PALETTE.NAVY}] text-white`}>
                <tr>
                  <th className="py-3 px-6 text-left font-semibold text-sm">Parameter</th>
                  <th className="py-3 px-6 text-left font-semibold text-sm">Specification</th>
                  <th className="py-3 px-6 text-left font-semibold text-sm">Certification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[${COLOR_PALETTE.BORDER}]">
                {category.technicalSnapshot.map((param, index) => (
                  <tr key={index} className={`even:bg-[${COLOR_PALETTE.BACKGROUND}] hover:bg-[${COLOR_PALETTE.TEAL}]/10`}>
                    <td className="py-4 px-6 text-gray-800">{param.parameter}</td>
                    <td className={`py-4 px-6 text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{param.specification}</td>
                    <td className={`py-4 px-6 text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{param.certification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {category.materials && category.materials.length > 0 && (
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm mt-4`}><span className="font-semibold">Materials:</span> {category.materials.join(', ')}</p>
          )}
          {category.accessories && category.accessories.length > 0 && (
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm mt-2`}><span className="font-semibold">Accessories:</span> {category.accessories.join(', ')}</p>
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