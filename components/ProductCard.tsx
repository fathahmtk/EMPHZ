import React, { memo, useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Product } from '../types';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  onQuickViewClick: (product: Product) => void;
  categoryName?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickViewClick, categoryName }) => {
  const descriptionText = product.description || product.useCase || product.innovation;
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -50px 0px', // Trigger animation slightly before it's fully in view
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuickViewClick(product);
  };

  return (
    <Link
      ref={cardRef}
      to={`/products/${product.code}`}
      className={`block h-full group relative opacity-0 ${isVisible ? 'animate-fadeInUp' : ''} transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className="bg-[var(--color-background)] p-6 rounded-lg shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-xl)] transition-all duration-300 border border-[var(--color-border)] h-full flex flex-col">
        {/* Display Category Name */}
        {categoryName && (
            <p className="text-xs font-bold text-[var(--color-brand)] uppercase tracking-wider mb-2">
                {categoryName}
            </p>
        )}
        <h4 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-brand)] transition-colors duration-300 mb-2">{product.name}</h4>
        <p className="text-sm text-[var(--color-text-secondary)] font-medium mb-3">Code: {product.code}</p>
        <div className="flex-grow">
          {descriptionText && <p className="text-[var(--color-text-primary)] text-sm">{descriptionText}</p>}
          {product.applications && product.applications.length > 0 && (
            <p className="text-[var(--color-text-primary)] text-sm mt-2">
              <span className="font-semibold text-[var(--color-primary)]">Applications:</span> {product.applications.join(', ')}
            </p>
          )}
        </div>
        {product.image && (
          <div className="mt-4 rounded-md overflow-hidden">
            <img 
              src={Array.isArray(product.image) ? product.image[0] : product.image} 
              alt={product.name} 
              loading="lazy" 
              className="w-full h-40 object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110" 
            />
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