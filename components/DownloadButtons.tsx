
import React from 'react';
import Button from './Button';
import { GENERAL_DOWNLOADS, COLOR_PALETTE } from '../constants';

const DownloadButtons: React.FC = () => {
  return (
    <section className={`py-16 bg-transparent`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-12`}>Essential Downloads</h2>
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