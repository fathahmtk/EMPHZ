import React from 'react';
import { COLOR_PALETTE } from '../constants';
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
        <h1 className={`text-6xl md:text-8xl font-extrabold text-[${COLOR_PALETTE.NAVY}]`}>404</h1>
        <h2 className={`text-2xl md:text-3xl font-semibold text-[${COLOR_PALETTE.TEXT_PRIMARY}] mt-4 mb-2`}>Page Not Found</h2>
        <p className={`text-lg text-[${COLOR_PALETTE.TEXT_SECONDARY}] mb-8 max-w-md`}>
          Sorry, the page you are looking for could not be found or has been moved.
        </p>
        <Button href="/" variant="secondary" className="text-lg">
          Go to Homepage
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
