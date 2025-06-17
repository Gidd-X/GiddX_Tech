import type { LucideIcon } from 'lucide-react';

export type ProjectCategory = "Data Analysis" | "Data Science" | "Cybersecurity";

export const ALL_CATEGORIES: ProjectCategory[] = ["Data Analysis", "Data Science", "Cybersecurity"];


export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  codeLink?: string;
  liveLink?: string;
  visualizations?: { url: string; hint: string; caption: string }[];
  codeSnippets?: { language: string; code: string }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  details: string;
  skills: string[];
  imageUrl?: string;
  imageHint?: string;
  icon?: LucideIcon;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  category: 'Data Analysis' | 'Data Science' | 'Cybersecurity' | 'General';
}

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}
