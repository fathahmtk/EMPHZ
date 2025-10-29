
import React, { memo, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      // Use a local variable to capture the current ref value
      const currentRef = cardRef.current;
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
      className={`block h-full group relative opacity-0 ${isVisible ? 'animate-fadeInUp' : ''}`}
    >
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-zinc-700 h-full flex flex-col">
        {/* Display Category Name */}
        {categoryName && (
            <p className="text-xs font-bold text-teal-600 dark:text-teal-500 uppercase tracking-wider mb-2">
                {categoryName}
            </p>
        )}
        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-colors duration-300 mb-2">{product.name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-3">Code: {product.code}</p>
        <div className="flex-grow">
          {descriptionText && <p className="text-gray-600 dark:text-gray-400 text-sm">{descriptionText}</p>}
          {product.applications && product.applications.length > 0 && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
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
