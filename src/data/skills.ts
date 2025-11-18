import { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      "React",
      "Angular",
      "React Native",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "React Query"
    ]
  },

  {
    name: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSocket",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Flask",
      "JWT Authentication",
      "OAuth 2.0"
    ]
  },

  {
    name: "Database & Storage",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "AWS DynamoDB",
      "Redis",
      "Elasticsearch",
      "Firebase Firestore",
      "Database Design",
      "Query Optimization",
      "Data Modeling"
    ]
  },

  {
    name: "AI, ML & Data Science",
    skills: [
      // AI frameworks
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Vector Stores",
      "Hugging Face Models",

      // Python data stack
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "Scikit-Learn",
      "PyTorch",
      "TensorFlow",
      "Keras",

      // ML concepts (cleanly grouped)
      "ML Pipelines",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "EDA (Exploratory Data Analysis)",

      // Algorithms (grouped)
      "Supervised Learning (Regression, Classification)",
      "Unsupervised Learning (Clustering)",
      "Deep Learning (Neural Networks, CNNs, RNNs)",

      // NLP & retrieval
      "NLP",
      "Semantic Search"
    ]
  },

  {
    name: "Testing & Quality Assurance",
    skills: [
      "JUnit",
      "Jest",
      "React Testing Library",
      "Mocha",
      "API Testing",
      "Integration Testing",
      "Unit Testing",
      "Test-Driven Development (TDD)",
      "Behavior-Driven Development (BDD)"
    ]
  },

  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda, RDS, API Gateway, Route 53)",
      "Google Cloud Platform",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "Linux",
      "Terraform",
      "Bash Scripting"
    ]
  },

  {
    name: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "Postman",
      "Swagger",
      "Maven",
      "Gradle",
      "Jira",
      "Confluence"
    ]
  }
];

// Helper functions remain unchanged…


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