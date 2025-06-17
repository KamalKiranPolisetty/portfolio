import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import CursorFollower from './components/CursorFollower';

// Lazy load components that are not immediately visible
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Handle initial mount and theme setup
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Handle loading state - reduced time for faster perceived load
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Reduced from 1500ms to 800ms
    
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) return null;

  return (
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
            <CursorFollower />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              
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
  );
}

export default App;