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

// Use the company logo as a branded fallback for missing images.
const ImageError: React.FC = () => (
    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
        <img
            src="https://www.dropbox.com/scl/fi/bh1jo6bw2oh2xquo5f6p0/Emphz-Logo-Design.png?rlkey=y56kz2aobqiypxlgnyzzrmo9m&st=9u7ljxbt&dl=1"
            alt="Image unavailable - EMPHZ Logo"
            className="w-2/3 h-auto object-contain opacity-50"
        />
    </div>
);


const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick, categoryName }) => {
  const descriptionText = product.description || product.useCase || product.innovation;
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);
  const [loadingStatus, setLoadingStatus] = useState<'pending' | 'loading' | 'loaded' | 'error'>('pending');

  const finalImageSrc = Array.isArray(product.image) ? product.image[0] : product.image;

  // Reset loading state if the product prop changes
  useEffect(() => {
    setLoadingStatus('pending');
  }, [product.code]);

  // Start loading image only when the card becomes visible
  useEffect(() => {
    // Only trigger once, when visibility is gained and status is pending.
    if (isVisible && loadingStatus === 'pending') {
      if (finalImageSrc) {
        setLoadingStatus('loading');
      } else {
        setLoadingStatus('error'); // No image source available
      }
    }
  }, [isVisible, loadingStatus, finalImageSrc]);

  const handleImageLoad = () => {
    setLoadingStatus('loaded');
  };
  
  const handleImageError = () => {
    setLoadingStatus('error');
  };

  return (
    <div
      ref={cardRef}
      className={`h-full group opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
    >
      <div className="bg-[var(--color-background)] p-6 rounded-xl shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-xl)] transition-all duration-300 border border-[var(--color-border)] h-full flex flex-col hover:-translate-y-2 hover:border-[var(--color-brand)]/50">
        <div className="flex-grow">
          {categoryName && (
              <p className="text-xs font-bold text-[var(--color-brand)] uppercase tracking-wider mb-3 bg-[var(--color-brand)]/10 inline-block px-3 py-1 rounded-full">
                  {categoryName}
              </p>
          )}
          <Link to={`/products/${product.code}`} className="block">
              <h4 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">{product.name}</h4>
          </Link>
          <p className="text-xs font-semibold text-[var(--color-brand)] mb-3">Code: {product.code}</p>
          
          {descriptionText && <p className="text-[var(--color-text-primary)] text-sm mb-4 line-clamp-3 leading-relaxed">{descriptionText}</p>}
          
          {product.applications && product.applications.length > 0 && (
              <p className="text-[var(--color-text-primary)] text-sm mt-2 line-clamp-2">
              <span className="font-semibold text-[var(--color-primary)]">Applications:</span> {product.applications.join(', ')}
              </p>
          )}
        </div>
        
        <Link to={`/products/${product.code}`} className="mt-4 rounded-lg overflow-hidden aspect-[3/2] block bg-gray-100 relative group/image">
            <div className="absolute inset-0">
                {loadingStatus === 'loading' && <ImagePlaceholder />}
                {loadingStatus === 'error' && <ImageError />}
            </div>
            
            {(loadingStatus === 'loading' || loadingStatus === 'loaded') && (
                <img 
                    src={finalImageSrc!}
                    alt={product.name} 
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    decoding="async"
                    fetchPriority="low"
                    width="600"
                    height="400"
                    className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out group-hover/image:scale-110 ${loadingStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
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
