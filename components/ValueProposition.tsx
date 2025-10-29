
import React from 'react';
import { KEY_VALUE_PROPOSITIONS, COLOR_PALETTE } from '../constants';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] mb-16`}>Why EMPHZ? Our Core Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_VALUE_PROPOSITIONS.map((prop, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[${COLOR_PALETTE.BORDER}]`}>
              <h3 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-4`}>{prop.coreValue}</h3>
              <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}]`}>{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;