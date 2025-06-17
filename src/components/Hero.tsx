import { motion } from 'framer-motion';
import { ArrowDownCircle, Mail, FileText, X, Download, Eye, ExternalLink, AlertCircle } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Hero = () => {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleResumeView = () => {
    setShowPdfPopup(true);
    setPdfError(false);
  };

  const handleResumeDownload = () => {
    // First try to download, if it fails, show an alert
    try {
      const link = document.createElement('a');
      link.href = '/kamal-resume.pdf';
      link.download = 'Kamal_Kiran_Polisetty_Resume.pdf';
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
      window.open('/kamal-resume.pdf', '_blank');
    } catch (error) {
      alert('Unable to open PDF. Please contact me directly for my latest resume.');
    }
  };

  return (
    <>
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
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                Let's Connect
              </Link>
              <div className="flex gap-3">
                <button
                  onClick={handleResumeView}
                  className="px-6 py-4 bg-white dark:bg-gray-800 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-medium rounded-full flex items-center gap-2 transition-all hover:bg-blue-50 dark:hover:bg-gray-700 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Eye className="h-5 w-5 transition-transform group-hover:scale-110" />
                  View Resume
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="px-6 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Download className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Download
                </button>
              </div>
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

      {/* PDF Popup Modal */}
      {showPdfPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closePdfPopup}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Kamal Kiran Polisetty - Resume
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Full Stack Developer & Software Engineer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openPdfInNewTab}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors font-medium"
                  title="Open in New Tab"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Tab
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  title="Download Resume"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
                <button
                  onClick={closePdfPopup}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 p-6">
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                {!pdfError ? (
                  <iframe
                    src="/kamal-resume.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"
                    className="w-full h-full border-0"
                    title="Kamal Kiran Polisetty Resume"
                    onLoad={() => setPdfError(false)}
                    onError={handlePdfError}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-8">
                    <div className="mb-6 p-4 bg-orange-100 dark:bg-orange-900/30 rounded-full">
                      <AlertCircle className="h-16 w-16 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      PDF Preview Unavailable
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                      The PDF couldn't be displayed in the browser. This might be due to browser security settings or the file location.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={handleResumeDownload}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        <Download className="h-5 w-5" />
                        Download Resume
                      </button>
                      <button 
                        onClick={openPdfInNewTab}
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Open in New Tab
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      You can also contact me directly for my latest resume
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <p>
                  {!pdfError 
                    ? "Click and drag to scroll • Use browser zoom for better readability" 
                    : "Having trouble viewing? Try downloading or opening in a new tab"
                  }
                </p>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;