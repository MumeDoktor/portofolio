// Everything personal on the site lives in this file. Edit freely.

export const profile = {
  name: "Amar Muminović",
  shortName: "Amar",
  role: "Software Engineer · Mobile, Web & AI",
  age: 20,
  startedCodingAt: 16,
  yearsExperience: 3,
  location: "Sarajevo, Bosnia and Herzegovina",
  availability: "Open to remote projects",
  tagline:
    "20-year-old software engineer with 3 years of professional experience. I ship Flutter apps, full-stack web platforms and AI agents that do real work.",
  about: [
    "I wrote my first lines of code at 16. Four years later I build mobile apps, web platforms and AI agents, and I've shipped my own app to Google Play.",
    "I'm based in Sarajevo and in my first year at the Faculty of Information Technologies at Džemal Bijedić University of Mostar. I started professionally with a four-month internship at P23, where a senior developer mentored us through React, Git and Flutter. I then joined P23's team building Corner Table, a hospitality social app for founders in New York, and built the registration flow, profiles, chat and group messaging, venues and cities in its Flutter MVP on Firebase. After that, still at P23, I worked on GiBud, a rebuild of a Norwegian auction marketplace: I built the Flutter mobile app on my own, plus API endpoints, checkout and seller tools on the Next.js platform.",
    "Those jobs taught me how production apps actually work: real-time data on Firestore, push notifications with FCM, typed APIs and database transactions.",
    "Outside of work I build AI products end to end, like FitMind AI, a fitness coach app I published on Google Play on my own. What I care about most is making AI dependable, with typed contracts between the model and the rest of the system, deterministic code wherever a model isn't needed, and feedback loops so an agent checks its own output instead of being trusted blindly.",
  ],
  email: "amarmuminovic2712@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amar-muminovi%C4%87-ab91b6353/" },
    { label: "GitHub", href: "https://github.com/MumeDoktor" },
  ],
  // TODO: drop a PDF at public/cv.pdf and set this to "/cv.pdf" to show a download button.
  cvUrl: "",
};

export const education: { school: string; detail: string; period: string }[] = [
  {
    school: "Fakultet informacijskih tehnologija, Univerzitet \"Džemal Bijedić\" u Mostaru",
    detail: "Faculty of Information Technologies, Džemal Bijedić University of Mostar.",
    period: "1st year · current",
  },
  {
    school: "Mješovita srednja škola Gornji Vakuf",
    detail: "Graduation project: Biblioteka, a school library system.",
    period: "Graduated 2025",
  },
];

export const languages: { name: string; level: string }[] = [
  { name: "Bosnian", level: "Native" },
  { name: "English", level: "Fluent" },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
  stack: string[];
  // Optional, e.g. "Remote".
  location?: string;
  // Project pages this job produced, e.g. { slug: "corner-table", label: "Corner Table" }.
  projects?: { slug: string; label: string }[];
};

// Listed by start date, oldest first.
export const experience: Experience[] = [
  {
    company: "P23",
    role: "Software Development Intern",
    start: "Jan 2023",
    end: "May 2023",
    summary:
      "My first professional role: a four-month internship led by a senior developer, where I went from coding on my own to building inside a real team.",
    points: [
      "Worked through courses together as a group with a senior developer, who reviewed our code and explained how to structure it.",
      "Built small games as practice projects, including tic-tac-toe (XO) and similar games, to learn state, game logic and UI.",
      "Learned React for building web interfaces with components, state and hooks.",
      "Learned Git properly: branches, commits, pull requests and code review.",
      "Learned Flutter, which led straight into my first job.",
    ],
    stack: ["React", "Git", "Flutter"],
  },
  {
    company: "P23",
    role: "Junior Software Engineer",
    start: "Jun 2023",
    end: "Jan 2025",
    summary:
      "Hired straight after the internship to build client products. I worked on Corner Table, a hospitality social app for founders in New York, delivered as a Flutter MVP on Firebase.",
    points: [
      "Built the registration flow together with a colleague, plus the profile and edit-profile screens.",
      "Built the in-app chat from scratch on Firestore, with real-time messages, group chats and role-aware replies so only staff with permission answer for a venue.",
      "Built the venues and cities sections, with searchable, sortable lists and detail pages.",
      "Built push notifications with Firebase Cloud Messaging, including device token handling and several notification types, each opening the right screen.",
      "Worked in a product team: designs from a designer, code review, and shipping on client timelines.",
    ],
    stack: ["Flutter", "Dart", "BLoC", "Firebase", "Firestore", "Firebase Cloud Messaging"],
    projects: [{ slug: "corner-table", label: "Corner Table" }],
  },
  {
    company: "P23",
    role: "Team Lead",
    start: "Jan 2025",
    end: "Jan 2026",
    summary:
      "Led the development of GiBud, a commercial auction and e-commerce platform for the Norwegian market, as Mobile Lead and Web Team Lead.",
    points: [
      "Sole developer of the Flutter mobile app: architecture, state management with BLoC, performance and user experience.",
      "Designed and implemented backend systems with Next.js API routes, Prisma and PostgreSQL, serving both the mobile app and the website.",
      "Built real-time features: live auctions, bidding, chat and notifications over Ably.",
      "Implemented authentication, role-based access control and secure data flows across the platform.",
      "Contributed to system architecture, database design and deployment workflows.",
    ],
    stack: ["Flutter", "BLoC", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Ably", "Cloudflare R2"],
    projects: [{ slug: "gibud", label: "GiBud" }],
  },
  {
    company: "CreditGenius",
    role: "Full-Stack Developer",
    start: "Jan 2025",
    end: "May 2026",
    location: "Remote",
    summary:
      "Backend and frontend work on a financial platform: credit reports, subscriptions, billing and micro-loans, built on ASP.NET Core with SQL Server and AWS.",
    points: [
      "Built and maintained backend services with ASP.NET Core, Entity Framework and SQL Server.",
      "Designed and optimised database schemas, queries and stored procedures.",
      "Implemented business logic, REST API endpoints and payment and subscription workflows in production, including automatic re-collection of failed micro-loan repayments.",
      "Worked with senior engineers on database design, architecture decisions and production deployments.",
      "Built Angular frontend features and internal tools on top of those backend services.",
      "Implemented file storage and retrieval with AWS S3, PDF generation for reports and documents, and transactional email with Amazon SES.",
    ],
    stack: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Angular", "AWS S3", "Amazon SES"],
    projects: [{ slug: "creditgenius-micro-loans", label: "CreditGenius" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Dart", "Python", "SQL"],
  },
  {
    group: "Mobile",
    items: ["Flutter", "BLoC", "go_router", "Firestore", "Real-time chat", "Firebase Cloud Messaging", "Push notifications"],
  },
  {
    group: "Web",
    items: ["React 19", "Next.js (App Router)", "Tailwind CSS", "shadcn/ui", "MUI", "Vite"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Express", "FastAPI", "C# / .NET", "Prisma", "Drizzle", "PostgreSQL", "SQL Server", "SQLite", "MySQL", "MongoDB"],
  },
  {
    group: "AI engineering",
    items: ["Claude API", "Tool use & agents", "Structured output (Zod)", "Groq / Whisper", "Vision feedback loops"],
  },
  {
    group: "Tooling",
    items: ["Git", "Docker", "Vercel", "ffmpeg", "Remotion"],
  },
];
