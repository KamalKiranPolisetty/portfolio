import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FileCode, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
}

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "A comprehensive financial dashboard for tracking investments, expenses, and generating reports with data visualization.",
      image: "https://images.pexels.com/photos/7567449/pexels-photo-7567449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "D3.js"],
      githubLink: "https://github.com/kamalkiranpolisetty/financial-dashboard",
      liveLink: "https://financial-dashboard-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and payment processing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API"],
      githubLink: "https://github.com/kamalkiranpolisetty/ecommerce-platform",
      featured: true
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "A comprehensive system for managing patient records, appointments, and medical histories for healthcare providers.",
      image: "https://images.pexels.com/photos/3846024/pexels-photo-3846024.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
      liveLink: "https://healthcare-system-demo.com",
      featured: true
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Redux", "Firebase", "Material UI"],
      githubLink: "https://github.com/kamalkiranpolisetty/task-manager",
      liveLink: "https://task-manager-demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Weather Forecast Application",
      description: "A weather forecast application providing real-time weather data and forecasts for locations worldwide.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "OpenWeather API", "Chart.js"],
      githubLink: "https://github.com/kamalkiranpolisetty/weather-app",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "An analytics platform for tracking social media performance across multiple platforms with customizable reports.",
      image: "https://images.pexels.com/photos/7163665/pexels-photo-7163665.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "Redis", "Twitter API", "Facebook Graph API"],
      githubLink: "https://github.com/kamalkiranpolisetty/social-analytics",
      liveLink: "https://social-analytics-demo.com",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 md:mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4">
            Here are some of my recent projects that demonstrate my technical skills and problem-solving abilities.
          </p>

          <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base font-medium ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base font-medium ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900 h-auto md:h-[420px] flex flex-col"
              >
                <div className="h-48 md:h-52 overflow-hidden flex-shrink-0">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:p-5 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium text-sm transition-colors">
                      <span className="mr-1">View Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href="https://github.com/kamalkiranpolisetty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm md:text-base transition-colors"
          >
            <FileCode className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            View more projects on GitHub
            <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;