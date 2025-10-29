
import { PRODUCT_CATALOG } from './constants';
import { Product, ProductCategory } from './types';

// Simulate network delay
const API_DELAY = 500;

/**
 * Fetches a flattened list of all products, each with its parent category.
 * @returns A promise that resolves to an array of products with their categories.
 */
export const fetchAllProducts = (): Promise<{ product: Product; category: ProductCategory }[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const allProducts = PRODUCT_CATALOG.flatMap(category =>
        category.products.map(product => ({ product, category }))
      );
      resolve(allProducts);
    }, API_DELAY);
  });
};

/**
 * Fetches a single product and its parent category by the product code.
 * @param code The product code to search for.
 * @returns A promise that resolves to the product and category, or null if not found.
 */
export const fetchProductByCode = (code: string): Promise<{ product: Product; category: ProductCategory } | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      for (const category of PRODUCT_CATALOG) {
        const product = category.products.find(p => p.code === code);
        if (product) {
          resolve({ product, category });
          return;
        }
      }
      resolve(null);
    }, API_DELAY);
  });
};

/**
 * Fetches a single product category by its slug.
 * @param slug The category slug.
 * @returns A promise that resolves to the category, or null if not found.
 */
export const fetchCategoryBySlug = (slug: string): Promise<ProductCategory | null> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const category = PRODUCT_CATALOG.find(c => c.slug === slug);
      resolve(category || null);
    }, API_DELAY);
  });
};
