/**
 * Single source of truth for site-wide SEO / GEO / AEO metadata.
 *
 * IMPORTANT: set NEXT_PUBLIC_SITE_URL in your deployment environment to the real
 * production origin (no trailing slash). The fallback below is only used locally.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://akshatthakur.vercel.app"
).replace(/\/$/, "");

export interface EducationEntry {
  name: string;
  credential: string;
  period: string;
  detail?: string;
  url?: string;
}

const education: EducationEntry[] = [
  {
    name: "Chameli Devi Group of Institutions (CDGI)",
    credential: "B.Tech, Computer Science Engineering (RGPV)",
    period: "2023 — 2027",
    detail: "CGPA 7.68 / 10.0 (current)",
    url: "https://cdgi.edu.in/",
  },
  {
    name: "St. Arnold School, Indore",
    credential: "Class 12 (CBSE), Science Stream",
    period: "Graduated 2023",
  },
];

export const person = {
  name: "Akshat Thakur",
  givenName: "Akshat",
  familyName: "Thakur",
  jobTitle: "Software Engineer",
  headline: "Software Engineer building full-stack products in Next.js and Python",
  /** One-sentence definition used for AEO/GEO answer extraction. */
  definition:
    "Akshat Thakur is a software engineer based in Indore, Madhya Pradesh, India, who builds full-stack and backend systems in Next.js, TypeScript, and Python — including SafeExam, MailMyCertificate, Calcuzy, and Rzult.",
  email: "thakurakshat013@gmail.com",
  image: `${SITE_URL}/images/akshat.png`,
  location: {
    city: "Indore",
    region: "Madhya Pradesh",
    country: "India",
    countryCode: "IN",
    latitude: 22.7196,
    longitude: 75.8577,
  },
  /** Verified public profiles — feeds schema.org sameAs (entity graph for AI search). */
  sameAs: [
    "https://github.com/Akshatthakur22",
    "https://www.linkedin.com/in/akshatthakur22/",
    "https://x.com/akshatt66612958",
  ],
  knowsAbout: [
    "Full-stack web development",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MySQL",
    "OpenCV",
    "Computer vision",
    "REST API design",
    "Google Workspace administration",
    "Educational technology",
    "Assessment integrity systems",
  ],
  education,
  awards: [
    "Google Student Ambassador (2026 — Present)",
    "Research Presenter, ICSEE 2024, MANIT Bhopal",
    "IIT Bombay Spoken Tutorial certifications in Python and Git (90%)",
    "AWS Solutions Architecture Job Simulation, Forage (2026)",
  ],
} as const;

export const siteMeta = {
  // Kept under 60 characters so it isn't truncated in search results.
  title: `${person.name} — Next.js & Python Software Engineer`,
  titleTemplate: `%s | ${person.name}`,
  // Kept near 155 characters for the same reason.
  description:
    "Software engineer in Indore, India building full-stack products with Next.js, TypeScript and Python — SafeExam, MailMyCertificate and Calcuzy.",
  keywords: [
    "Akshat Thakur",
    "software engineer Indore",
    "Next.js developer India",
    "full-stack developer portfolio",
    "Python FastAPI developer",
    "SafeExam",
    "MailMyCertificate",
    "Calcuzy",
  ],
} as const;
