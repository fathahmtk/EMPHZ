
import { useState, useEffect } from 'react';
import { fetchProductByCode } from '../api';
import { Product, ProductCategory } from '../types';

export interface ProductDataContext {
  product: Product;
  category: ProductCategory;
}

/**
 * Custom hook to fetch a single product by its code.
 * Manages loading and error states.
 * @param productCode The code of the product to fetch.
 */
export const useProduct = (productCode: string | undefined) => {
  const [data, setData] = useState<ProductDataContext | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!productCode) {
      setIsLoading(false);
      setData(null);
      return;
    }

    const loadProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedData = await fetchProductByCode(productCode);
        setData(fetchedData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [productCode]);

  return { data, isLoading, error };
};
