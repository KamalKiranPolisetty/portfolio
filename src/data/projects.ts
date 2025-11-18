import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Research Agent",
    description:
      "Engineered an AI-powered research assistant using Spring Boot, Spring AI, LangChain, LangGraph, and RAG pipelines for automated web search, article summarization, and intelligent data retrieval. Built a real-time query interface with dynamic visualization and NLP workflows for context-aware analysis.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: [
      "Spring Boot",
      "Spring AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "HuggingFace",
      "NLP",
      "React"
    ],
    githubLink: "", // add your repo if exists
    liveLink: "",
    featured: true,
    category: "web",
    status: "completed",
  },

  {
    id: 2,
    title: "LinuxOps – Linux Automation Toolkit",
    description:
      "Developed a Linux automation toolkit to monitor server health, manage log files, validate database performance, and reduce manual monitoring by 50%. Implemented reporting, alerting, and recovery automation for distributed Linux infrastructure with improved SQL query optimization.",
    image:
      "https://images.pexels.com/photos/5380675/pexels-photo-5380675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: [
      "Linux",
      "Bash",
      "Python",
      "PostgreSQL",
      "Automation",
      "Shell Scripting"
    ],
    githubLink: "", // optional
    liveLink: "",
    featured: true,
    category: "web",
    status: "completed",
  },

  {
    id: 3,
    title: "TrailLink – Real-Time Trekking App",
    description:
      "A cross-platform mobile app for trekking enthusiasts with real-time location sharing, SOS alerts, weather data, and interactive route maps. Built with secure authentication, WebSockets, and optimized offline support.",
    image:
      "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "JWT",
      "Open-Meteo API"
    ],
    githubLink: "",
    liveLink: "",
    featured: false,
    category: "mobile",
    status: "completed",
  },
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