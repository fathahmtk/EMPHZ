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
      <div className="bg-[var(--color-background)]">
        <InsightsKnowledge />
      </div>
    </>
  );
};

export default KnowledgePage;