import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle Light/Dark mode"
      className="
        fixed top-24 right-6 z-50 
        w-10 h-10 flex items-center justify-center 
        rounded-full 
        bg-white dark:bg-gray-800 
        shadow-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        hover:ring-4 hover:ring-blue-300/40 
        transition-all duration-300
      "
    >
      <motion.div
        animate={{ rotate: theme === 'light' ? 0 : 360 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-700 relative top-[0.5px]" />
        ) : (
          <Sun className="h-5 w-5 text-yellow-400 relative top-[-0.5px]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
