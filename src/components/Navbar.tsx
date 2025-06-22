import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_ITEMS, APP_CONFIG } from '../config/constants';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { trackSocialClick } from '../utils/analytics';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const scrolled = scrollPosition > 20;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform);
  };

  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    scrolled 
      ? 'py-2 md:py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
      : 'py-4 md:py-5 bg-transparent'
  }`;

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          aria-label="Go to top of page"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Code className="h-7 w-7 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Kamal.dev
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium cursor-pointer py-2 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
              activeClass="text-blue-600 dark:text-blue-400"
            >
              {item.name}
              <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </Link>
          ))}
          
          <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-300 dark:border-gray-600">
            <a 
              href={APP_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('GitHub')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Visit GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={APP_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('LinkedIn')}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="menu-button lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                      activeClass="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
                >
                  <a 
                    href={APP_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick('GitHub')}
                    className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Visit GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={APP_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick('LinkedIn')}
                    className="p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;