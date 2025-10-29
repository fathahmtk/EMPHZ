
import React from 'react';
import { BRAND_PILLARS, COLOR_PALETTE } from '../constants';

const BrandPillars: React.FC = () => {
  return (
    <section className={`py-24 bg-[${COLOR_PALETTE.BACKGROUND}]`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-16`}>Our Foundation: Brand Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_PILLARS.map((pillar, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 duration-300 border border-[${COLOR_PALETTE.BORDER}]`}>
              <span className="text-5xl mb-4">{pillar.icon}</span>
              <h3 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-2`}>{pillar.title}</h3>
              <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPillars;