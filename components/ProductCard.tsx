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
    <div className="w-full h-full bg-gray-200 animate-skeleton-pulse"></div>
);

// New component for error state
const ImageError: React.FC = () => (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
        <img
            src="https://www.dropbox.com/scl/fi/bh1jo6bw2oh2xquo5f6p0/Emphz-Logo-Design.png?rlkey=y56kz2aobqiypxlgnyzzrmo9m&st=9u7ljxbt&dl=1"
            alt="Image unavailable"
            className="max-w-full max-h-full object-contain"
        />
    </div>
);


const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick, categoryName }) => {
  const descriptionText = product.description || product.useCase || product.innovation;
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const finalImageSrc = Array.isArray(product.image) ? product.image[0] : product.image;

  // Reset loading state if the product prop changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setImageSrc(null);
  }, [product.code]);

  // Start loading image only when the card becomes visible
  useEffect(() => {
    if (isVisible && finalImageSrc) {
      setImageSrc(finalImageSrc);
    }
  }, [isVisible, finalImageSrc]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };
  
  const handleImageError = () => {
    setImageLoaded(true); // Treat as "loaded" to hide the placeholder
    setImageError(true);
  };

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
        
        <Link to={`/products/${product.code}`} className="mt-4 rounded-md overflow-hidden aspect-[3/2] block bg-gray-100 relative">
            {/* Placeholder and Error states are overlays */}
            <div className="absolute inset-0">
                {!imageLoaded && !imageError && finalImageSrc && <ImagePlaceholder />}
                {(imageError || !finalImageSrc) && <ImageError />}
            </div>
            
            {/* Image is also an overlay that fades in */}
            {imageSrc && !imageError && (
                <img 
                    src={imageSrc}
                    alt={product.name} 
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    decoding="async"
                    fetchPriority="low"
                    width="600"
                    height="400"
                    className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-500 ease-in-out group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            )}
        </Link>
        

        <div className="mt-6 pt-4 border-t border-[var(--color-border)] space-y-3">
            <Button
                href="/contact"
                variant="secondary"
                className="w-full py-2 text-sm"
            >
                Get a Quote
            </Button>
            <div className="flex items-center justify-between gap-2">
                <Button
                    href={`/products/${product.code}`}
                    variant="outline"
                    className="px-4 py-2 text-sm flex-1"
                >
                    Details
                </Button>
                <Button
                    onClick={() => onQuickViewClick(product)}
                    variant="primary"
                    className="px-4 py-2 text-sm flex-1"
                >
                    Quick View
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);