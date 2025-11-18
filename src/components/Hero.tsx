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
  // VIEW Resume (always open in new tab)
  const handleResumeView = () => {
    window.open(APP_CONFIG.resume.path, "_blank", "noopener");
    trackResumeView();
  };

  // DOWNLOAD Resume
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
    } catch {
      alert("Resume download not available. Please contact me directly.");
    }
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background dots */}
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

        {/* Layout */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
            {/* TEXT LEFT SIDE */}
            <div className="max-w-2xl mx-auto text-left pl-4 md:pl-8 xl:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 mb-6"
              >
                <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-300 font-medium">
                  Hello,
                </h2>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold flex items-center gap-4 leading-tight">
                  <span className="text-black dark:text-white">
                    {APP_CONFIG.name.split(" ")[0]}
                  </span>

                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    here!
                  </span>

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
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-200 leading-relaxed tracking-tight">
                  Full Stack Developer crafting{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    scalable applications
                  </span>{" "}
                  &{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    AI-powered solutions
                  </span>
                  .
                </p>
              </motion.div>

              {/* SOCIAL ICONS with your hover effects */}
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
                    className="w-10 h-10 rounded-full 
                    bg-blue-900/10 dark:bg-blue-900/20 
                    hover:bg-blue-800/10 dark:hover:bg-blue-800/30 
                    flex items-center justify-center 
                    transition-all hover:shadow-md hover:scale-[1.05]"
                  >
                    <Github className="w-5 h-5 text-blue-400" />
                  </a>

                  <a
                    href={APP_CONFIG.social.linkedin}
                    target="_blank"
                    className="w-10 h-10 rounded-full 
                    bg-blue-900/10 dark:bg-blue-900/20 
                    hover:bg-blue-800/10 dark:hover:bg-blue-800/30 
                    flex items-center justify-center 
                    transition-all hover:shadow-md hover:scale-[1.05]"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </a>

                  <a
                    href={APP_CONFIG.social.instagram}
                    target="_blank"
                    className="w-10 h-10 rounded-full 
                    bg-blue-900/10 dark:bg-blue-900/20 
                    hover:bg-blue-800/10 dark:hover:bg-blue-800/30 
                    flex items-center justify-center 
                    transition-all hover:shadow-md hover:scale-[1.05]"
                  >
                    <Instagram className="w-5 h-5 text-blue-400" />
                  </a>

                  <a
                    href={`mailto:${APP_CONFIG.email}`}
                    className="w-10 h-10 rounded-full 
                    bg-blue-900/10 dark:bg-blue-900/20 
                    hover:bg-blue-800/10 dark:hover:bg-blue-800/30 
                    flex items-center justify-center 
                    transition-all hover:shadow-md hover:scale-[1.05]"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                  </a>
                </div>
              </motion.div>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.45 }}
                className="flex flex-wrap gap-4"
              >
                {/* VIEW */}
                <button
                  onClick={handleResumeView}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-500 
  rounded-md hover:bg-blue-500 hover:text-white 
  transition-all font-medium flex items-center gap-2"
                >
                  View Resume
                  <ExternalLink className="w-4 h-4" />
                </button>

                {/* DOWNLOAD */}
                <button
                  onClick={handleResumeDownload}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-500 
    rounded-md hover:bg-blue-500 hover:text-white 
    transition-all font-medium flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>

                {/* CONTACT BUTTON */}
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-6 py-2 border-2 border-blue-500 text-blue-500 
                  rounded-md hover:bg-blue-500 hover:text-white 
                  transition-all font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Let's Connect
                </Link>
              </motion.div>
            </div>

            {/* PHOTO */}
            <div className="flex justify-center order-2 xl:order-2 pr-4 md:pr-8 xl:pr-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[380px] 
                rounded-2xl overflow-hidden shadow-2xl 
                dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/me.jpeg"
                  alt={APP_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
