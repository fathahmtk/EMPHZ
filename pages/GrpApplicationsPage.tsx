import React from 'react';
import MetaTags from '../components/MetaTags';
import { SEO_DATA, GRP_APPLICATIONS_CONTENT } from '../constants';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';
import CTABanner from '../components/CTABanner';

const GrpApplicationsPage: React.FC = () => {
    const content = GRP_APPLICATIONS_CONTENT;
    
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Home', path: '/' },
        { label: 'Knowledge Hub', path: '/knowledge' },
        { label: 'Comprehensive Guide to GRP Applications' },
    ];
    
    return (
        <>
            <MetaTags title={SEO_DATA.grpApplications.title} description={SEO_DATA.grpApplications.description} />
            
            <div className="bg-transparent">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
                    <Breadcrumbs items={breadcrumbItems} className="mb-8" />
                    <header className="text-center max-w-4xl mx-auto mb-20">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-3">{content.title}</h1>
                        <p className="text-2xl text-[var(--color-text-secondary)]">{content.subtitle}</p>
                        <p className="text-lg text-[var(--color-text-secondary)] mt-6 leading-relaxed">{content.intro}</p>
                    </header>
                    
                    <main className="max-w-5xl mx-auto space-y-20">
                        {content.categories.map(category => (
                             <section key={category.name}>
                                <div className="relative overflow-hidden rounded-[var(--radius)] mb-8 shadow-lg">
                                  <img src={category.image} alt={category.name} className="w-full h-64 object-cover"/>
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <h2 className="text-3xl font-bold text-white p-6">{category.name}</h2>
                                  </div>
                                </div>
                                <div className="space-y-8 p-6 bg-[var(--color-surface-primary)] backdrop-blur-lg rounded-b-[var(--radius)] border border-[var(--color-border)] shadow-sm -mt-2 relative z-10">
                                  {category.subcategories.map(subcategory => (
                                    <div key={subcategory.name}>
                                      <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">{subcategory.name}</h3>
                                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-[var(--color-text-secondary)]">
                                        {subcategory.items.map((item, i) => <li key={i}>{item}</li>)}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </section>
                        ))}
                    </main>
                </div>
            </div>
            
            <CTABanner />
        </>
    );
};

export default GrpApplicationsPage;