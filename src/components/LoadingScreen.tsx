import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center z-50"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="mb-8"
      >
        <Code className="h-16 w-16 text-blue-600 dark:text-blue-400" />
      </motion.div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-1 bg-blue-600 dark:bg-blue-400 rounded-full mb-4 max-w-md"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 dark:text-gray-300 font-medium"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;