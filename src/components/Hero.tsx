import { motion } from 'framer-motion';
import { ArrowDownCircle, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const handleResumeDownload = () => {
    window.open('/kamal-resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-indigo-950">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="absolute -top-8 left-0 text-5xl opacity-20">👋</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Hi, I'm Kamal Kiran
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                'Software Engineer',
                1500,
                'UI/UX Enthusiast',
                1500,
                'Problem Solver',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed"
          >
            I craft exceptional digital experiences that merge innovative design with cutting-edge technology. 
            Let's transform your ideas into impactful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Let's Connect
            </Link>
            <button
              onClick={handleResumeDownload}
              className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-full flex items-center gap-2 transition-all hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FileText className="h-5 w-5" />
              View Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Explore More
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            >
              <ArrowDownCircle className="w-6 h-6" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;