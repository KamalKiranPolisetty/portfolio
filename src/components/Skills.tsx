import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "SASS", "Material UI"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "Java", "Spring Boot", "Python", "Django", "Flask", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      name: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase", "Redis", "Elasticsearch"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Azure", "Google Cloud", "Linux", "Bash", "Jenkins", "Terraform"]
    },
    {
      name: "Testing & Quality",
      skills: ["Jest", "Cypress", "React Testing Library", "Mocha", "Chai", "TDD", "Unit Testing", "Integration Testing"]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <motion.h2
            custom={0}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </motion.h2>
          <motion.div
            custom={1}
            variants={fadeInUp}
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"
          ></motion.div>
          <motion.p
            custom={2}
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
          >
            With extensive experience across various technologies, I specialize in building full-stack applications
            that deliver exceptional user experiences and robust performance.
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={categoryIndex}
              variants={fadeInUp}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    custom={skillIndex}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: (i) => ({
                        opacity: 1,
                        scale: 1,
                        transition: { delay: i * 0.05 + categoryIndex * 0.2, duration: 0.3 }
                      })
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;