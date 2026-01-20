// TypeScript interfaces for portfolio data

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
  image?: string;
}

export type ProjectCategory =
  | "RAG Systems"
  | "MLOps"
  | "Computer Vision"
  | "NLP"
  | "Multi-Agent";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  specialization?: string;
  gpa?: string;
}

export interface Publication {
  id: string;
  title: string;
  type: "paper" | "certification";
  link?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  location: string;
}
