
import { useState, useEffect } from 'react';
import { fetchProductByCode } from '../api';
import { Product, ProductCategory } from '../types';
import { useToast } from '../ToastContext';

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
  const { addToast } = useToast();

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
        if (fetchedData) {
          setData(fetchedData);
        } else {
          setData(null);
          // This case is handled by the page component (NotFound), but a toast can be useful.
          addToast(`Product with code "${productCode}" was not found.`, 'info');
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error('An unknown error occurred while fetching product details.');
        setError(error);
        addToast('Failed to load product details. Please try again.', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [productCode, addToast]);

  return { data, isLoading, error };
};
