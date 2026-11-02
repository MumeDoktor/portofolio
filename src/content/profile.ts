// Everything personal on the site lives in this file. Edit freely.

export const profile = {
  name: "Amar Muminović",
  shortName: "Amar",
  role: "Full-Stack, Mobile & AI Engineer",
  age: 20,
  startedCodingAt: 16,
  yearsExperience: 3,
  location: "Sarajevo, Bosnia and Herzegovina",
  availability: "Available now, full-time or part-time",
  tagline:
    "Full-stack and mobile engineer with three years of professional experience across Flutter, TypeScript/Next.js and .NET. Now at Zora AI, working on AWS, server-side rendering and an MCP server that lets Claude manage a real-estate catalogue. I also built and published FitMind AI to Google Play on my own.",
  about: [
    "I wrote my first lines of code at 16. Four years later I build mobile apps, web platforms and AI agents, and I've shipped my own app to Google Play.",
    "I'm based in Sarajevo and in my second year at the Faculty of Information Technologies at Džemal Bijedić University of Mostar.",
    "My path so far, newest first: full-stack engineering at Zora AI, remote full-stack work for CreditGenius, then P23, where I went from a four-month internship to Corner Table and on to GiBud, moving from mobile into the web platform as well. What I actually built on each one is on the project pages.",
    "Outside of work I build my own products end to end. What I care about most is making AI dependable: typed contracts between the model and the rest of the system, deterministic code wherever a model isn't needed, and feedback loops so an agent checks its own output instead of being trusted blindly.",
  ],
  email: "amarmuminovic2712@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amar-muminovi%C4%87-ab91b6353/" },
    { label: "GitHub", href: "https://github.com/MumeDoktor" },
  ],
  cvUrl: "/cv/Amar-Muminovic-CV.pdf",
};

export const education: { school: string; detail: string; period: string }[] = [
  {
    school: "Fakultet informacijskih tehnologija, Univerzitet \"Džemal Bijedić\" u Mostaru",
    detail: "Faculty of Information Technologies, Džemal Bijedić University of Mostar.",
    period: "2nd year",
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

// Listed by start date, newest first.
export const experience: Experience[] = [
  {
    company: "Zora AI",
    role: "Full-Stack Engineer",
    start: "Oct 2026",
    end: "Present",
    location: "Remote · Belgrade",
    summary:
      "Client work on the 8rooms real-estate website: moving its property catalogue onto AWS with server-side rendering, and giving Claude a way to manage the listings.",
    points: [
      "Moved the property catalogue off Payload CMS into a database table served by an edge function, so a listing edit reaches the live site in about a minute with no rebuild.",
      "Wrote the migration scripts that moved the listings and roughly 1,400 images across 160 properties to S3, and redirected old property URLs to the new ones.",
      "Moved property pages, listings and a properties sitemap to server-side rendering on AWS Amplify through a custom adapter, so Google and WhatsApp/Viber link previews get the listing data in the first HTML.",
      "Cut the listings payload from 496 KB to 33 KB with compression, kept pages fast after cache expiry, added a 5-minute warm-up job against cold starts, and served images through CloudFront with generated thumbnails.",
      "Made the contact form save every inquiry to the database before emailing it, with a column that flags unsent ones and a honeypot field against bots.",
      "Built an MCP server that lets Claude read and edit catalogue listings and images.",
    ],
    stack: ["TypeScript", "Node.js", "AWS S3", "CloudFront", "Amplify", "SSR", "Edge functions", "MCP", "Payload CMS (migrated off)"],
    projects: [{ slug: "8rooms-zora-ai", label: "8rooms" }],
  },
  {
    company: "CreditGenius",
    role: "Full-Stack Developer (contract)",
    start: "Jan 2025",
    end: "May 2026",
    location: "Remote · UK company",
    summary:
      "Backend and frontend work on a financial platform: credit reports, subscriptions, billing and micro-loans, built on ASP.NET Core with SQL Server and AWS.",
    points: [
      "Built automatic re-collection of failed micro-loan repayments, so a failed payment is retried on a schedule instead of being dropped.",
      "Built and maintained ASP.NET Core services on AWS Lambda with Entity Framework over SQL Server, including schemas, queries and stored procedures.",
      "Implemented business logic, REST endpoints and payment and subscription workflows in production.",
      "Worked with senior engineers on database design, architecture decisions and production deployments.",
      "Built Angular features and internal tools, plus AWS S3 file storage, PDF report generation and transactional email with Amazon SES.",
    ],
    stack: ["C#", "ASP.NET Core", "AWS Lambda", "Entity Framework", "SQL Server", "Angular", "AWS S3", "Amazon SES"],
    projects: [{ slug: "creditgenius-micro-loans", label: "CreditGenius" }],
  },
  {
    company: "P23",
    role: "Junior Full-Stack Developer, Mobile & Web",
    start: "Jun 2023",
    end: "Jan 2026",
    location: "Remote",
    summary:
      "Hired straight after the internship to build client products, first on mobile and then across mobile and web. Corner Table, a hospitality social app for founders in New York, was delivered as a Flutter MVP on Firebase. GiBud, a commercial auction and e-commerce platform for the Norwegian market, was built by a team of four, and I was the only developer on its Flutter app.",
    points: [
      "Built the in-app chat for Corner Table from scratch on Firestore, with real-time messages, group chats and role-aware replies so only staff with permission answer for a venue.",
      "Built the venues and cities sections, with searchable, sortable lists and detail pages, plus the registration flow with a colleague and the profile and edit-profile screens.",
      "Built push notifications with Firebase Cloud Messaging, including device token handling and several notification types, each opening the right screen.",
      "Sole developer of the GiBud Flutter app: architecture, state management with BLoC, performance and user experience.",
      "Built live bidding over Ably, so price, bid history and countdown update while a screen is open, plus chat and notifications.",
      "Implemented checkout as a single Prisma transaction that creates purchases, snapshots each item's title and image, and clears the cart.",
      "Built versioned REST endpoints for the mobile client with Next.js API routes, Prisma and PostgreSQL, covering auctions, bids, cart, checkout and purchases.",
      "Added on-device SQLite caching, Cloudflare R2 media storage, chat endpoints and a seller invoice designer.",
      "Supported three colleagues on the team: helping them when they got stuck, talking through how to approach a problem, and reviewing pull requests.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase",
      "Firestore",
      "Firebase Cloud Messaging",
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Ably",
      "Cloudflare R2",
    ],
    projects: [
      { slug: "gibud", label: "GiBud" },
      { slug: "corner-table", label: "Corner Table" },
    ],
  },
  {
    company: "P23",
    role: "Software Development Intern",
    start: "Jan 2023",
    end: "May 2023",
    location: "Remote",
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
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Mobile",
    items: ["Flutter", "Dart", "BLoC", "go_router", "get_it", "Firebase SDK"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "TypeScript", "Angular", "Tailwind CSS", "shadcn/ui", "Server-side rendering"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "ASP.NET Core", "C#", "FastAPI", "Python", "REST APIs", "Entity Framework"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite", "Firestore", "Prisma", "Drizzle"],
  },
  {
    group: "AI / LLM",
    items: ["Claude API", "OpenAI API", "MCP servers", "Tool use", "Structured output with Zod", "Groq Whisper", "Prompt design"],
  },
  {
    group: "AWS",
    items: ["S3", "CloudFront", "Amplify", "Lambda", "Amazon SES"],
  },
  {
    group: "Cloud & tools",
    items: ["Firebase", "Firebase Cloud Functions", "Cloudflare R2", "Vercel", "Docker", "Git", "Claude Code"],
  },
];
