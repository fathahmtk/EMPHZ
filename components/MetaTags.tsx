import React, { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
}

const updateMetaTag = (property: string, content: string, isProperty: boolean = true) => {
  let element = document.querySelector(isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    if (isProperty) {
      element.setAttribute('property', property);
    } else {
      element.setAttribute('name', property);
    }
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    updateMetaTag('description', description, false);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    
  }, [title, description]);

  return null; // This component doesn't render anything visible
};

export default MetaTags;