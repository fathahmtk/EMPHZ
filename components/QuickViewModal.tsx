
import React, { useEffect, useCallback } from 'react';
import { Product } from '../types';
import Button from './Button';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, handleKeyDown]);

  if (!product) {
    return null;
  }

  const descriptionText = product.description || product.useCase || product.innovation;
  // FIX: Handle case where product.image is an array by taking the first image for the modal.
  const imageUrl = (Array.isArray(product.image) ? product.image[0] : product.image) || 'https://picsum.photos/600/600?random=product-placeholder';

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeInUp"
      style={{ animationDuration: '0.3s' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div
        className="relative bg-white dark:bg-zinc-800 w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors z-10 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700"
          aria-label="Close quick view"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <h2 id="quick-view-title" className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{product.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">Code: {product.code}</p>
          
          <div className="flex-grow overflow-y-auto pr-2" style={{ maxHeight: 'calc(80vh - 200px)' }}>
            {descriptionText && (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{descriptionText}</p>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-zinc-700">
            <Button href={`/products/${product.code}`} onClick={onClose} variant="secondary" className="w-full">
              View Full Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
