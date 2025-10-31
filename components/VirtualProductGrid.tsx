import React, { useRef, useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Product } from '../types';
import { useUIState } from '../UIStateContext';
import ProductCard from './ProductCard';
import { useContainerQuery } from '../hooks/useContainerQuery';

interface VirtualProductGridProps {
  products: Product[];
  categoryName?: string;
}

const VIRTUAL_CARD_HEIGHT_ESTIMATE = 520; // A reasonable estimate for ProductCard height + gap

const VirtualProductGrid: React.FC<VirtualProductGridProps> = ({ products, categoryName }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { openQuickView } = useUIState();
  const { width } = useContainerQuery(parentRef);

  const { numColumns, gap } = useMemo(() => {
    // Tailwind breakpoints: sm: 640, lg: 1024, xl: 1280
    if (width === 0) return { numColumns: 1, gap: 32 }; // Default before measurement
    if (width >= 1280) return { numColumns: 4, gap: 32 }; // xl
    if (width >= 1024) return { numColumns: 3, gap: 32 }; // lg
    if (width >= 640) return { numColumns: 2, gap: 32 }; // sm
    return { numColumns: 1, gap: 32 };
  }, [width]);

  const rowCount = Math.ceil(products.length / numColumns);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => window,
    estimateSize: () => VIRTUAL_CARD_HEIGHT_ESTIMATE,
    overscan: 5,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  return (
    <div ref={parentRef}>
      <div
        className="relative w-full"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {virtualRows.map(virtualRow => {
          const itemsInRow = products.slice(
            virtualRow.index * numColumns,
            virtualRow.index * numColumns + numColumns
          );

          return (
            <div
              key={virtualRow.key}
              ref={rowVirtualizer.measureElement}
              className="absolute top-0 left-0 w-full"
              style={{
                transform: `translateY(${virtualRow.start}px)`,
                display: 'grid',
                gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
                gap: `${gap}px`,
              }}
            >
              {itemsInRow.map(product => (
                <ProductCard
                  key={product.code}
                  product={product}
                  onQuickViewClick={() => openQuickView(product)}
                  categoryName={categoryName}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualProductGrid;
