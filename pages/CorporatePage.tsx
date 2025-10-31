import React from 'react';
import CorporateGovernance from '../components/CorporateGovernance';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const CorporatePage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.corporate.title}
        description={SEO_DATA.corporate.description}
      />
      <div className="bg-[var(--color-background)]">
        <CorporateGovernance />
      </div>
    </>
  );
};

export default CorporatePage;