import { Experience } from "../types";

// Work Experience Only
export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "AI/Backend Engineer",
    company: "KonfigAI",
    date: "Aug 2025 – Present",
    location: "Charlotte, NC",
    description: [
      "Architected konfigai-agent, a multi-step AI agent orchestration engine integrating Claude API, dynamic function calling, and configurable workflow routing for LLM-driven automation.",
      "Designed konfigai-mcp, a Model Context Protocol server exposing 15+ structured platform tools to AI agents, enabling programmatic interaction with KonfigAI's data resources and application config.",
      "Built a RAG-powered conversational assistant using Python, LangChain, and LangGraph, implementing document ingestion pipelines, vector embeddings, and semantic retrieval for context-aware responses.",
      "Contributed to DevLoop, an AI-powered developer automation platform using LLM workflows to automate code review, iterative testing, and development feedback cycles.",
      "Led backend engineering for 9 Spring Boot microservices, driving framework migrations, Gradle upgrades, and dependency alignment to improve build stability and cross-service compatibility.",
      "Achieved ~20% faster startup times through lazy initialization, Spring Context Indexer, Jackson Blackbird, and JDK 21 JVM tuning, and reduced MongoDB query latency via optimized aggregations and projections.",
      "Resolved production-critical issues including DAST/SAST vulnerabilities, PDF generation failures, XML parsing errors, and data formatting defects, improving platform stability and debuggability."
    ],
    technologies: [
      "Java", "Spring Boot", "Python", "LangChain", "LangGraph",
      "Claude API", "MCP", "RAG", "MongoDB", "MySQL", "Redis",
      "JDK 21", "Virtual Threads", "Docker", "Kubernetes", "Jenkins", "AWS"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer",
    company: "Nokia",
    date: "May 2024 – Jul 2025",
    location: "Raleigh, NC",
    description: [
      "Owned the leave and absence management module end to end, building APIs for request submission, manager approval workflows, balance tracking, and audit history with role-based access control.",
      "Designed and developed RESTful APIs using Spring Boot and Spring MVC for role-based dashboards, user management, and enterprise HR workflows.",
      "Implemented secure authentication and authorization using Spring Security and JWT, enabling stateless token-based access with role-based permissions across HR, manager, and employee roles.",
      "Optimized database queries using Hibernate and Spring Data JPA, reducing average API response time by 35% through indexing strategies, query tuning, and pagination.",
      "Built data access layers with MySQL and MongoDB, implementing caching strategies and projections to handle large datasets and concurrent user loads.",
      "Integrated backend APIs with React frontend, designing clear API contracts that supported centralized state management and protected route requirements.",
      "Built CI/CD pipelines using Jenkins, Docker, and Git to ensure consistent deployments and system reliability."
    ],
    technologies: [
      "Java", "Spring Boot", "Spring Security", "Spring Data JPA",
      "Hibernate", "JWT", "REST APIs", "MySQL", "MongoDB",
      "Maven", "Docker", "Jenkins", "Git", "React.js"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Software Developer",
    company: "Capgemini",
    date: "Oct 2019 – Aug 2023",
    location: "Bangalore, India",
    description: [
      "Built MuleSoft integration flows connecting CRM, order management, and billing systems using DataWeave to transform XML, JSON, and CSV payloads, automating workflows across 5+ interconnected systems and reducing manual data processing by 60%.",
      "Developed and maintained Spring Boot backend services exposing RESTful APIs with request validation, error handling, and paginated responses across multiple enterprise modules.",
      "Implemented OAuth2-based authentication for secure API communication, enforcing access control across interconnected platforms.",
      "Deployed and managed APIs on CloudHub, configuring rate limiting, IP whitelisting, and security policies for controlled production API access.",
      "Built React components for dashboards, forms, and real-time data views, integrating APIs and improving responsiveness through optimized state management and component reuse.",
      "Optimized database schemas, stored procedures, and query execution, reducing query time by 15% and improving data consistency across systems.",
      "Collaborated with frontend teams and business analysts to align API contracts and translate integration requirements into technical specifications."
    ],
    technologies: [
      "Java", "Spring Boot", "REST APIs", "MuleSoft", "DataWeave",
      "CloudHub", "OAuth2", "React", "MySQL", "JSON", "XML",
      "Maven", "Git", "Postman", "Agile"
    ]
  },
  {
    id: 4,
    type: "work",
    title: "Web Developer",
    company: "Cureeya",
    date: "Jun 2018 – Sep 2019",
    location: "Bangalore, India",
    description: [
      "Built appointment scheduling backend with real-time availability checks, conflict validation, and HIPAA-compliant data handling, integrating securely with patient records.",
      "Designed RESTful APIs for secure healthcare data management with JWT authentication and end-to-end encryption for HIPAA-compliant data transmission.",
      "Developed React components using Hooks for interactive patient dashboards and appointment scheduling interfaces.",
      "Implemented asynchronous API calls with error handling and retry mechanisms, ensuring smooth user experience under high load.",
      "Optimized full-stack performance through React rendering patterns (memoization, lazy loading) and backend query optimization, reducing page load times by 30% and improving TTI by 40%.",
      "Built secure authentication with Spring Security and role-based access control, ensuring patient data protection and regulatory compliance (HIPAA, GDPR).",
      "Established testing practices using JUnit and Jest, achieving 80%+ backend and 70%+ frontend coverage, reducing production bugs by 60%."
    ],
    technologies: [
      "Java", "Spring Boot", "Spring Security", "REST APIs",
      "React", "JavaScript", "Hooks", "MySQL", "JWT",
      "JUnit", "Jest", "Git", "Postman"
    ]
  }
];

// Helper function to convert "Jun 2022 – Jul 2023" to dates.
const parseDateRange = (dateRange: string): { start: Date; end: Date } => {
  const [startStr, endStr] = dateRange.split("–").map(str => str.trim());

  const start = new Date(startStr);
  const end = endStr === "Present" ? new Date() : new Date(endStr);

  return { start, end };
};

// Calculate total experience in years (with decimals)
export const getTotalWorkExperience = (): number => {
  let totalMonths = 0;

  experiences.forEach(exp => {
    const { start, end } = parseDateRange(exp.date);

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    totalMonths += months;
  });

  const years = totalMonths / 12;
  return parseFloat(years.toFixed(1));
};
