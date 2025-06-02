import { motion } from 'framer-motion';
import { Code, LucideServer, Palette, LineChart, Brain, Laptop } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const strengths = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "Building scalable applications from front to back with modern frameworks and tools."
    },
    {
      icon: <LucideServer className="h-6 w-6" />,
      title: "Backend Architecture",
      description: "Designing robust systems with focus on performance, security, and scalability."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive, responsive interfaces with attention to user experience."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Data Analysis",
      description: "Turning complex data into actionable insights with visualization tools."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Problem Solving",
      description: "Applying analytical thinking to develop efficient solutions to complex problems."
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Agile Methodology",
      description: "Implementing agile practices for iterative development and continuous improvement."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
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
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>
          <motion.div 
            custom={1} 
            variants={fadeIn}
            className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10 transform -rotate-3"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a passionate Full Stack Developer with 5+ years of experience building web applications 
                  and digital solutions. With a strong foundation in both front-end and back-end technologies,
                  I create seamless, user-centered experiences that solve real-world problems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I have a Master's degree in Computer Science from Texas State University, and I've worked with 
                  companies like Capgemini, helping them build and scale their digital products.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through technical blogs and community events.
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">My Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-md text-blue-600 dark:text-blue-400">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{strength.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{strength.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;