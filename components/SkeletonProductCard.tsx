import React from 'react';

const SkeletonProductCard: React.FC = () => {
  return (
    <div className="bg-[var(--color-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border)] h-full flex flex-col">
      <div className="animate-pulse">
        {/* Skeleton for Category Name */}
        <div className="h-3 bg-[var(--color-border)] rounded-full w-1/3 mb-4"></div>
        
        {/* Skeleton for Product Name */}
        <div className="h-5 bg-gray-700 rounded-full w-3/4 mb-2"></div>
        
        {/* Skeleton for Product Code */}
        <div className="h-3 bg-[var(--color-border)] rounded-full w-1/4 mb-5"></div>
        
        {/* Skeleton for Description */}
        <div className="space-y-2 flex-grow">
          <div className="h-3 bg-[var(--color-border)] rounded-full w-full"></div>
          <div className="h-3 bg-[var(--color-border)] rounded-full w-5/6"></div>
        </div>

        {/* Skeleton for Image */}
        <div className="mt-4 aspect-square bg-[var(--color-border)] rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonProductCard;