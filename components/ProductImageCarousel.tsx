import React, { useState, useEffect } from 'react';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Reset active image if the images prop changes (e.g., navigating between products)
  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  if (images.length === 0) {
    // Fallback in case no images are provided
    images = ['https://placehold.co/800x600/F7FAFC/1A202C?text=No+Image'];
  }
  
  const activeImage = images[activeIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  const handlePrevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const handleThumbnailKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative group aspect-square overflow-hidden rounded-lg shadow-[var(--shadow-lg)] cursor-zoom-in border border-[var(--color-border)]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        role="img"
        aria-label={`${productName} - image ${activeIndex + 1}`}
      >
        <img
          src={activeImage}
          alt={`${productName} - image ${activeIndex + 1}`}
          loading="eager"
          className="block w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{
            transform: isZoomed ? 'scale(1.75)' : 'scale(1)',
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />

        {images.length > 1 && (
          <>
            {/* Image Counter */}
            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full pointer-events-none z-10" aria-hidden="true">
              {activeIndex + 1} / {images.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3" role="group" aria-label="Image thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleThumbnailKeyDown(e, index)}
              className={`rounded-md overflow-hidden border-2 transition-all duration-200 aspect-square focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-brand)] ${
                activeIndex === index
                  ? 'border-[var(--color-brand)]'
                  : 'border-transparent hover:border-gray-400'
              }`}
              aria-label={`View image ${index + 1} of ${productName}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;