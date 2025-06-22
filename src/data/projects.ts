import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Financial Dashboard",
    description: "A comprehensive financial dashboard for tracking investments, expenses, and generating reports with real-time data visualization and advanced analytics.",
    image: "https://images.pexels.com/photos/7567449/pexels-photo-7567449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "D3.js", "Chart.js", "JWT"],
    githubLink: "https://github.com/kamalkiranpolisetty/financial-dashboard",
    liveLink: "https://financial-dashboard-demo.com",
    featured: true,
    category: "web",
    status: "completed"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, user authentication, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "AWS S3", "Redis"],
    githubLink: "https://github.com/kamalkiranpolisetty/ecommerce-platform",
    featured: true,
    category: "web",
    status: "completed"
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description: "A comprehensive system for managing patient records, appointments, medical histories, and healthcare provider workflows with HIPAA compliance.",
    image: "https://images.pexels.com/photos/3846024/pexels-photo-3846024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes"],
    liveLink: "https://healthcare-system-demo.com",
    featured: true,
    category: "web",
    status: "completed"
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration, progress tracking, and advanced project management features.",
    image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React", "Redux", "Firebase", "Material UI", "WebSocket", "PWA"],
    githubLink: "https://github.com/kamalkiranpolisetty/task-manager",
    liveLink: "https://task-manager-demo.com",
    featured: false,
    category: "web",
    status: "completed"
  },
  {
    id: 5,
    title: "Weather Forecast Application",
    description: "A weather forecast application providing real-time weather data, forecasts, weather maps, and alerts for locations worldwide with beautiful visualizations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "Express", "OpenWeather API", "Chart.js", "Mapbox", "PWA"],
    githubLink: "https://github.com/kamalkiranpolisetty/weather-app",
    featured: false,
    category: "web",
    status: "completed"
  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    description: "An analytics platform for tracking social media performance across multiple platforms with customizable reports, sentiment analysis, and competitor insights.",
    image: "https://images.pexels.com/photos/7163665/pexels-photo-7163665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "Flask", "PostgreSQL", "Redis", "Twitter API", "Facebook Graph API", "ML"],
    githubLink: "https://github.com/kamalkiranpolisetty/social-analytics",
    liveLink: "https://social-analytics-demo.com",
    featured: false,
    category: "web",
    status: "completed"
  },
  {
    id: 7,
    title: "Real Estate Platform",
    description: "A modern real estate platform with property listings, virtual tours, mortgage calculator, and advanced search filters with map integration.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Mapbox", "Stripe", "AWS"],
    githubLink: "https://github.com/kamalkiranpolisetty/real-estate-platform",
    featured: false,
    category: "web",
    status: "in-progress"
  },
  {
    id: 8,
    title: "Learning Management System",
    description: "An educational platform with course management, video streaming, quizzes, progress tracking, and interactive learning tools for online education.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3", "Cloudfront", "Zoom SDK"],
    githubLink: "https://github.com/kamalkiranpolisetty/lms-platform",
    featured: false,
    category: "web",
    status: "in-progress"
  }
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};