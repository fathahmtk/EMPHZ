
import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../api';
import { Product, ProductCategory } from '../types';

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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetchAllProducts();
        setData(fetchedData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { data, isLoading, error };
};
