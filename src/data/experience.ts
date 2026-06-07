import { Experience } from "../types";

// Work Experience Only
export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Software Engineer Intern",
    company: "KonfigAI",
    date: "Aug 2025 – Present",
    location: "Charlotte, USA",
    description: [
      "Led backend development for Java Spring Boot microservices, contributing to Spring Boot 4 migration, Gradle upgrades, and dependency alignment across nine services.",
      "Optimized MongoDB-backed REST APIs by resolving complex aggregation and projection issues, improving query efficiency and reducing runtime errors.",
      "Improved startup and runtime performance using lazy initialization, Spring Context Indexer, Jackson Blackbird, JDK 21 JVM tuning, and connection optimization, achieving 15–20% faster startup times.",
      "Resolved production-critical issues and security findings across DAST and SAST vulnerabilities, PDF generation, XML parsing, and data formatting."
    ],
    technologies: [
      "Java", "Spring Boot 4", "MongoDB", "REST APIs",
      "Gradle", "JDK 21", "Microservices", "DAST", "SAST"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Associate Software Engineer",
    company: "Capgemini",
    date: "Jun 2022 – Jul 2023",
    location: "Bangalore, India",
    description: [
      "Developed and maintained backend services using Java, Spring Boot, and Hibernate, implementing JWT authentication and role-based authorization to secure APIs.",
      "Built and maintained React components for dashboards, forms, and real-time data views, integrating APIs and improving responsiveness through optimized state management and component reuse.",
      "Optimized API and application performance with caching, query optimization, and database indexing, reducing average response times by 35%.",
      "Managed CI/CD workflows with Git, Maven, and Docker while contributing to Agile sprints, reducing integration bugs by 25%."
    ],
    technologies: [
      "Java", "Spring Boot", "Spring MVC", "Hibernate",
      "Spring Security", "JWT", "REST APIs",
      "React", "Docker", "Maven", "Git"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Software Intern",
    company: "Capgemini",
    date: "Feb 2022 – Apr 2022",
    location: "Bangalore, India",
    description: [
      "Developed Java-based integration solutions with MuleSoft to connect enterprise databases and file systems, reducing manual data processing by 60%.",
      "Designed optimized database schemas, tables, and stored procedures that reduced query execution time by 15%.",
      "Created interactive React dashboards for payroll, tax deductions, and employee performance, increasing HR operational efficiency by 35%."
    ],
    technologies: [
      "Java", "MuleSoft", "React",
      "SQL", "Database Design", "Stored Procedures"
    ]
  },
  {
    id: 4,
    type: "work",
    title: "Web Development Intern",
    company: "Cureeya",
    date: "Jul 2021 – Sep 2021",
    location: "Bangalore, India",
    description: [
      "Developed responsive patient dashboards and appointment scheduling interfaces using React, hooks, and component state management.",
      "Engineered Java backend services for user authentication and data management, connecting the React frontend securely to healthcare databases.",
      "Improved page load times by 20% through efficient React rendering patterns and backend service optimization."
    ],
    technologies: [
      "React", "JavaScript", "Java",
      "Spring Boot", "REST APIs",
      "MySQL", "CSS", "Postman"
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
