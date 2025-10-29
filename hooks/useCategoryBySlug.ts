import { useState, useEffect } from 'react';
import { fetchCategoryBySlug } from '../api';
import { ProductCategory } from '../types';
import { useToast } from '../ToastContext';

export const useCategoryBySlug = (slug: string | undefined) => {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  // FIX: Correctly destructure `addToast` from the `useToast` hook.
  const { addToast } = useToast();

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      setCategory(null);
      return;
    }

    const loadCategory = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedCategory = await fetchCategoryBySlug(slug);
        if (fetchedCategory) {
          setCategory(fetchedCategory);
        } else {
          setCategory(null);
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error('An unknown error occurred while fetching category details.');
        setError(error);
        // Toast is handled in the component
      } finally {
        setIsLoading(false);
      }
    };

    loadCategory();
  }, [slug]);

  return { category, isLoading, error };
};