import { motion } from 'framer-motion';
import { ArrowDownCircle, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const handleResumeDownload = () => {
    // Track download event if you have analytics
    console.log('Resume download clicked');
    
    // The download attribute will handle the download
    // The href will open the PDF in a new tab if download isn't supported
    const link = document.createElement('a');
    link.href = '/kamal-resume.pdf';
    link.download = 'Kamal_Kiran_Polisetty_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kamal Kiran</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6"
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
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 md:mb-10 text-lg"
          >
            I build exceptional digital experiences with modern technologies, 
            turning complex problems into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md flex items-center gap-2 transition-colors w-full sm:w-auto text-center justify-center"
            >
              <Mail size={18} />
              Contact Me
            </Link>
            <button
              onClick={handleResumeDownload}
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-md flex items-center gap-2 transition-all hover:bg-blue-50 dark:hover:bg-gray-700 w-full sm:w-auto text-center justify-center"
            >
              <FileText size={18} />
              Download Resume
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
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDownCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;