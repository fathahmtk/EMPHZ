import React from 'react';
import Button from './Button';
// FIX: Removed import for COLOR_PALETTE as it is not exported from '../constants'.
import { GENERAL_DOWNLOADS } from '../constants';

const DownloadButtons: React.FC = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* FIX: Removed dynamic and invalid text color class. The text will inherit its color from parent elements. */}
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">Essential Downloads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {GENERAL_DOWNLOADS.map((item, index) => (
            <Button key={index} variant="outline" href={item.link} className="w-full justify-center">
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadButtons;
