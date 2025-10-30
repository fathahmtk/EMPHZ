import React, { memo, useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Product } from '../types';
import Button from './Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ProductCardProps {
  product: Product;
  onQuickViewClick: (product: Product) => void;
  categoryName?: string;
}

const ImagePlaceholder: React.FC = () => (
    <div className="w-full h-full bg-gray-100 animate-skeleton-pulse"></div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick, categoryName }) => {
  const descriptionText = product.description || product.useCase || product.innovation;
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const finalImageSrc = Array.isArray(product.image) ? product.image[0] : product.image;

  useEffect(() => {
    // Start loading image only when the card is visible
    if (isVisible && finalImageSrc) {
      setImageSrc(finalImageSrc);
    }
  }, [isVisible, finalImageSrc]);

  return (
    <div
      ref={cardRef}
      className={`h-full group opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
    >
      <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-xl)] transition-all duration-300 border border-[var(--color-border)] h-full flex flex-col hover:-translate-y-1">
        <div className="flex-grow">
          {categoryName && (
              <p className="text-xs font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2">
                  {categoryName}
              </p>
          )}
          <Link to={`/products/${product.code}`} className="block">
              <h4 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">{product.name}</h4>
          </Link>
          <p className="text-sm text-[var(--color-text-secondary)] font-medium mb-3">Code: {product.code}</p>
          
          {descriptionText && <p className="text-[var(--color-text-primary)] text-sm mb-4 line-clamp-3">{descriptionText}</p>}
          
          {product.applications && product.applications.length > 0 && (
              <p className="text-[var(--color-text-primary)] text-sm mt-2 line-clamp-2">
              <span className="font-semibold text-[var(--color-primary)]">Applications:</span> {product.applications.join(', ')}
              </p>
          )}
        </div>
        
        {finalImageSrc && (
          <Link to={`/products/${product.code}`} className="mt-4 rounded-md overflow-hidden aspect-[3/2] block bg-gray-100">
            {!imageLoaded && <ImagePlaceholder />}
            <img 
              src={imageSrc || undefined} // Load src only when visible
              alt={product.name} 
              onLoad={() => setImageLoaded(true)}
              decoding="async"
              fetchPriority="low"
              width="600"
              height="400"
              className={`w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>
        )}

        <div className="mt-6 pt-4 border-t border-[var(--color-border)] flex items-center justify-between gap-2">
          <Button
              href={`/products/${product.code}`}
              variant="outline"
              className="px-4 py-2 text-sm flex-1"
          >
              Details
          </Button>
          <Button
              onClick={() => onQuickViewClick(product)}
              variant="secondary"
              className="px-4 py-2 text-sm flex-1"
          >
              Quick View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
