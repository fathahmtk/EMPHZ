
import React from 'react';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import BrandPillars from '../components/BrandPillars';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';
import IndustryGrid from '../components/IndustryGrid';
import ContactRFQ from '../components/ContactRFQ';

const HomePage: React.FC = () => {
  return (
    <>
      <MetaTags
        title={SEO_DATA.home.title}
        description={SEO_DATA.home.description}
      />
      <HeroSection />
      <div className="space-y-24">
        <ValueProposition />
        <BrandPillars />
        <IndustryGrid />
        <ContactRFQ />
      </div>
    </>
  );
};

export default HomePage;