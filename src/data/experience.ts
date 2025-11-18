import { Experience } from "../types";

// Work Experience Only
export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Associate Software Engineer",
    company: "Capgemini",
    date: "Jun 2022 – Jul 2023",
    location: "Bangalore, India",
    description: [
      "Developed and optimized internal management system for Nokia using Spring Boot, Angular, and MySQL.",
      "Implemented JWT authentication and role-based authorization improving security and API integrity.",
      "Optimized backend APIs using caching, pagination, and lazy loading resulting in 35% faster response times.",
      "Built Angular components for dashboards and real-time visualization integrated with Spring Boot APIs.",
      "Contributed to CI/CD using Git, Maven, Docker, Jenkins enabling rapid automated deployments.",
      "Collaborated in Agile sprints improving delivery speed and code quality by 25%."
    ],
    technologies: [
      "Java", "Spring Boot", "Spring MVC", "Hibernate",
      "Spring Security", "JWT", "REST APIs",
      "MySQL", "MongoDB", "Angular",
      "Docker", "Jenkins", "Git"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Software Intern",
    company: "Capgemini",
    date: "Feb 2022 – Apr 2022",
    location: "Bangalore, India",
    description: [
      "Created Java-based integration workflows and REST APIs.",
      "Developed MuleSoft-based API flows using DataWeave for transformations.",
      "Configured CloudHub APIs with OAuth2 & rate-limiting security policies.",
      "Improved workflow efficiency by 60% through optimized integrations.",
      "Performed debugging, testing, and documentation for Java/Mule services."
    ],
    technologies: [
      "Java", "Spring Boot", "MuleSoft",
      "CloudHub", "DataWeave",
      "OAuth2", "REST APIs",
      "Git", "Maven"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Web Developer Intern",
    company: "Cureeya",
    date: "Jun 2021 – Sep 2021",
    location: "Bangalore, India",
    description: [
      "Developed patient dashboards and scheduling features using React.",
      "Built Java backend services for authentication and secure data access.",
      "Improved rendering performance by 30% with React optimizations.",
      "Integrated APIs ensuring HIPAA-compliant data handling.",
      "Fixed UI bugs and enhanced dashboard stability reducing issues by 40%."
    ],
    technologies: [
      "React", "JavaScript", "Java",
      "Spring Boot", "REST APIs",
      "MySQL", "CSS", "Postman"
    ]
  }
];

// Helper function to convert "Jun 2022 – Jul 2023" → dates
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
  return parseFloat(years.toFixed(1)); // round to 1 decimal (e.g., 2.1 yrs)
};
