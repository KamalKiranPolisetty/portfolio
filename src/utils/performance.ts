// Performance optimization utilities

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy load images with intersection observer
export const createImageObserver = (callback: (entry: IntersectionObserverEntry) => void) => {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach(callback);
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );
};

// Preload critical resources
export const preloadResource = (href: string, as: string, type?: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) link.type = type;
  document.head.appendChild(link);
};

// Prefetch resources for better navigation
export const prefetchResource = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Check if device prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get device type for optimization
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

// Check if device supports hover
export const supportsHover = (): boolean => {
  return window.matchMedia('(hover: hover)').matches;
};

// Optimize images based on device capabilities
export const getOptimizedImageUrl = (
  baseUrl: string,
  width: number,
  quality: number = 85
): string => {
  // For Pexels images, add optimization parameters
  if (baseUrl.includes('pexels.com')) {
    const url = new URL(baseUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('auto', 'compress');
    url.searchParams.set('cs', 'tinysrgb');
    url.searchParams.set('fit', 'crop');
    return url.toString();
  }
  
  return baseUrl;
};

// Memory usage monitoring (development only)
export const logMemoryUsage = () => {
  if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
    const memory = (performance as any).memory;
    console.log('Memory Usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }
};

// Critical resource hints
export const addResourceHints = () => {
  // Preconnect to external domains
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.pexels.com'
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    if (domain.includes('gstatic')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Service Worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered: ', registration);
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError);
    }
  }
};