import type {
  TimelineEvent,
  Project,
  Experience,
  Principle,
} from "@/types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "school",
    year: "2016",
    title: "First Curiosity",
    description:
      "Wrote my first line of code. Didn't know it would become a career — it just felt like solving puzzles.",
  },
  {
    id: "first-code",
    year: "2018",
    title: "First Real Project",
    description:
      "Built something that other people actually used. The feeling of shipping never gets old.",
  },
  {
    id: "conference",
    year: "2019",
    title: "International Conference",
    description:
      "Presented research to an audience of engineers. Learned that explaining ideas is as hard as building them.",
  },
  {
    id: "research",
    year: "2020",
    title: "Research Paper",
    description:
      "Published work on a problem I cared about. Academic rigor met practical application.",
  },
  {
    id: "hackathons",
    year: "2021",
    title: "Hackathon Season",
    description:
      "48-hour sprints taught me more about shipping than any course. Speed is a feature when you learn to cut scope.",
  },
  {
    id: "ambassador",
    year: "2022",
    title: "Google Student Ambassador",
    description:
      "Bridged the gap between community and technology. Learned that the best engineers are also teachers.",
  },
  {
    id: "open-source",
    year: "2023",
    title: "Open Source",
    description:
      "Started contributing back. Code is better when it's shared. Ideas are stronger when they're challenged.",
  },
  {
    id: "products",
    year: "2024",
    title: "Building Products",
    description:
      "Shifted from projects to products. The difference: products serve people beyond the demo day.",
  },
  {
    id: "today",
    year: "2025",
    title: "Today",
    description:
      "Refining SafeExam. Building infrastructure that institutions trust. Every line of code serves someone.",
  },
];

export const projects: Project[] = [
  {
    id: "safe-exam",
    title: "SafeExam",
    tagline: "Secure assessment platform for institutions that can't compromise on trust.",
    problem:
      "Educational institutions needed a way to conduct exams remotely without sacrificing integrity. Existing solutions were either too invasive or too easy to bypass.",
    solution:
      "Built a platform that balances security with respect — monitoring without surveillance, trust without naivety.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC", "Redis"],
    lessons: [
      "Security is a spectrum, not a binary.",
      "The most secure system that nobody uses is worthless.",
      "Trust your users, then verify.",
    ],
    github: "https://github.com/Akshatthakur22/AkshatThakur",
    status: "shipped",
  },
  {
    id: "mail-my-certificate",
    title: "MailMyCertificate",
    tagline: "Certificates that generate themselves.",
    problem:
      "Event organizers spent hours manually creating and sending certificates. Repetitive work that a machine should handle.",
    solution:
      "Automated the entire pipeline — upload a template, connect a spreadsheet, certificates fly out. Minutes instead of days.",
    tech: ["Node.js", "Canvas API", "SMTP", "React"],
    lessons: [
      "Automate the boring parts so humans can do the creative parts.",
      "A 90% solution shipped today beats a 100% solution shipped never.",
    ],
    status: "shipped",
  },
  {
    id: "athletix-os",
    title: "AthletixOS",
    tagline: "The infrastructure sports academies run on without noticing.",
    problem:
      "Sports academies managed everything on paper and WhatsApp. Scheduling, progress tracking, parent communication — all fragmented.",
    solution:
      "Built a system so intuitive that coaches adopted it without training. The best infrastructure disappears.",
    tech: ["React", "Node.js", "MongoDB", "Real-time sync"],
    lessons: [
      "The best product is one users forget is there.",
      "Design for the least technical user first.",
      "Real-time isn't always necessary — but when it is, nothing else will do.",
    ],
    status: "shipped",
  },
];

export const experiences: Experience[] = [
  {
    id: "founder",
    role: "Founder & Lead Engineer",
    company: "SafeExam",
    period: "2023 — Present",
    description:
      "Building secure assessment infrastructure from zero. Architecture decisions, hiring, product vision — the full stack of building a company.",
    highlights: [
      "Designed the core proctoring engine",
      "Scaled to handle concurrent exam sessions",
      "Built trust with institutional partners",
    ],
    note: "still my favorite problem to solve",
  },
  {
    id: "open-source-contributor",
    role: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 — Present",
    description:
      "Contributing to projects I use and believe in. Code reviews, bug fixes, documentation — every contribution counts.",
    highlights: [
      "Meaningful PRs to developer tools",
      "Documentation improvements",
      "Community mentoring",
    ],
    note: "the best way to learn is to read others' code",
  },
  {
    id: "google-ambassador",
    role: "Google Student Ambassador",
    company: "Google Developer Student Clubs",
    period: "2022 — 2023",
    description:
      "Led technical workshops, organized hackathons, and built a community of builders. Technology is better when shared.",
    highlights: [
      "Organized 12+ technical events",
      "Mentored junior developers",
      "Built cross-college engineering community",
    ],
  },
];

export const principles: Principle[] = [
  {
    id: "people-first",
    title: "Build for people",
    description:
      "Every feature starts with a person who needs it. Technology is the how, never the why.",
  },
  {
    id: "design-before-code",
    title: "Design before code",
    description:
      "A sketch on paper saves a week of refactoring. Think in systems before thinking in syntax.",
  },
  {
    id: "speed-is-feature",
    title: "Speed is a feature",
    description:
      "Performance isn't optimization — it's respect for the user's time. Every millisecond matters.",
  },
  {
    id: "accessibility",
    title: "Accessibility is not optional",
    description:
      "If it doesn't work for everyone, it doesn't work. Build inclusively from day one.",
  },
  {
    id: "ship-iterate",
    title: "Ship, then iterate",
    description:
      "Perfect is the enemy of useful. Get it in front of people. Let reality shape the product.",
  },
  {
    id: "longevity",
    title: "Longevity over virality",
    description:
      "Build things that last. Trends fade. Good engineering compounds.",
  },
];

export const aboutContent = {
  intro:
    "I build software because someone genuinely needs it.",
  story: [
    "It started with curiosity — not about computers, but about how things work. Why do some tools feel invisible while others fight you at every step?",
    "That question led me to engineering. Not the kind that optimizes for metrics, but the kind that optimizes for people.",
    "I sketch before I code. I talk to users before I design. I ship before I'm ready, because the best feedback comes from the real world.",
    "Today, I build products that disappear — they let people do the work that matters without thinking about the tool.",
  ],
  philosophy:
    "The best products don't announce themselves. They just work, quietly and reliably, so people can focus on what actually matters to them.",
};

export const futureContent = {
  dreams: [
    "Building assessment infrastructure that makes cheating irrelevant, not just detectable.",
    "Open-source tools that give small teams the capabilities of large organizations.",
    "Research at the intersection of education and technology — making learning measurable without making it mechanical.",
  ],
  vision:
    "A world where technology amplifies human potential instead of replacing human judgment.",
};

export const contactInfo = {
  email: "thakurakshat013@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshatthakur22/",
  github: "https://github.com/Akshatthakur22",
  twitter: "https://x.com/akshatt66612958",
};
