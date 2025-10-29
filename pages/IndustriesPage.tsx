
import React from 'react';
import IndustryGrid from '../components/IndustryGrid';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const IndustriesPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.industries.title}
        description={SEO_DATA.industries.description}
      />
      <IndustryGrid />
    </>
  );
};

export default IndustriesPage;
