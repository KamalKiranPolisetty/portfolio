import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      "React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript (ES6+)",
      "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS", "Material UI", "Styled Components",
      "Redux", "Zustand", "React Query", "Framer Motion", "Three.js"
    ]
  },
  {
    name: "Backend Development",
    skills: [
      "Node.js", "Express.js", "Nest.js", "Java", "Spring Boot", "Python", "Django",
      "Flask", "PHP", "Laravel", "GraphQL", "REST APIs", "Microservices",
      "WebSocket", "Socket.io", "JWT Authentication", "OAuth 2.0"
    ]
  },
  {
    name: "Database & Storage",
    skills: [
      "MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis", "Elasticsearch",
      "Firebase Firestore", "AWS DynamoDB", "Prisma", "Mongoose", "Sequelize",
      "Database Design", "Query Optimization", "Data Modeling"
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda, RDS)", "Google Cloud Platform", "Microsoft Azure",
      "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI/CD",
      "Terraform", "Nginx", "Apache", "Linux/Unix", "Bash Scripting"
    ]
  },
  {
    name: "Testing & Quality Assurance",
    skills: [
      "Jest", "React Testing Library", "Cypress", "Playwright", "Mocha", "Chai",
      "Selenium", "Unit Testing", "Integration Testing", "E2E Testing",
      "Test-Driven Development (TDD)", "Behavior-Driven Development (BDD)"
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      "Git", "GitHub", "GitLab", "Bitbucket", "VS Code", "IntelliJ IDEA",
      "Postman", "Insomnia", "Figma", "Adobe XD", "Jira", "Confluence",
      "Slack", "Discord", "Notion", "Linear"
    ]
  },
  {
    name: "Mobile Development",
    skills: [
      "React Native", "Flutter", "Android (Java/Kotlin)", "iOS (Swift)",
      "Expo", "Progressive Web Apps (PWA)", "Responsive Design",
      "Mobile-First Development", "App Store Deployment"
    ]
  },
  {
    name: "Data & Analytics",
    skills: [
      "Python", "Pandas", "NumPy", "Matplotlib", "D3.js", "Chart.js",
      "Google Analytics", "Mixpanel", "Hotjar", "A/B Testing",
      "Data Visualization", "Statistical Analysis"
    ]
  }
];

// Helper functions
export const getAllSkills = (): string[] => {
  return skillCategories.reduce((acc, category) => {
    return [...acc, ...category.skills];
  }, [] as string[]);
};

export const getSkillsByCategory = (categoryName: string): string[] => {
  const category = skillCategories.find(cat => cat.name === categoryName);
  return category ? category.skills : [];
};

export const searchSkills = (query: string): string[] => {
  const allSkills = getAllSkills();
  return allSkills.filter(skill => 
    skill.toLowerCase().includes(query.toLowerCase())
  );
};

export const getTopSkills = (count: number = 10): string[] => {
  // Return most important/featured skills
  return [
    "React", "TypeScript", "Node.js", "JavaScript", "Python",
    "AWS", "MongoDB", "PostgreSQL", "Docker", "GraphQL"
  ].slice(0, count);
};