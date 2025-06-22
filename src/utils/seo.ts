import { SEOProps } from '../types';
import { APP_CONFIG } from '../config/constants';

// Update document head with SEO meta tags
export const updateSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
}: SEOProps) => {
  // Update title
  if (title) {
    document.title = `${title} | ${APP_CONFIG.name}`;
  }

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property?: boolean) => {
    const attribute = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  };

  // Standard meta tags
  if (description) {
    updateMetaTag('description', description);
  }
  
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }

  // Open Graph tags
  updateMetaTag('og:title', title || APP_CONFIG.name, true);
  updateMetaTag('og:description', description || APP_CONFIG.description, true);
  updateMetaTag('og:type', type, true);
  updateMetaTag('og:url', url || APP_CONFIG.url, true);
  
  if (image) {
    updateMetaTag('og:image', image, true);
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', title || APP_CONFIG.name);
  updateMetaTag('twitter:description', description || APP_CONFIG.description);
  
  if (image) {
    updateMetaTag('twitter:image', image);
  }

  // Additional SEO tags
  updateMetaTag('author', APP_CONFIG.name);
  updateMetaTag('robots', 'index, follow');
  updateMetaTag('googlebot', 'index, follow');
};

// Generate structured data for better SEO
export const generateStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: APP_CONFIG.name,
    jobTitle: APP_CONFIG.title,
    description: APP_CONFIG.description,
    url: APP_CONFIG.url,
    email: APP_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: APP_CONFIG.location
    },
    sameAs: [
      APP_CONFIG.social.github,
      APP_CONFIG.social.linkedin
    ],
    knowsAbout: [
      'Web Development',
      'Full Stack Development',
      'React',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Software Engineering'
    ]
  };

  // Add or update structured data script
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  
  script.textContent = JSON.stringify(structuredData);
};

// Generate sitemap data (for static generation)
export const generateSitemapData = () => {
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'monthly' },
    { url: '/#about', priority: 0.8, changefreq: 'monthly' },
    { url: '/#experience', priority: 0.8, changefreq: 'monthly' },
    { url: '/#skills', priority: 0.7, changefreq: 'monthly' },
    { url: '/#projects', priority: 0.9, changefreq: 'weekly' },
    { url: '/#contact', priority: 0.6, changefreq: 'monthly' }
  ];

  return pages.map(page => ({
    ...page,
    url: `${APP_CONFIG.url}${page.url}`,
    lastmod: new Date().toISOString().split('T')[0]
  }));
};