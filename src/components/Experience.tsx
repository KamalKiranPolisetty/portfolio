import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';
import { ANIMATION_VARIANTS } from '../config/constants';
import { platformLogos } from "../data/logoMap";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">

        {/* TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-12"
        >
          <motion.h2
            custom={0}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"
          >
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </motion.h2>

          <motion.div
            custom={1}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="w-16 md:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 md:mb-8"
          />
        </motion.div>

        {/* TIMELINE */}
        <div className="timeline-container max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              custom={index}
              variants={ANIMATION_VARIANTS.fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="timeline-item group"
            >
              <div className="timeline-dot group-hover:scale-125 transition-transform"></div>

              <div
                className="
                  bg-white dark:bg-gray-900 
                  rounded-xl p-4 md:p-6 
                  shadow-sm border border-gray-100 dark:border-gray-700 
                  transition-all 
                  hover:shadow-md hover:shadow-gray-300 
                  dark:hover:shadow-gray-600/40
                "
              >
                {/* HEADER ROW: LEFT = title + company, RIGHT = date + location */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4">

                  {/* LEFT SIDE: LOGO + TITLE + COMPANY NAME */}
                  <div className="flex items-center gap-3 mb-2 md:mb-0">

                    {/* LOGO */}
                    {platformLogos[exp.company] ? (
                      <img
                        src={platformLogos[exp.company]}
                        alt={exp.company}
                        className="h-8 w-8 md:h-10 md:w-10 object-contain rounded-sm flex-shrink-0"
                      />
                    ) : (
                      <div className="h-8 w-8 md:h-10 md:w-10 rounded bg-gray-300 dark:bg-gray-700" />
                    )}

                    {/* TITLE + COMPANY TOGETHER */}
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base -mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                  </div>

                  {/* RIGHT SIDE: DATE + LOCATION */}
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span>{exp.date}</span>

                    {exp.location && (
                      <>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                {/* TECHNOLOGIES */}
                {exp.technologies?.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="
                            px-2 py-1 text-xs font-medium 
                            bg-blue-100 dark:bg-blue-900/30 
                            text-blue-800 dark:text-blue-300 
                            rounded transition-colors 
                            hover:bg-blue-200 dark:hover:bg-blue-900/50
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
