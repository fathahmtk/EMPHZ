
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from './types';

interface UIState {
  isSearchOpen: boolean;
  quickViewProduct: Product | null;
}

interface UIActions {
  openSearch: () => void;
  closeSearch: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
}

interface UIContextType extends UIState, UIActions {}

const UIStateContext = createContext<UIContextType | undefined>(undefined);

export const UIStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const value = {
    isSearchOpen,
    quickViewProduct,
    openSearch,
    closeSearch,
    openQuickView,
    closeQuickView,
  };

  return (
    <UIStateContext.Provider value={value}>
      {children}
    </UIStateContext.Provider>
  );
};

export const useUIState = (): UIContextType => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error('useUIState must be used within a UIStateProvider');
  }
  return context;
};
