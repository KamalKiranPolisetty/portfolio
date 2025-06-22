import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { ANIMATION_VARIANTS } from '../config/constants';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
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
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </motion.h2>
          <motion.div
            custom={1}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="w-16 md:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 md:mb-8"
          ></motion.div>
          <motion.p
            custom={2}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-4"
          >
            With extensive experience across various technologies, I specialize in building full-stack applications
            that deliver exceptional user experiences and robust performance.
          </motion.p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={categoryIndex}
              variants={ANIMATION_VARIANTS.fadeIn}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-gray-100">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    custom={skillIndex}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: (i) => ({
                        opacity: 1,
                        scale: 1,
                        transition: { 
                          delay: i * 0.03 + categoryIndex * 0.1, 
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      })
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeIn}
          custom={skillCategories.length}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-gray-900 dark:text-gray-100">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. I regularly explore new frameworks, 
              tools, and best practices to stay current with industry trends and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;