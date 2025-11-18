export interface Certificate {
  id: number;
  title: string;
  platform: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certificate[] = [
  {
    id: 1,
    title: "Web Development Masterclass",
    platform: "Udemy",
    date: "Nov 2025",
    credentialUrl:
      "https://ude.my/UC-8b558f33-6df5-4647-a5f3-887af073a502",
  },
  {
    id: 2,
    title: "Docker Foundations Professional Certificate",
    platform: "LinkedInLearning",
    date: "May 2025",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/a20472cb2af7c2a39250887d330d16991ba40f37f5406055074be95a56f6e3b8",
  },
  {
    id: 3,
    title: "The Complete 2023 Web Development Bootcamp",
    platform: "Udemy",
    date: "Jul 2023",
    credentialUrl:
      "https://ude.my/UC-742f1c9e-a31a-4796-a375-d7c1b9d9fc67",
  },
  {
    id: 4,
    title: "Machine Learning with AI using Python",
    platform: "Quantum Learnings",
    date: "Aug 2021",
  },
  {
    id: 5,
    title: "Introduction to Artificial Intelligence (AI)",
    platform: "IBM",
    date: "Sep 2020",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/GUZX6LKYDH8L",
  },
];
