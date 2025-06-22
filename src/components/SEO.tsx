import { useEffect } from 'react';
import { SEOProps } from '../types';
import { updateSEO, generateStructuredData } from '../utils/seo';

interface SEOComponentProps extends SEOProps {
  children?: React.ReactNode;
}

const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  children
}) => {
  useEffect(() => {
    // Update SEO meta tags
    updateSEO({
      title,
      description,
      keywords,
      image,
      url,
      type
    });

    // Generate structured data
    generateStructuredData();
  }, [title, description, keywords, image, url, type]);

  return <>{children}</>;
};

export default SEO;