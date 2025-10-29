
import React from 'react';
import { KEY_VALUE_PROPOSITIONS } from '../constants';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Why EMPHZ? Our Core Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_VALUE_PROPOSITIONS.map((prop, index) => (
            <div key={index} className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-zinc-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{prop.coreValue}</h3>
              <p className="text-gray-600 dark:text-gray-400">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
