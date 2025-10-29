import React from 'react';
import { Link } from 'react-router-dom';
import { AUTOMOBILE_PAGE_DATA, PRODUCT_CATALOG, SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import { useUIState } from '../UIStateContext';
import Button from '../components/Button';

const AutomobileIndustryPage: React.FC = () => {
  const { openQuickView } = useUIState();
  const industryData = AUTOMOBILE_PAGE_DATA;

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

  return (
    <>
      <MetaTags
        title={SEO_DATA.industryDetail.title("Automobile & Transport")}
        description={SEO_DATA.industryDetail.description("Automobile & Transport", industryData.hero.subtitle)}
      />
      
      {/* Video Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white overflow-hidden bg-gray-900">
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
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fadeInUp text-shadow-strong">
            {industryData.hero.title}
          </h1>
          <p className="text-lg sm:text-xl font-light animate-fadeInUp text-shadow-strong" style={{ animationDelay: '0.2s' }}>
            {industryData.hero.subtitle}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-16 text-[var(--color-text-secondary)]" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex items-center flex-wrap">
            <li className="flex items-center"><Link to="/" className="hover:text-[var(--color-primary)]">Home</Link><span className="mx-3">/</span></li>
            <li className="flex items-center"><Link to="/industries" className="hover:text-[var(--color-primary)]">Industries</Link><span className="mx-3">/</span></li>
            <li className="text-[var(--color-primary)]" aria-current="page">Automobile & Transport</li>
          </ol>
        </nav>

        {/* Introduction Section */}
        <section className="mb-20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{industryData.introduction.title}</h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{industryData.introduction.content}</p>
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
                  <p className="text-[var(--color-text-secondary)]">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Advantages Section */}
        <section className="mb-20 p-8 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12">Key Advantages of EMPHZ Composites</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {industryData.advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-4 bg-white/10 rounded-full mb-4">
                  <Icon name={advantage.icon} className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-300">{advantage.description}</p>
              </div>
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
              <Button href="/products/category/grp-transport-automotive" variant="outline">View All Automotive Products</Button>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default AutomobileIndustryPage;