import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";
import { platformLogos } from "../data/logoMap";
import { ANIMATION_VARIANTS } from "../config/constants";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container max-w-4xl mx-auto">

        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-3xl font-bold text-center mb-4"
          >
            Certifications{" "}
            <span className="text-blue-600 dark:text-blue-400">& Badges</span>
          </motion.h2>

          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[...certifications]
            .sort(
              (a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((cert, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={ANIMATION_VARIANTS.fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="
                  flex items-center gap-3 
                  bg-white dark:bg-gray-900 
                  p-3 md:p-3 rounded-xl 
                  border border-gray-200 dark:border-gray-700 
                  transition-all duration-200
                  hover:shadow-md hover:shadow-gray-300 
                  dark:hover:shadow-gray-600/40
                  hover:-translate-y-0.5
                "
              >
                {/* Logo */}
                {platformLogos[cert.platform] ? (
                  <img
                    src={platformLogos[cert.platform]}
                    alt={cert.platform}
                    className="h-8 w-8 md:h-10 md:w-10 object-contain flex-shrink-0"
                  />
                ) : (
                  <Award className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                )}

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Platform + Date */}
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                    {cert.platform} • {cert.date}
                  </p>

                  {/* Credential Link */}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 
                                 text-xs md:text-sm mt-1 hover:underline"
                    >
                      View Credential
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
