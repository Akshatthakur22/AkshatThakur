// Project Atlas — Core Types

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  lessons: string[];
  link?: string;
  github?: string;
  status: "shipped" | "in-progress" | "dreaming";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  note?: string; // handwritten margin note
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  rotation?: number; // slight tilt in degrees
  type: "photo" | "sketch" | "screenshot";
}

export interface MapLocation {
  id: string;
  city: string;
  country: string;
  story: string;
  coordinates: { x: number; y: number }; // relative positions on illustrated map
}
