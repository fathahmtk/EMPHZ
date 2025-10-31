import React, { useState, useEffect, useRef, useCallback } from 'react';
import Lightbox from './Lightbox';
import { FALLBACK_LOGO_URL } from '../constants';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  const hasRealImages = images.length > 0;
  const displayImages = hasRealImages ? images : [FALLBACK_LOGO_URL];

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);
  
  const checkScrollability = useCallback(() => {
    const el = thumbnailsRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1); // -1 for precision
    }
  }, []);

  useEffect(() => {
    const el = thumbnailsRef.current;
    if (el && hasRealImages) {
      checkScrollability();
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(el);
      return () => resizeObserver.disconnect();
    }
  }, [displayImages, hasRealImages, checkScrollability]);


  const activeImage = displayImages[activeIndex];

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    const selectedThumbnail = thumbnailsRef.current?.children[index] as HTMLElement;
    selectedThumbnail?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };
  
  const handleScroll = (direction: 'left' | 'right') => {
    const el = thumbnailsRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Viewer */}
      <div
        className={`relative group aspect-square overflow-hidden rounded-lg shadow-[var(--shadow-lg)] border border-[var(--color-border)] ${hasRealImages ? 'cursor-pointer' : ''} ${!hasRealImages ? 'bg-[var(--color-surface)]' : ''}`}
        onClick={hasRealImages ? () => setIsLightboxOpen(true) : undefined}
        role={hasRealImages ? "button" : "img"}
        aria-label={hasRealImages ? `View ${productName} images in fullscreen` : productName}
      >
        <img
          src={activeImage}
          alt={`${productName}${hasRealImages ? ` - image ${activeIndex + 1}`: ' - no image available'}`}
          loading="eager"
          fetchPriority="high"
          width="800"
          height="800"
          className={`block w-full h-full ${hasRealImages ? 'object-cover transition-transform duration-300 ease-out group-hover:scale-110' : 'object-contain p-10 opacity-50'}`}
        />
        {hasRealImages && (
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
            </div>
        )}
        {displayImages.length > 1 && hasRealImages && (
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full pointer-events-none z-10">
              {activeIndex + 1} / {displayImages.length}
            </div>
        )}
      </div>

      {/* Thumbnail Filmstrip */}
      {hasRealImages && displayImages.length > 1 && (
        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-700/70 border border-[var(--color-border)] text-[var(--color-primary)]"
              aria-label="Scroll thumbnails left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          <div
            ref={thumbnailsRef}
            onScroll={checkScrollability}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-1 no-scrollbar"
            role="group"
            aria-label="Image thumbnails"
          >
            {displayImages.map((img, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 snap-center rounded-md overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand)] ${
                  activeIndex === index
                    ? 'border-[var(--color-brand)]'
                    : 'border-transparent hover:border-gray-500'
                }`}
                aria-label={`View image ${index + 1} of ${productName}`}
                aria-current={activeIndex === index ? 'true' : 'false'}
              >
                <img
                  src={img}
                  alt={`${productName} thumbnail ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width="150"
                  height="150"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
           {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-700/70 border border-[var(--color-border)] text-[var(--color-primary)]"
              aria-label="Scroll thumbnails right"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      )}
      
      {hasRealImages && isLightboxOpen && (
        <Lightbox
            images={displayImages}
            startIndex={activeIndex}
            onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductImageCarousel;