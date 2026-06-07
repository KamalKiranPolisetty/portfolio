import { Project } from "../types";

export const projects: Project[] = [
  // 🌐 WEB PROJECTS
  {
    id: 1,
    title: "BugBattle: Multiplayer Debugging Game",
    description:
      "A competitive real-time multiplayer debugging game where players race to fix AI-injected bugs in code snippets. Features live multiplayer rooms, AI-powered bug generation, real-time spectators, and a global leaderboard.",
    image: "/bugbattle-background.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Monaco Editor",
      "Vite"
    ],
    githubLink: "https://github.com/KamalKiranPolisetty/BugBattle",
    liveLink: "",
    featured: true,
    category: "web",
    status: "in-progress",
  },

  {
    id: 2,
    title: "AI Research Agent",
    description:
      "Engineered an AI-powered research assistant using Spring Boot, Spring AI, LangChain, LangGraph, and RAG pipelines for automated web search, summarization, and knowledge synthesis. Includes a dynamic visualization interface and NLP workflows.",
    image: "/ai-research-background.jpg",
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
    githubLink: "https://github.com/KamalKiranPolisetty/AI-Research-Agent",
    liveLink: "",
    featured: true,
    category: "web",
    status: "completed",
  },

  {
    id: 3,
    title: "StudentLife360 : Campus Management Platform",
    description:
      "A full-stack web platform built for university students to manage textbooks, roommates, meal plans, transportation, and campus activities. Integrated payment system via Stripe and secure JWT authentication for a seamless student experience.",
    image: "/studentlife-background.jpg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Stripe API",
      "JWT Authentication",
      "AWS",
      "Docker"
    ],
    githubLink: "https://github.com/KamalKiranPolisetty/StudentLife360",
    liveLink: "",
    featured: false,
    category: "web",
    status: "completed",
  },

  {
    id: 4,
    title: "LinuxOps : Linux Automation Toolkit",
    description:
      "Built a Linux automation toolkit to monitor system health, manage logs, validate database performance, and automate recovery operations. Reduced manual monitoring by 50% using Bash and Python-based workflow automation.",
    image: "/linuxops-background.jpg",
    technologies: [
      "Linux",
      "Bash",
      "Python",
      "PostgreSQL",
      "Automation",
      "Shell Scripting"
    ],
    githubLink: "https://github.com/KamalKiranPolisetty/LinuxOps",
    liveLink: "",
    featured: false,
    category: "web",
    status: "completed",
  },

  {
    id: 5,
    title: "AirTransit : Air Quality & Transit Data Pipeline",
    description:
      "Developed an automated data pipeline using Apache Airflow to integrate real-time air quality (OpenAQ API) and public transit (GTFS) data into a PostgreSQL warehouse. Designed normalized schemas, automated ETL workflows, and deployed on Google Cloud Composer with monitoring and alerts.",
    image: "/airtransit-background.jpg",
    technologies: [
      "Apache Airflow",
      "PostgreSQL",
      "Google Cloud Composer",
      "Python",
      "SQL",
      "OpenAQ API",
      "GTFS",
      "ETL"
    ],
    githubLink: "https://github.com/KamalKiranPolisetty/AirTransit",
    liveLink: "",
    featured: false,
    category: "web",
    status: "completed",
  },

  {
    id: 6,
    title: "CTL Model Checker : Temporal Logic Verification Tool",
    description:
      "A standalone Java application for CTL (Computation Tree Logic) model validation. Enables users to verify properties of state transition systems using Kripke structures and CTL formulas through an intuitive GUI.",
    image: "/ctl-background.jpg",
    technologies: [
      "Java",
      "Swing",
      "Graph Theory",
      "Model Checking",
      "CTL",
      "Kripke Structures"
    ],
    githubLink: "https://github.com/KamalKiranPolisetty/CTL-Model-Checker",
    liveLink: "",
    featured: false,
    category: "web",
    status: "completed",
  },

  // 📱 MOBILE PROJECT
  {
    id: 7,
    title: "TrailLink : Real-Time Trekking App",
    description:
      "A cross-platform mobile app for trekkers with real-time location sharing, SOS alerts, weather data, and offline maps. Built using React Native and Node.js with WebSocket-based real-time communication.",
    image: "/traillink-background.jpg",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "WebSockets",
      "JWT",
      "Open-Meteo API"
    ],
    githubLink: "https://github.com/KamalKiranPolisetty/TrailLink",
    liveLink: "",
    featured: true,
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
