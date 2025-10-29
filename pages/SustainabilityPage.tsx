
import React from 'react';
import SustainabilitySection from '../components/SustainabilitySection';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const SustainabilityPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.sustainability.title}
        description={SEO_DATA.sustainability.description}
      />
      <SustainabilitySection />
    </>
  );
};

export default SustainabilityPage;
