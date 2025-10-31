import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AUTOMOBILE_PAGE_DATA, PRODUCT_CATALOG, SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import { useUIState } from '../UIStateContext';
import Button from '../components/Button';
import Breadcrumbs, { BreadcrumbItem } from '../components/Breadcrumbs';
import Lightbox from '../components/Lightbox';
import { IconName } from '../types';

const AutomobileIndustryPage: React.FC = () => {
  const { openQuickView } = useUIState();
  const industryData = AUTOMOBILE_PAGE_DATA;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxStartIndex, setLightboxStartIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxStartIndex(index);
    setIsLightboxOpen(true);
  };
  
  const whyGrpAdvantages: { icon: IconName; title: string; description: string }[] = [
    { icon: "lightweight", title: "Significant Weight Reduction", description: "GRP is up to 75% lighter than steel and 30% lighter than aluminum. This drastic weight saving directly translates to improved fuel efficiency, increased payload capacity, and better vehicle dynamics." },
    { icon: "durability", title: "Unmatched Durability & Longevity", description: "Immune to rust and corrosion, GRP components withstand harsh weather, road salt, and chemical exposure, drastically reducing maintenance costs and extending vehicle life." },
    { icon: "design", title: "Ultimate Design Freedom", description: "GRP can be molded into complex, aerodynamic, and single-piece parts. This allows for innovative designs, part consolidation, and aesthetically superior vehicle bodies that are difficult or expensive to achieve with metal." },
    { icon: "nvh", title: "Superior NVH Performance", description: "The inherent damping properties of GRP composites absorb vibrations and noise, leading to a significantly quieter cabin and a more comfortable ride for passengers and drivers." },
  ];

  const featuredProducts = React.useMemo(() => {
    const products = [];
    for (const category of PRODUCT_CATALOG) {
      for (const product of category.products) {
        if (industryData.featuredProducts.includes(product.code)) {
          products.push({ product, categoryName: category.name });
        }
      }
    }
    return products;
  }, [industryData.featuredProducts]);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Industries', path: '/industries' },
    { label: 'Automobile & Transport' },
  ];

  return (
    <>
      <MetaTags
        title={SEO_DATA.industryDetail.title("Automobile & Transport")}
        description={SEO_DATA.industryDetail.description("Automobile & Transport", industryData.hero.subtitle)}
      />
      
      {/* Video Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden bg-[var(--color-background)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={industryData.hero.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp">
            {industryData.hero.title}
          </h1>
          <p className="text-lg sm:text-xl font-light animate-fadeInUp text-[var(--color-secondary)]" style={{ animationDelay: '0.2s' }}>
            {industryData.hero.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Breadcrumbs items={breadcrumbItems} className="mb-16" />

        {/* Introduction Section */}
        <section className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{industryData.introduction.title}</h2>
            <p className="text-lg text-[var(--color-secondary)] leading-relaxed">{industryData.introduction.content}</p>
        </section>

        {/* Solutions Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our GRP Solutions in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industryData.solutions.map((solution, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-[var(--color-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border)]">
                <img src={solution.image} alt={solution.title} className="w-full md:w-1/3 h-48 object-cover rounded-md flex-shrink-0"/>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-[var(--color-secondary)]">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEW 'Why Choose GRP' Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GRP Composites for Automotive?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whyGrpAdvantages.map((advantage, index) => (
              <div key={index} className="bg-[var(--color-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[var(--color-brand)]/10 rounded-full">
                    <Icon name={advantage.icon} className="h-10 w-10 text-[var(--color-brand)]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">{advantage.title}</h3>
                <p className="text-sm text-[var(--color-secondary)]">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Advantages Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Advantages of EMPHZ Composites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.advantages.map((advantage, index) => (
              <div key={index} className="bg-[var(--color-surface)] p-6 rounded-lg shadow-sm border border-[var(--color-border)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-[var(--color-brand)]/10 rounded-full">
                    <Icon name={advantage.icon} className="h-10 w-10 text-[var(--color-brand)]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">{advantage.title}</h3>
                <p className="text-sm text-[var(--color-secondary)]">{advantage.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEW: Image Gallery Section */}
        <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Automotive Solutions Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industryData.galleryImages.map((image, index) => (
                    <button 
                        key={index} 
                        className="group relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[var(--color-brand)]" 
                        onClick={() => openLightbox(index)}
                        aria-label={`View image ${index + 1} of automotive solutions`}
                    >
                        <img 
                            src={image} 
                            alt={`Automotive Solution ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                            loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <svg className="w-12 h-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>
        </section>

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-center mb-10">Featured Automotive Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(({ product, categoryName }) => (
                <ProductCard key={product.code} product={product} onQuickViewClick={openQuickView} categoryName={categoryName} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button href="/products/category/grp-transport-automotive" variant="secondary">View All Automotive Products</Button>
            </div>
          </section>
        )}
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={industryData.galleryImages}
          startIndex={lightboxStartIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
};

export default AutomobileIndustryPage;