import React from 'react';
import WarrantyService from '../components/WarrantyService';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const SupportPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.support.title}
        description={SEO_DATA.support.description}
      />
      <div className="bg-transparent">
        <WarrantyService />
      </div>
    </>
  );
};

export default SupportPage;