import { motion } from 'framer-motion';
import { ArrowDownCircle, Mail, FileText, X, Download, Eye, ExternalLink, AlertCircle } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { APP_CONFIG } from '../config/constants';
import { trackResumeDownload, trackResumeView } from '../utils/analytics';

const Hero = () => {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleResumeView = () => {
    setShowPdfPopup(true);
    setPdfError(false);
    trackResumeView();
  };

  const handleResumeDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = APP_CONFIG.resume.path;
      link.download = APP_CONFIG.resume.filename;
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      trackResumeDownload();
    } catch (error) {
      alert('Resume download not available. Please contact me directly for my latest resume.');
    }
  };

  const handlePdfError = () => {
    setPdfError(true);
  };

  const closePdfPopup = () => {
    setShowPdfPopup(false);
    setPdfError(false);
  };

  const openPdfInNewTab = () => {
    try {
      window.open(APP_CONFIG.resume.path, '_blank');
    } catch (error) {
      alert('Unable to open PDF. Please contact me directly for my latest resume.');
    }
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-indigo-950">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 w-40 h-40 md:w-80 md:h-80 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-30 md:-bottom-60 -left-30 md:-left-60 w-48 h-48 md:w-96 md:h-96 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <span className="absolute -top-4 md:-top-8 left-0 text-3xl md:text-5xl opacity-20" role="img" aria-label="waving hand">👋</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight">
                Hi, I'm {APP_CONFIG.name.split(' ')[0]} {APP_CONFIG.name.split(' ')[1]}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12 md:h-16"
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
              className="text-gray-600 dark:text-gray-400 max-w-3xl mb-12 text-base sm:text-lg md:text-xl leading-relaxed px-4"
            >
              {APP_CONFIG.description}. Let's transform your ideas into impactful solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-2xl px-4"
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                Let's Connect
              </Link>
              
              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={handleResumeView}
                  className="flex-1 sm:flex-none px-4 md:px-6 py-3 md:py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-full flex items-center justify-center gap-2 transition-all hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Eye className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">View Resume</span>
                  <span className="sm:hidden">View</span>
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="flex-1 sm:flex-none px-4 md:px-6 py-3 md:py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <Download className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
                  <span className="hidden sm:inline">Download</span>
                  <span className="sm:hidden">DL</span>
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="flex flex-col items-center cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              aria-label="Scroll to about section"
            >
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Explore More
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                <ArrowDownCircle className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PDF Popup Modal - Enhanced with better accessibility */}
      {showPdfPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 md:p-4"
          onClick={closePdfPopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-modal-title"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-gray-900 rounded-xl md:rounded-2xl shadow-2xl w-full max-w-6xl h-[95vh] md:h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 md:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                <div className="p-1.5 md:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  <FileText className="h-4 w-4 md:h-6 md:w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 id="pdf-modal-title" className="text-sm md:text-xl font-semibold text-gray-900 dark:text-white truncate">
                    {APP_CONFIG.name} - Resume
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 truncate">
                    {APP_CONFIG.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
                <button
                  onClick={openPdfInNewTab}
                  className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  title="Open in New Tab"
                >
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden md:inline">Open in Tab</span>
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title="Download Resume"
                >
                  <Download className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={closePdfPopup}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                  title="Close"
                  aria-label="Close resume viewer"
                >
                  <X className="h-4 w-4 md:h-6 md:w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 p-2 md:p-6">
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                {!pdfError ? (
                  <iframe
                    src={`${APP_CONFIG.resume.path}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-full border-0"
                    title={`${APP_CONFIG.name} Resume`}
                    onLoad={() => setPdfError(false)}
                    onError={handlePdfError}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-4 md:p-8">
                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      <AlertCircle className="h-12 w-12 md:h-16 md:w-16 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                      PDF Preview Unavailable
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6 max-w-md leading-relaxed">
                      The PDF couldn't be displayed in the browser. This might be due to browser security settings or the file location.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                      <button 
                        onClick={handleResumeDownload}
                        className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <Download className="h-4 w-4 md:h-5 md:w-5" />
                        Download Resume
                      </button>
                      <button 
                        onClick={openPdfInNewTab}
                        className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-gray-500"
                      >
                        <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                        Open in Tab
                      </button>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-3 md:mt-4">
                      You can also contact me directly for my latest resume
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 md:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-gray-500 dark:text-gray-400 gap-2">
                <p className="text-center sm:text-left">
                  {!pdfError 
                    ? "Click and drag to scroll • Use browser zoom for better readability" 
                    : "Having trouble viewing? Try downloading or opening in a new tab"
                  }
                </p>
                <p className="text-center sm:text-right">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;