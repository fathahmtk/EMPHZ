
import React from 'react';
import Button from './Button';
import { BLOG_ARTICLES, KNOWLEDGE_RESOURCES } from '../constants';

const InsightsKnowledge: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Thought Leadership in Composite Engineering.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Blog Articles */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Latest Articles</h3>
            <div className="space-y-6">
              {BLOG_ARTICLES.map((article, index) => (
                <a key={index} href={article.link} className="block p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-lg border border-gray-200 dark:border-zinc-700 transition-shadow duration-300 group">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-500 transition-colors duration-300 mb-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{article.description}</p>
                  <span className="mt-4 inline-block text-gray-800 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-500 text-sm font-medium transition-colors duration-300">Read More &rarr;</span>
                </a>
              ))}
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700">
            <h3 className="text-2xl font-semibold mb-6">Downloadable Resources</h3>
            <div className="space-y-4">
              {KNOWLEDGE_RESOURCES.map((resource, index) => (
                <Button key={index} variant="outline" href={resource.link} className="w-full justify-center">
                  {resource.name}
                </Button>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
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
