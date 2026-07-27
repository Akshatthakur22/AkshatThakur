import type {
  TimelineEvent,
  Project,
  Experience,
  Principle,
} from "@/types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "started",
    year: "2023",
    title: "Started the Journey",
    description:
      "Began B.Tech in Computer Science Engineering at CDGI, Indore (RGPV). Curiosity turned into a serious commitment to building software.",
  },
  {
    id: "rzult",
    year: "Jan 2024",
    title: "First Real Automation",
    description:
      "Built Rzult, a Python pipeline that pulled and organised 300+ university results concurrently — cutting hours of manual work down to seconds.",
  },
  {
    id: "research",
    year: "Feb 2024",
    title: "Research Changed My Perspective",
    description:
      "Presented a paper on AI-assisted sustainable energy optimisation at ICSEE 2024, MANIT Bhopal. Communicating ideas clearly matters as much as building them.",
  },
  {
    id: "hackathon",
    year: "Apr 2024",
    title: "Building Under Pressure",
    description:
      "Hackwave — a 36-hour national hackathon with Team Tech Titans 2. Fast decisions, teamwork, and real deadlines taught lessons no classroom could.",
  },
  {
    id: "gfg",
    year: "Sep 2025",
    title: "Building Communities",
    description:
      "Became Technical Head of the GFG Student Chapter at CDGI. Teaching, and organising workshops on system design, Git, and deployment.",
  },
  {
    id: "products",
    year: "Oct 2025",
    title: "Building Beyond Tutorials",
    description:
      "Started MailMyCertificate. Software stopped being practice — projects became products built to remove real operational overhead.",
  },
  {
    id: "freelance",
    year: "Dec 2025",
    title: "Shipping for Clients",
    description:
      "Started freelancing for Priya Sarv Utthan Seva Sansthan, an Indore NGO — shipping a production site with Razorpay donations and volunteer onboarding.",
  },
  {
    id: "google",
    year: "2026",
    title: "Representing Google",
    description:
      "Selected as a Google Student Ambassador. Building technology also means building the communities around it.",
  },
  {
    id: "today",
    year: "Today",
    title: "Still Sketching",
    description:
      "Currently building SafeExam.in, MailMyCertificate, and Calcuzy.app. The notebook is still unfinished.",
  },
];

export const projects: Project[] = [
  {
    id: "mail-my-certificate",
    title: "MailMyCertificate",
    period: "Oct 2025 — Present",
    tagline: "Certificates that generate and send themselves.",
    problem:
      "Event organisers spent hours designing, generating, and emailing certificates one by one — repetitive work a machine should handle.",
    solution:
      "A template editor with coordinate-based field mapping, CSV import, server-side PDF generation, and Gmail OAuth delivery. Bulk certificates in minutes, not days.",
    tech: ["Next.js", "FastAPI", "Google OAuth", "IndexedDB", "PDF generation"],
    lessons: [
      "Automate the boring parts so humans do the creative parts.",
      "A local-first architecture keeps the UI responsive even when the network isn't.",
    ],
    status: "shipped",
  },
  {
    id: "safe-exam",
    title: "SafeExam.in",
    period: "Feb 2026 — Present",
    tagline: "Browser-based exams for institutions that can't compromise on integrity.",
    problem:
      "Institutions needed remote MCQ assessments without sacrificing integrity. Existing tools were either too invasive or too easy to bypass.",
    solution:
      "A browser-based exam platform with activity monitoring for tab switching and focus loss, plus asynchronous auto-save so answers survive unstable networks.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "TypeScript"],
    lessons: [
      "Security is a spectrum, not a binary.",
      "The most secure system nobody uses is worthless.",
    ],
    liveUrl: "https://safeexam.in",
    status: "in-progress",
  },
  {
    id: "calcuzy",
    title: "Calcuzy.app",
    period: "Jan 2026 — Present",
    tagline: "About 37 everyday tools, no login, nothing sent to a server.",
    problem:
      "Simple calculators and converters are buried behind sign-up walls, ads, and page loads that outweigh the task itself.",
    solution:
      "A browser-based utility platform where every tool runs client-side, with JSON-LD metadata on each tool page for organic discoverability.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "JSON-LD"],
    lessons: [
      "Structured data is the difference between existing and being found.",
      "Client-side only means there is no server bill and no privacy question.",
    ],
    liveUrl: "https://calcuzy.app",
    status: "shipped",
  },
  {
    id: "rzult",
    title: "Rzult",
    period: "Jan 2024 — Feb 2024",
    tagline: "300+ university results, collected in seconds instead of hours.",
    problem:
      "Collecting and organising university results meant repeating the same portal workflow hundreds of times by hand, CAPTCHA included.",
    solution:
      "An automated result processing system using OpenCV and ONNX Runtime for OCR-based CAPTCHA recognition, with a multithreaded pipeline for concurrent retrieval.",
    tech: ["Python", "OpenCV", "ONNX Runtime", "Multithreading"],
    lessons: [
      "The best problems to solve are the ones you had to suffer through yourself.",
      "Concurrency turns an overnight job into a coffee break.",
    ],
    status: "shipped",
  },
];

