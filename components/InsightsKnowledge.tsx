
import React from 'react';
import Button from './Button';
import { BLOG_ARTICLES, KNOWLEDGE_RESOURCES, COLOR_PALETTE } from '../constants';

const InsightsKnowledge: React.FC = () => {
  return (
    <section className={`py-24 bg-[${COLOR_PALETTE.BACKGROUND}]`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl lg:text-4xl font-bold text-[${COLOR_PALETTE.NAVY}] text-center mb-16`}>Thought Leadership in Composite Engineering.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Blog Articles */}
          <div>
            <h3 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-6`}>Latest Articles</h3>
            <div className="space-y-6">
              {BLOG_ARTICLES.map((article, index) => (
                <a key={index} href={article.link} className={`block p-6 bg-white rounded-lg shadow-sm hover:shadow-lg border border-[${COLOR_PALETTE.BORDER}] transition-shadow duration-300 group`}>
                  <h4 className={`text-xl font-semibold text-[${COLOR_PALETTE.NAVY}] group-hover:text-[${COLOR_PALETTE.TEAL}] transition-colors duration-300 mb-2`}>
                    {article.title}
                  </h4>
                  <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm`}>{article.description}</p>
                  <span className={`mt-4 inline-block text-[${COLOR_PALETTE.NAVY}] group-hover:text-[${COLOR_PALETTE.TEAL}] text-sm font-medium transition-colors duration-300`}>Read More &rarr;</span>
                </a>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className={`bg-white p-8 rounded-lg shadow-sm border border-[${COLOR_PALETTE.BORDER}]`}>
            <h3 className={`text-2xl font-semibold text-[${COLOR_PALETTE.NAVY}] mb-6`}>Downloadable Resources</h3>
            <div className="space-y-4">
              {KNOWLEDGE_RESOURCES.map((resource, index) => (
                <Button key={index} variant="outline" href={resource.link} className="w-full justify-center">
                  {resource.name}
                </Button>
              ))}
            </div>
            <p className={`text-[${COLOR_PALETTE.TEXT_SECONDARY}] text-sm mt-6`}>
              Access our comprehensive library of whitepapers, test reports, and CAD drawings
              to deepen your understanding of GRP composite technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsKnowledge;