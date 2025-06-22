import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { APP_CONFIG } from './config/constants';
import { useLocalStorage } from './hooks/useLocalStorage';
import { initializeAnalytics, trackThemeToggle } from './utils/analytics';
import { registerServiceWorker, addResourceHints } from './utils/performance';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import CursorFollower from './components/CursorFollower';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  // Handle initial mount and theme setup
  useEffect(() => {
    setMounted(true);
    
    // Check system preference if no saved theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!localStorage.getItem('theme') && prefersDark) {
      setTheme('dark');
    }

    // Initialize analytics
    if (APP_CONFIG.analytics.googleAnalytics) {
      initializeAnalytics();
    }

    // Add resource hints for performance
    addResourceHints();

    // Register service worker
    if (APP_CONFIG.performance.enableServiceWorker) {
      registerServiceWorker();
    }
  }, [setTheme]);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, mounted]);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    trackThemeToggle(newTheme);
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null;

  return (
    <ErrorBoundary>
      <SEO
        title={APP_CONFIG.name}
        description={APP_CONFIG.description}
        keywords="full stack developer, web developer, react developer, node.js, typescript, javascript"
        url={APP_CONFIG.url}
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {APP_CONFIG.features.animations && <CursorFollower />}
              
              <div className="flex flex-col min-h-screen">
                <Navbar />
                {APP_CONFIG.features.darkMode && (
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                )}
                
                <motion.main
                  className="flex-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <AnimatePresence mode="wait">
                    <div key={theme}>
                      <Hero />
                      <Suspense fallback={<SectionLoader />}>
                        <About />
                      </Suspense>
                      <Suspense fallback={<SectionLoader />}>
                        <Experience />
                      </Suspense>
                      <Suspense fallback={<SectionLoader />}>
                        <Skills />
                      </Suspense>
                      <Suspense fallback={<SectionLoader />}>
                        <Projects />
                      </Suspense>
                      <Suspense fallback={<SectionLoader />}>
                        <Contact />
                      </Suspense>
                    </div>
                  </AnimatePresence>
                </motion.main>
                
                <Suspense fallback={<div className="h-20 bg-gray-900"></div>}>
                  <Footer />
                </Suspense>
              </div>
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}

export default App;