import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { COLOR_PALETTE } from '../constants';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  onQuickViewClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick }) => {
  const descriptionText = product.description || product.useCase || product.innovation;

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickViewClick(product);
  };

  return (
    <Link to={`/products/${product.code}`} className="block h-full group relative">
      <div className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-[${COLOR_PALETTE.BORDER}] h-full flex flex-col`}>
        <h4 className={`text-lg font-bold text-[${COLOR_PALETTE.NAVY}] group-hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-300 mb-2`}>{product.name}</h4>
        <p className={`text-sm text-[${COLOR_PALETTE.TEXT_SECONDARY}] font-medium mb-3`}>Code: {product.code}</p>
        <div className="flex-grow">
          {descriptionText && <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm`}>{descriptionText}</p>}
          {product.applications && product.applications.length > 0 && (
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm mt-2`}>
              <span className="font-semibold">Applications:</span> {product.applications.join(', ')}
            </p>
          )}
        </div>
        {product.image && (
          <div className="mt-4">
            {/* FIX: Handle case where product.image is an array by taking the first image for the card. */}
            <img src={Array.isArray(product.image) ? product.image[0] : product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          </div>
        )}
      </div>
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
            onClick={handleQuickViewClick}
            variant="secondary"
            className="px-4 py-2 text-sm shadow-md"
        >
            Quick View
        </Button>
      </div>
    </Link>
  );
};

export default memo(ProductCard);