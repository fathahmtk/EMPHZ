
import React, { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null; // This component doesn't render anything visible
};

export default MetaTags;
