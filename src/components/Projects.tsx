/* FULL PROJECTS COMPONENT — NO TAG EXPANSION, STYLES UNCHANGED */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FileCode, Filter, X } from 'lucide-react';
import { projects, getFeaturedProjects } from '../data/projects';
import { trackProjectClick } from '../utils/analytics';
import { ANIMATION_VARIANTS, APP_CONFIG } from '../config/constants';
import LazyImage from './LazyImage';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'web' | 'mobile'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const [expandedDesc, setExpandedDesc] = useState<Record<number, boolean>>({});

  const toggleDesc = (id: number) => {
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

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

  const handleFilterSelect = (value: 'all' | 'featured' | 'web' | 'mobile') => {
    setFilter(value);
    setShowFilters(false);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
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

          {/* FILTER BUTTONS */}
          <motion.div
            custom={3}
            variants={ANIMATION_VARIANTS.fadeIn}
            className="flex flex-col items-center justify-center gap-4 mb-6 md:mb-8"
          >
            {/* Mobile Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              {showFilters ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
              {showFilters ? 'Close Filters' : 'Filter Projects'}
            </button>

            {/* Mobile Filter Dropdown */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="sm:hidden w-full max-w-sm flex flex-col gap-2 px-4"
                >
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterSelect(option.value as any)}
                      className={`w-full px-4 py-3 rounded-lg transition-all text-sm font-medium ${
                        filter === option.value
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      {option.label} ({option.count})
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Filter Buttons */}
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
          </motion.div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${filter}-${project.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="
                  project-card relative overflow-hidden rounded-xl shadow-lg 
                  bg-white dark:bg-gray-900 
                  h-auto flex flex-col group
                "
              >
                {/* IMAGE */}
                <div className="h-48 md:h-52 overflow-hidden flex-shrink-0 relative">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 md:p-5 flex-1 flex flex-col">

                  {/* TITLE */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 line-clamp-2 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <div className="mb-4">
                    <p
                      className={`text-gray-700 dark:text-gray-300 text-sm md:text-base transition-all duration-300 ${
                        expandedDesc[project.id] ? '' : 'line-clamp-2'
                      }`}
                    >
                      {project.description}
                    </p>

                    {project.description.length > 110 && (
                      <button
                        onClick={() => toggleDesc(project.id)}
                        className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-sm mt-1 transition-colors"
                      >
                        {expandedDesc[project.id] ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  {/* TECHNOLOGIES (No expanding) */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="
                          px-2 py-1 text-xs font-medium 
                          bg-blue-100 dark:bg-blue-900/30 
                          text-blue-800 dark:text-blue-300 
                          rounded 
                          transition-colors
                          hover:bg-blue-200 dark:hover:bg-blue-900/50
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ICONS */}
                  <div className="flex items-center gap-4 mt-auto">
                    {project.githubLink && (
                      <a
                        onClick={() => handleProjectClick(project.title, 'github')}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        onClick={() => handleProjectClick(project.title, 'live')}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FOOTER LINK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <a
            href={APP_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm md:text-base transition-colors group"
          >
            <FileCode className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            View more projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
