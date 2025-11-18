import { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_ITEMS, APP_CONFIG } from "../config/constants";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { trackSocialClick } from "../utils/analytics";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const scrolled = scrollPosition > 20;

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".mobile-menu") && !target.closest(".menu-button")) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, handleClickOutside]);

  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform);
  };

  const navbarClasses = `fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
    scrolled
      ? "py-2 md:py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
      : "py-4 md:py-5 bg-transparent"
  }`;

  return (
    <nav
      className={navbarClasses}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* LOGO (responsive: Kamal -> Kamal Kiran -> Kamal Kiran Polisetty) */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center space-x-2 cursor-pointer group focus:outline-none p-1"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />

          <span
            className="
              font-bold bg-gradient-to-r from-blue-600 to-indigo-600 
              dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent
              text-lg md:text-xl
            "
          >
            {/* Mobile/Small: Kamal */}
            <span className="block md:hidden">Kamal</span>
            {/* Medium: Kamal Kiran */}
            <span className="hidden md:block xl:hidden">Kamal Kiran</span>
            {/* Large Desktop: Full name */}
            <span className="hidden xl:block">Kamal Kiran Polisetty</span>
          </span>
        </Link>

        {/* DESKTOP MENU - Reduced spacing */}
        <div className="hidden lg:flex items-center space-x-2">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer py-2 group px-3"
              activeClass="text-blue-600 dark:text-blue-400"
            >
              {item.name}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
            </Link>
          ))}

          {/* SOCIAL ICONS - Reduced spacing */}
          <div className="flex items-center space-x-2 ml-3 pl-3 border-l border-gray-300 dark:border-gray-600">
            <a
              href={APP_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("GitHub")}
              className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href={APP_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("LinkedIn")}
              className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={APP_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("Instagram")}
              className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleMenu}
          className="menu-button lg:hidden p-2 rounded-lg transition-all 
                     hover:bg-blue-100 dark:hover:bg-blue-900/30 
                     hover:scale-105 active:scale-95"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            ) : (
              <Menu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            )}
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
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
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition font-medium"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* MOBILE SOCIAL ICONS */}
                <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={APP_CONFIG.social.github}
                    target="_blank"
                    className="p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={APP_CONFIG.social.linkedin}
                    target="_blank"
                    className="p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={APP_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleSocialClick("Instagram")}
                    className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
