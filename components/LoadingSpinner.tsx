import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full min-h-[calc(100vh-200px)]" aria-label="Loading page content">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[var(--color-brand)]" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;