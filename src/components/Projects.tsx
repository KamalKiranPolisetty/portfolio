import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FileCode, ArrowRight, Filter } from 'lucide-react';
import { projects, getFeaturedProjects } from '../data/projects';
import { trackProjectClick } from '../utils/analytics';
import { ANIMATION_VARIANTS } from '../config/constants';
import LazyImage from './LazyImage';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'web' | 'mobile'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    switch (filter) {
      case 'featured':
        return getFeaturedProjects();
      case 'web':
        return projects.filter(project => project.category === 'web');
      case 'mobile':
        return projects.filter(project => project.category === 'mobile');
      default:
        return projects;
    }
  }, [filter]);

  const handleProjectClick = (projectName: string, type: 'github' | 'live') => {
    trackProjectClick(projectName, type);
  };

  const filterOptions = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'featured', label: 'Featured', count: getFeaturedProjects().length },
    { value: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { value: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </motion.h2>
          <motion.div
            custom={1}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="w-16 md:w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6 md:mb-8"
          ></motion.div>
          <motion.p
            custom={2}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4"
          >
            Here are some of my recent projects that demonstrate my technical skills and problem-solving abilities.
          </motion.p>

          {/* Filter Controls */}
          <motion.div
            custom={3}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 md:mb-8"
          >
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg"
            >
              <Filter className="h-4 w-4" />
              Filter Projects
            </button>

            {/* Desktop Filters */}
            <div className="hidden sm:flex gap-3 md:gap-4">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFilter(option.value as any)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all text-sm md:text-base font-medium ${
                    filter === option.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {option.label} ({option.count})
                </button>
              ))}
            </div>

            {/* Mobile Filter Dropdown */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="sm:hidden w-full max-w-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-2"
                >
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilter(option.value as any);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        filter === option.value
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {option.label} ({option.count})
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="project-card relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900 h-auto md:h-[480px] flex flex-col group"
              >
                {/* Project Image */}
                <div className="h-48 md:h-52 overflow-hidden flex-shrink-0 relative">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : project.status === 'in-progress'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                      }`}>
                        {project.status === 'in-progress' ? 'In Progress' : 
                         project.status === 'completed' ? 'Completed' : 'Planned'}
                      </span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-5 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4 line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleProjectClick(project.title, 'github')}
                          className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleProjectClick(project.title, 'live')}
                          className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium text-sm transition-colors group">
                      <span className="mr-1">View Details</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for the selected filter.
            </p>
          </motion.div>
        )}

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <a
            href="https://github.com/kamalkiranpolisetty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm md:text-base transition-colors group"
          >
            <FileCode className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            View more projects on GitHub
            <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;