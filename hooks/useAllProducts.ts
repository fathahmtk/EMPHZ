
import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../api';
import { Product, ProductCategory } from '../types';
import { useToast } from '../ToastContext';

export interface ProductWithCategoryContext {
  product: Product;
  category: ProductCategory;
}

/**
 * Custom hook to fetch all products from the API.
 * Manages loading and error states.
 */
export const useAllProducts = () => {
  const [data, setData] = useState<ProductWithCategoryContext[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { addToast } = useToast();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetchAllProducts();
        setData(fetchedData);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('An unknown error occurred while fetching products.');
        setError(error);
        addToast('Failed to load product catalog. Please try again later.', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [addToast]);

  return { data, isLoading, error };
};
