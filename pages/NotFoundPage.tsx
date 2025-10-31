import React from 'react';
import Button from '../components/Button';
import MetaTags from '../components/MetaTags';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <MetaTags 
        title="404 - Page Not Found | EMPHZ" 
        description="The page you are looking for does not exist." 
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl md:text-8xl font-extrabold text-[var(--color-brand)]">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2 text-[var(--color-text-primary)]">Page Not Found</h2>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md">
          Sorry, the page you are looking for could not be found or has been moved.
        </p>
        <Button href="/" variant="primary" className="text-lg">
          Go to Homepage
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;