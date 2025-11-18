import { motion } from "framer-motion";
import { education } from "../data/education";
import { platformLogos } from "../data/logoMap";
import { ANIMATION_VARIANTS } from "../config/constants";

const Education = () => {
  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
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
            Education <span className="text-blue-600 dark:text-blue-400">Background</span>
          </motion.h2>

          <motion.div
            variants={ANIMATION_VARIANTS.fadeIn}
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={ANIMATION_VARIANTS.fadeIn}
              custom={index}
              initial="hidden"
              whileInView="visible"
              className="
                flex items-center gap-3 
                bg-white dark:bg-gray-900 
                p-3 md:p-4 rounded-xl 
                border border-gray-200 dark:border-gray-700 

                /* 👇 SAME HOVER AS CERTIFICATIONS */
                transition-all duration-200
                hover:shadow-md hover:shadow-gray-300 
                dark:hover:shadow-gray-600/40
                hover:-translate-y-[1px]
              "
            >
              {/* University Logo */}
              <img
                src={platformLogos[edu.logo]}
                alt={edu.company}
                className="h-10 w-10 md:h-12 md:w-12 object-contain flex-shrink-0"
              />

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                  {edu.company}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm mt-1">
                  {edu.title}
                </p>

                {(edu.startDate || edu.endDate) && (
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                    {edu.startDate}
                    {edu.endDate && ` – ${edu.endDate}`}
                  </p>
                )}

                {edu.gpa && (
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
                    <span className="font-medium">Grade:</span> {edu.gpa}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
