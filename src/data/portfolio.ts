export const PORTFOLIO_DATA = {
  hero: {
    name: "Nikita Khvatov",
    title: "Full-stack Developer",
    tagline: "My goal is to write maintainable, clean and understandable code to process development was enjoyable and fast.",
  },
  socials: [
    { name: "GitHub", url: "#", icon: "github" },
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Email", url: "#", icon: "mail" },
    { name: "Telegram", url: "#", icon: "send" },
    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "Instagram", url: "#", icon: "instagram" },
  ],
  experience: [
    {
      id: 1,
      period: "2021-2022",
      company: "Circle",
      location: "FD Development Lab",
      role: "Frontend developer",
      tech: "JavaScript & Python",
    },
    {
      id: 2,
      period: "2017-2021",
      company: "Maclor",
      location: "FD Development Lab",
      role: "Frontend developer",
      tech: "JavaScript & Python",
    },
    {
      id: 3,
      period: "2014-2017",
      company: "Macup",
      location: "Business Up",
      role: "Full-stack developer",
      tech: "JavaScript & Python",
    },
    {
      id: 4,
      period: "2010-2014",
      company: "Maclup",
      location: "Business Up",
      role: "Full-stack developer",
      tech: "JavaScript & Python",
    },
  ],
  experienceTotal: "4 years 9 months",
  projects: [
    {
      id: 1,
      title: "Gosat",
      description: "A high-performance satellite tracking platform built for real-time data processing and visualization.",
      image: "project-1.png",
      tags: ["Golang", "TypeScript", "Vue", "PostgreSQL", "NestJs", "NuxtJs"],
      stats: { views: 1200, stars: 340, likes: 210 }
    },
    {
      id: 2,
      title: "Kana Master",
      description: "Interactive language learning application focused on mastering Japanese Kana with spaced repetition.",
      image: "project-2.png",
      tags: ["TypeScript", "Vue", "Redis"],
      stats: { views: 800, stars: 120, likes: 100 }
    },
    {
      id: 3,
      title: "Anime Sentry",
      description: "Automated media tracking and recommendation engine utilizing a custom graph database architecture.",
      image: "project-3.png",
      tags: ["TypeScript", "GraphQL", "PostgreSQL"],
      stats: { views: 540, stars: 100, likes: 85 }
    }
  ],
  articles: [
    {
      id: 1,
      title: "The simplest example is kafka + golang",
      description: "An in-depth guide to setting up your first event-driven architecture using Apache Kafka and Go, focusing on simplicity and performance.",
      image: "article-1.png",
      date: "Oct 12, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering React Server Components",
      description: "Exploring the paradigm shift in React 18 and how to effectively split your application between the server and the client.",
      image: "article-2.png",
      date: "Nov 04, 2023",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Database optimization techniques",
      description: "Practical strategies for indexing, query planning, and connection pooling to ensure your PostgreSQL database scales gracefully.",
      image: "article-3.png",
      date: "Dec 18, 2023",
      readTime: "12 min read"
    }
  ]
};
