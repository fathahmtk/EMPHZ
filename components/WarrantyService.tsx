
import React from 'react';
import {
  WARRANTY_COVERAGE,
  WARRANTY_EXCLUSIONS,
  INSTALLATION_REQUIREMENTS,
} from '../constants';
import config from '../config';

const WarrantyService: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Confidence Engineered into Every Product.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Warranty Coverage */}
          <div className="p-8 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold mb-4">Warranty Coverage</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{WARRANTY_COVERAGE}</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">
              Our warranty reflects our commitment to product integrity and long-term performance.
            </p>
          </div>

          {/* Exclusions */}
          <div className="p-8 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold mb-4">Exclusions</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{WARRANTY_EXCLUSIONS}</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">
              Please refer to our full warranty document for detailed terms and conditions.
            </p>
          </div>

          {/* Installation Requirements */}
          <div className="p-8 bg-gray-50 dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold mb-4">Installation Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {INSTALLATION_REQUIREMENTS.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-4">
              Proper installation ensures optimal performance and warranty validity.
            </p>
          </div>
        </div>

        {/* Support Contact */}
        <div className="mt-20 text-center p-10 bg-gray-800 text-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Need Support?</h3>
          <p className="text-lg">
            📞 Call us at: <a href={`tel:${config.supportPhone}`} className="hover:text-teal-500 transition-colors duration-200">{config.supportPhone}</a>
          </p>
          <p className="text-lg mt-2">
            ✉️ Email us: <a href={`mailto:${config.supportEmail}`} className="hover:text-teal-500 transition-colors duration-200">{config.supportEmail}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarrantyService;