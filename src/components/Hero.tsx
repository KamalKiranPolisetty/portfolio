import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  X,
  Download,
  ExternalLink,
  AlertCircle,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-scroll";
import { useState } from "react";
import { APP_CONFIG } from "../config/constants";
import { trackResumeDownload, trackResumeView } from "../utils/analytics";

const Hero = ({ theme }) => {
  const [showPdfPopup, setShowPdfPopup] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  const handleResumeView = () => {
    setShowPdfPopup(true);
    setPdfError(false);
    trackResumeView();
  };

  const handleResumeDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = APP_CONFIG.resume.path;
      link.download = APP_CONFIG.resume.filename;
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      trackResumeDownload();
    } catch (error) {
      alert("Resume download not available. Please contact me directly.");
    }
  };

  const handlePdfError = () => setPdfError(true);

  const closePdfPopup = () => {
    setShowPdfPopup(false);
    setPdfError(false);
  };

  const openPdfInNewTab = () => {
    try {
      window.open(APP_CONFIG.resume.path, "_blank");
    } catch (error) {
      alert("Unable to open PDF.");
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Animated dots pattern */}
        <div className="absolute inset-0 -z-5">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* RESPONSIVE LAYOUT */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div
            className="
              grid 
              grid-cols-1 
              xl:grid-cols-2 
              gap-8 
              items-center
            "
          >
            {/* TEXT CONTENT - Left on desktop, top on mobile */}
            <div className="max-w-2xl mx-auto text-left order-1 xl:order-1 pl-4 md:pl-8 xl:pl-12">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 mb-6"
              >
                <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-300 font-medium">
                  Hello,
                </h2>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold flex items-center gap-4 leading-tight">
                  <span className="text-black dark:text-white">
                    {APP_CONFIG.name.split(" ")[0]}
                  </span>

                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r 
                    from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
                  >
                    here!
                  </span>

                  {/* static emoji */}
                  <span className="inline-block">👋</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="space-y-5 mb-8"
              >
                <p
                  className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-200 
   leading-relaxed tracking-tight"
                >
                  Full Stack Developer crafting
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {" "}
                    scalable applications{" "}
                  </span>
                  & intelligent{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    AI-powered solutions
                  </span>
                  .
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-6"
              >
                <div className="flex gap-3">
                  <a
                    href={APP_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-900/10 dark:bg-blue-900/20 hover:bg-blue-800/10 dark:hover:bg-blue-800/30 flex items-center justify-center transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href={APP_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-900/10 dark:bg-blue-900/20 hover:bg-blue-800/10 dark:hover:bg-blue-800/30 flex items-center justify-center transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href={APP_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-900/10 dark:bg-blue-900/20 hover:bg-blue-800/10 dark:hover:bg-blue-800/30 flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-blue-400" />
                  </a>
                  <a
                    href={`mailto:${APP_CONFIG.email}`}
                    className="w-10 h-10 rounded-full bg-blue-900/10 dark:bg-blue-900/20 hover:bg-blue-800/10 dark:hover:bg-blue-800/30 flex items-center justify-center transition-all"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                  </a>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={handleResumeView}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-md transition-all shadow"
                >
                  Resume
                </button>

                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-all cursor-pointer flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </Link>
              </motion.div>
            </div>

            {/* PHOTO - Right on desktop, bottom on mobile */}
            <div className="flex justify-center order-2 xl:order-2 pr-4 md:pr-8 xl:pr-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  w-[260px] 
                  sm:w-[300px] 
                  md:w-[340px] 
                  lg:w-[360px] 
                  xl:w-[380px]
                  rounded-2xl 
                  overflow-hidden 
                  shadow-2xl 
                  dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]
                "
              >
                <img
                  src="/me.jpeg"
                  alt="Kamal Polisetty"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF POPUP */}
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
                  <h3 className="text-sm md:text-xl font-semibold text-gray-900 dark:text-white truncate">
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
                  className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors font-medium text-sm"
                >
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden md:inline">Open in Tab</span>
                </button>

                <button
                  onClick={handleResumeDownload}
                  className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
                >
                  <Download className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden sm:inline">Download</span>
                </button>

                <button
                  onClick={closePdfPopup}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4 md:h-6 md:w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>

            {/* PDF VIEWER */}
            <div className="flex-1 p-2 md:p-6">
              <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                {!pdfError ? (
                  <iframe
                    src={`${APP_CONFIG.resume.path}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-full border-0"
                    title="Resume Viewer"
                    onError={handlePdfError}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <AlertCircle className="h-14 w-14 text-orange-500 mb-4" />
                    <p className="text-gray-300">PDF preview unavailable.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 md:p-6 border-t border-gray-200 dark:border-gray-700 text-gray-400 text-xs md:text-sm">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
