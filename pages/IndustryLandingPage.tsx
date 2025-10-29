import React from 'react';
import { useParams } from 'react-router-dom';
import { INDUSTRIES } from '../constants';
import IndustryDetailPage from './IndustryDetailPage';
import NotFoundPage from './NotFoundPage';

const IndustryLandingPage: React.FC = () => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const industry = INDUSTRIES.find(ind => ind.slug === industrySlug);

  if (!industry) {
    return <NotFoundPage />;
  }

  return <IndustryDetailPage industry={industry} />;
};

export default IndustryLandingPage;