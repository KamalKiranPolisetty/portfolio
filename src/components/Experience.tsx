import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experience';
import { ANIMATION_VARIANTS } from '../config/constants';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
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
          ></motion.div>
        </motion.div>

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
              
              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="flex items-center mb-2">
                    {exp.type === "work" ? (
                      <Briefcase className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    ) : (
                      <GraduationCap className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    )}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                {/* Company and Date */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 md:mb-4 gap-2">
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
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

                {/* Description */}
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded transition-colors hover:bg-blue-200 dark:hover:bg-blue-900/50"
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

        {/* Experience Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeIn}
          custom={experiences.length}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-gray-100">
              5+ Years of Professional Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              From internships to senior roles, I've consistently delivered high-quality solutions while growing 
              my expertise across the full technology stack. I'm passionate about mentoring others and contributing 
              to team success through collaboration and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;