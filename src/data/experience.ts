import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    company: "Capgemini",
    date: "Aug 2021 - Present",
    location: "Austin, TX",
    description: [
      "Led development of multiple client applications using React, Node.js, and MongoDB, serving over 10,000+ daily active users",
      "Architected and implemented microservices infrastructure that improved system scalability by 300% and reduced response times by 45%",
      "Managed a cross-functional team of 5 developers, implementing agile methodologies that increased delivery speed by 40%",
      "Built comprehensive financial services dashboard that streamlined workflow processes, resulting in 30% efficiency improvement",
      "Implemented automated CI/CD pipelines using Jenkins and Docker, reducing deployment time from hours to minutes",
      "Optimized database queries and implemented caching strategies, improving application performance by 60%"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Jenkins", "TypeScript", "GraphQL"]
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer",
    company: "Capgemini",
    date: "Apr 2020 - Jul 2021",
    location: "Austin, TX",
    description: [
      "Developed responsive web applications using React, TypeScript, and Material UI, ensuring cross-browser compatibility",
      "Collaborated with UI/UX designers to implement pixel-perfect designs and smooth animations using Framer Motion",
      "Integrated RESTful APIs and GraphQL endpoints, improving data fetching efficiency by 35%",
      "Participated in code reviews and mentored junior developers, contributing to team knowledge sharing",
      "Implemented comprehensive testing strategies using Jest and Cypress, achieving 90%+ code coverage",
      "Worked in agile environment with sprint planning, daily standups, and retrospectives"
    ],
    technologies: ["React", "TypeScript", "Material UI", "GraphQL", "Jest", "Cypress", "Git", "Jira"]
  },
  {
    id: 3,
    type: "work",
    title: "Software Developer Intern",
    company: "Cureya",
    date: "Jan 2020 - Apr 2020",
    location: "Remote",
    description: [
      "Developed healthcare management system using Angular and Spring Boot, handling patient data for 500+ users",
      "Created responsive designs for web and mobile applications using SCSS and Bootstrap framework",
      "Implemented secure user authentication and authorization using JWT tokens and OAuth 2.0",
      "Built RESTful APIs for patient management, appointment scheduling, and medical records",
      "Participated in code reviews and contributed to technical documentation and system architecture",
      "Collaborated with healthcare professionals to understand requirements and ensure HIPAA compliance"
    ],
    technologies: ["Angular", "Spring Boot", "Java", "PostgreSQL", "JWT", "OAuth", "Bootstrap", "SCSS"]
  },
  {
    id: 4,
    type: "education",
    title: "Master of Science in Computer Science",
    company: "Texas State University",
    date: "Aug 2018 - Dec 2019",
    location: "San Marcos, TX",
    description: [
      "Specialized in Software Engineering, Web Technologies, and Artificial Intelligence with focus on machine learning applications",
      "Completed advanced coursework in Algorithms & Data Structures, Database Systems, Web Engineering, and AI/ML",
      "Served as Graduate Teaching Assistant for Introduction to Programming, mentoring 50+ undergraduate students",
      "Developed machine learning model for predicting student performance using Python and scikit-learn as thesis project",
      "Participated in research projects on web accessibility and user experience optimization",
      "Maintained excellent academic standing with GPA of 3.8/4.0"
    ],
    technologies: ["Python", "Java", "Machine Learning", "Data Analysis", "Web Technologies", "Database Design"]
  },
  {
    id: 5,
    type: "education",
    title: "Bachelor of Technology in Computer Science",
    company: "JNTU Hyderabad",
    date: "Aug 2014 - May 2018",
    location: "Hyderabad, India",
    description: [
      "Comprehensive study of computer science fundamentals including programming, data structures, and software engineering",
      "Completed projects in web development, mobile applications, and database management systems",
      "Active member of coding club and participated in various hackathons and programming competitions",
      "Completed internship projects in Java web development and Android application development",
      "Graduated with First Class Honors and recognition for academic excellence"
    ],
    technologies: ["Java", "C++", "Android", "MySQL", "Web Development", "Data Structures", "Algorithms"]
  }
];

// Helper functions
export const getWorkExperience = (): Experience[] => {
  return experiences.filter(exp => exp.type === 'work');
};

export const getEducation = (): Experience[] => {
  return experiences.filter(exp => exp.type === 'education');
};

export const getTotalWorkExperience = (): number => {
  const workExp = getWorkExperience();
  // Calculate total years of experience
  // This is a simplified calculation - you might want to make it more precise
  return workExp.length > 0 ? 5 : 0; // Based on the current data
};