export const experiences: Experience[] = [
  {
    id: "freelance-ngo",
    role: "Freelance Full-Stack Developer",
    company: "Priya Sarv Utthan Seva Sansthan (NGO) — Indore, remote",
    period: "Dec 2025 — Present",
    description:
      "Built and deployed an end-to-end production website with public pages and an admin side, including a Razorpay donation flow and a volunteer onboarding workflow. Still maintained in production.",
    highlights: [
      "Razorpay payment gateway integration",
      "Volunteer registration workflow",
      "Continuous deployment and upkeep",
    ],
    note: "first real client, first real stakes",
  },
  {
    id: "brio",
    role: "Field Support Engineer (Digital Infrastructure)",
    company: "Brio Interactive Technologies Ltd. — client: EMRS Govt. School",
    period: "Mar 2026 — Apr 2026",
    description:
      "Set up Google Workspace for Education environments including domain verification and DNS, provisioned accounts and access controls, and onboarded smart panel hardware for classroom use.",
    highlights: [
      "Domain verification and DNS configuration",
      "Trained 30+ teaching staff",
      "Resolved on-site hardware/software integration issues",
    ],
    note: "infrastructure is a people problem too",
  },
  {
    id: "gfg-technical-head",
    role: "Technical Head",
    company: "GFG Student Chapter, Chameli Devi Group of Institutions",
    period: "Sep 2025 — Present",
    description:
      "Lead technical coordination for workshops, hackathons, and coding events — including delivery of sessions on system design, Git workflows, and deployment practices.",
    highlights: [
      "Workshops on system design and Git",
      "Hackathon and event operations",
      "Mentoring junior developers",
    ],
    note: "teaching it is how you learn it",
  },
];

export const principles: Principle[] = [
  {
    id: "people-first",
    title: "Build for people",
    description: "Technology is the how, never the why.",
  },
  {
    id: "design-before-code",
    title: "Design before code",
    description: "A sketch on paper saves a week of refactoring.",
  },
  {
    id: "speed-is-feature",
    title: "Speed is a feature",
    description: "Every millisecond is respect for someone's time.",
  },
  {
    id: "ship-iterate",
    title: "Ship, then iterate",
    description: "Let reality shape the product.",
  },
  {
    id: "longevity",
    title: "Longevity over virality",
    description: "Good engineering compounds.",
  },
];

export const aboutContent = {
  intro: "I sketch before I code. I talk to users before I design. I ship before I'm ready.",
  philosophy:
    "The best products don't announce themselves. They work quietly so people can focus on what matters.",
  /** Plain-language summary — written for AI engines and humans skimming. */
  summary:
    "Akshat Thakur is a software engineer based in Indore, Madhya Pradesh, India. He builds full-stack and backend systems in Next.js, TypeScript, and Python, focused on operational problems he has watched people struggle with firsthand: certificate automation, examination integrity, and academic result processing.",
  /** The stack, in crawlable text rather than only as tags on project cards. */
  stack: [
    { label: "Languages", items: "Python, JavaScript, TypeScript" },
    { label: "Frameworks", items: "Next.js, React, FastAPI, Flask, OpenCV" },
    { label: "Data", items: "PostgreSQL, MySQL" },
    { label: "Tooling", items: "Git, Vercel, Google Workspace Admin" },
  ],
};

export const futureContent = {
  dreams: [
    "Assessment infrastructure that makes cheating irrelevant, not just detectable.",
    "Open-source tools that give small teams the power of large organizations.",
    "Research where education meets technology — measurable without mechanical.",
  ],
  vision:
    "Technology that amplifies human potential instead of replacing human judgment.",
};

export const resume = {
  /** Lives in /public — keep the filename keyword-rich, it shows up in search. */
  path: "/akshat-thakur-resume.pdf",
  fileName: "akshat-thakur-resume.pdf",
  format: "PDF",
  pages: 2,
  sizeLabel: "129 KB",
  updated: "July 2026",
  /** What a recruiter gets if they only open the PDF. */
  contents: [
    "Technical skills — Python, JavaScript, TypeScript, Next.js, FastAPI, PostgreSQL",
    "Four projects with the problem each one solved",
    "Three roles, including freelance client work and on-site infrastructure",
    "Education, certifications, and leadership",
  ],
} as const;

export const contactInfo = {
  email: "thakurakshat013@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshatthakur22/",
  github: "https://github.com/Akshatthakur22",
  twitter: "https://x.com/akshatt66612958",
  location: "Indore, Madhya Pradesh, India",
  availability: "Open to software engineering roles — on-site, hybrid, or remote.",
};
