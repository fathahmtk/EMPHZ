
import React from 'react';
import InsightsKnowledge from '../components/InsightsKnowledge';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const KnowledgePage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.knowledge.title}
        description={SEO_DATA.knowledge.description}
      />
      <InsightsKnowledge />
    </>
  );
};

export default KnowledgePage;
