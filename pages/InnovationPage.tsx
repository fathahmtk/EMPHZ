import React from 'react';
import QualitySection from '../components/QualitySection';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const InnovationPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.innovation.title}
        description={SEO_DATA.innovation.description}
      />
      <div className="bg-transparent">
        <QualitySection />
      </div>
    </>
  );
};

export default InnovationPage;