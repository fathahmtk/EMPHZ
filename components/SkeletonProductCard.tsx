import React from 'react';

const SkeletonProductCard: React.FC = () => {
  return (
    <div className="bg-[var(--color-surface-primary)] rounded-[var(--radius)] shadow-sm border border-[var(--color-border)] h-full flex flex-col overflow-hidden">
      <div className="animate-pulse">
        {/* Skeleton for Image */}
        <div className="aspect-[4/3] bg-gray-200"></div>

        <div className="p-5">
          {/* Skeleton for Category Name */}
          <div className="h-3 bg-gray-200 rounded-full w-1/3 mb-4"></div>
          
          {/* Skeleton for Product Name */}
          <div className="h-5 bg-gray-300 rounded-full w-3/4 mb-2"></div>
          
          {/* Skeleton for Product Code */}
          <div className="h-3 bg-gray-200 rounded-full w-1/4 mb-5"></div>
          
          {/* Skeleton for Description */}
          <div className="space-y-2 flex-grow">
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
          </div>

          {/* Skeleton for Buttons */}
          <div className="mt-6 pt-4 border-t border-gray-200 flex items-center gap-3">
              <div className="h-10 bg-gray-200 rounded-md w-full"></div>
              <div className="h-10 bg-gray-300 rounded-md w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonProductCard;