import React, { memo, useRef, useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import { Product } from '../types';
import Button from './Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { FALLBACK_LOGO_URL } from '../constants';

interface ProductCardProps {
  product: Product;
  onQuickViewClick: (product: Product) => void;
  categoryName?: string;
}

const ImagePlaceholder: React.FC = () => (
    <div className="w-full h-full bg-[var(--color-surface-secondary)] animate-skeleton-pulse"></div>
);

// REFINED: Use a more informative fallback with a centralized URL.
const ImageError: React.FC = () => (
    <div className="w-full h-full bg-[var(--color-surface-secondary)] flex flex-col items-center justify-center p-4 text-center">
        <img
            src={FALLBACK_LOGO_URL}
            alt="EMPHZ Logo"
            className="w-1/2 h-auto object-contain opacity-20 mb-2"
        />
        <p className="text-xs text-[var(--color-text-secondary)]">Image not available</p>
    </div>
);


const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick, categoryName }) => {
  const descriptionText = product.description || product.useCase || product.innovation;
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);
  const [loadingStatus, setLoadingStatus] = useState<'pending' | 'loading' | 'loaded' | 'error'>('pending');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = useMemo(() => (
      Array.isArray(product.image) ? product.image : (product.image ? [product.image] : [])
  ), [product.image]);

  const finalImageSrc = images[currentImageIndex];

  // Reset loading state and index if the product prop changes
  useEffect(() => {
    setLoadingStatus('pending');
    setCurrentImageIndex(0);
  }, [product.code]);

  // Start loading image only when the card becomes visible
  useEffect(() => {
    if (isVisible && loadingStatus === 'pending') {
      if (images.length > 0 && images[0]) {
        setLoadingStatus('loading');
      } else {
        setLoadingStatus('error'); // No image source available
      }
    }
  }, [isVisible, loadingStatus, images]);

  const handleImageLoad = () => {
    setLoadingStatus('loaded');
  };
  
  const handleImageError = () => {
    setLoadingStatus('error');
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setLoadingStatus('loading');
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setLoadingStatus('loading');
  };

  return (
    <div
      ref={cardRef}
      className={`h-full group opacity-0 ${isVisible ? 'animate-fadeInScaleUp' : ''}`}
    >
      <div className="bg-[var(--color-surface-primary)] backdrop-blur-lg p-6 rounded-[var(--radius)] shadow-[var(--shadow-md)] group-hover:shadow-[var(--glow-shadow)] transition-all duration-300 border border-[var(--color-border)] h-full flex flex-col hover:-translate-y-1 group-hover:border-[var(--color-border-hover)]">
        <div className="flex-grow">
          {categoryName && (
              <p className="text-xs font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2">
                  {categoryName}
              </p>
          )}
          <Link to={`/products/${product.code}`} className="block">
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">{product.name}</h4>
          </Link>
          <p className="text-sm text-[var(--color-text-secondary)] font-medium mb-3">Code: {product.code}</p>
          
          {descriptionText && <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-3">{descriptionText}</p>}
          
          {product.applications && product.applications.length > 0 && (
              <p className="text-[var(--color-text-secondary)] text-sm mt-2 line-clamp-2">
              <span className="font-semibold text-[var(--color-text-primary)]">Applications:</span> {product.applications.join(', ')}
              </p>
          )}
        </div>
        
        <Link to={`/products/${product.code}`} className="mt-4 rounded-md overflow-hidden aspect-square block bg-[var(--color-background)] relative group/image">
            <div className="absolute inset-0">
                {(loadingStatus === 'pending' || loadingStatus === 'loading') && <ImagePlaceholder />}
                {loadingStatus === 'error' && <ImageError />}
            </div>
            
            {(loadingStatus !== 'pending') && finalImageSrc && (
                <img 
                    src={finalImageSrc}
                    alt={product.name} 
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    decoding="async"
                    fetchPriority="low"
                    width="400"
                    height="400"
                    className={`absolute inset-0 w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out group-hover:scale-110 ${loadingStatus === 'loaded' ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                />
            )}
            
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true"></div>
            
            {/* Controls for multiple images */}
            {images.length > 1 && (
                <>
                    <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover/image:opacity-100 transition-all duration-300 hover:bg-black/60 focus:outline-none focus:ring-2 ring-offset-2 ring-white" aria-label="Previous image">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white rounded-full p-1.5 opacity-0 group-hover/image:opacity-100 transition-all duration-300 hover:bg-black/60 focus:outline-none focus:ring-2 ring-offset-2 ring-white" aria-label="Next image">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 p-1 bg-black/30 rounded-full opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        {images.map((_, index) => (
                            <button key={index} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex(index); setLoadingStatus('loading'); }} className={`block w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`} aria-label={`Go to image ${index + 1}`}></button>
                        ))}
                    </div>
                </>
            )}
        </Link>
        

        <div className="mt-6 pt-4 border-t border-[var(--color-border)] space-y-3">
            <Button
                href="/contact"
                variant="primary"
                className="w-full py-2 text-sm"
            >
                Get a Quote
            </Button>
            <div className="flex items-center justify-between gap-2">
                <Button
                    href={`/products/${product.code}`}
                    variant="secondary"
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