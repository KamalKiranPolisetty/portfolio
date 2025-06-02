import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  const experiences = [
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Capgemini",
      date: "Aug 2021 - Present",
      description: [
        "Developed and maintained multiple client applications using React, Node.js, and MongoDB",
        "Led a team of 5 developers to deliver a financial services dashboard that improved workflow efficiency by 30%",
        "Implemented RESTful APIs and microservices architecture for scalable backend solutions",
        "Reduced application load time by 45% through optimizing frontend components and database queries"
      ]
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "Capgemini",
      date: "Apr 2020 - Jul 2021",
      description: [
        "Built interactive web interfaces using React, TypeScript and Material UI",
        "Collaborated with UI/UX designers to implement responsive designs and animations",
        "Worked with agile methodologies, participating in sprint planning and code reviews",
        "Integrated third-party APIs and services to enhance application functionality"
      ]
    },
    {
      type: "work",
      title: "Software Developer Intern",
      company: "Cureya",
      date: "Jan 2020 - Apr 2020",
      description: [
        "Developed a healthcare management system using Angular and Spring Boot",
        "Created responsive designs for web and mobile applications using SCSS and Bootstrap",
        "Implemented user authentication and authorization using JWT and OAuth 2.0",
        "Participated in code reviews and documentation of application architecture"
      ]
    },
    {
      type: "education",
      title: "Master of Science in Computer Science",
      company: "Texas State University",
      date: "Aug 2018 - Dec 2019",
      description: [
        "Coursework: Algorithms & Data Structures, Web Engineering, Database Systems, Artificial Intelligence",
        "Graduate Teaching Assistant for Introduction to Programming",
        "Developed a machine learning model for predicting student performance as part of thesis project",
        "GPA: 3.8/4.0"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <motion.h2
            custom={0}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </motion.h2>
          <motion.div
            custom={1}
            variants={fadeIn}
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="timeline-container max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="flex items-center mb-2">
                {exp.type === "work" ? (
                  <Briefcase className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <GraduationCap className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                )}
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <div className="flex items-center mb-3 text-gray-600 dark:text-gray-400">
                <span className="mr-4">{exp.company}</span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{exp.date}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;