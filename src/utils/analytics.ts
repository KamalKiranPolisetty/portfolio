import { AnalyticsEvent } from '../types';
import { APP_CONFIG } from '../config/constants';

// Google Analytics 4
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common tracking events
export const trackPageView = (path: string) => {
  gtag('config', APP_CONFIG.analytics.googleAnalytics, {
    page_path: path,
  });
};

export const trackContactFormSubmit = () => {
  trackEvent({
    action: 'submit',
    category: 'Contact Form',
    label: 'Contact Form Submission',
  });
};

export const trackResumeDownload = () => {
  trackEvent({
    action: 'download',
    category: 'Resume',
    label: 'Resume Download',
  });
};

export const trackResumeView = () => {
  trackEvent({
    action: 'view',
    category: 'Resume',
    label: 'Resume View',
  });
};

export const trackProjectClick = (projectName: string, type: 'github' | 'live') => {
  trackEvent({
    action: 'click',
    category: 'Project',
    label: `${projectName} - ${type}`,
  });
};

export const trackSocialClick = (platform: string) => {
  trackEvent({
    action: 'click',
    category: 'Social',
    label: platform,
  });
};

export const trackThemeToggle = (theme: 'light' | 'dark') => {
  trackEvent({
    action: 'toggle',
    category: 'Theme',
    label: theme,
  });
};

// Initialize analytics
export const initializeAnalytics = () => {
  if (typeof window === 'undefined' || !APP_CONFIG.analytics.googleAnalytics) {
    return;
  }

  // Load Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${APP_CONFIG.analytics.googleAnalytics}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function() {
    (window as any).dataLayer.push(arguments);
  };

  gtag('js', new Date());
  gtag('config', APP_CONFIG.analytics.googleAnalytics, {
    page_title: APP_CONFIG.name,
    page_location: window.location.href,
  });
};