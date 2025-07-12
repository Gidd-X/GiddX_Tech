import type { NavItem, Project, CaseStudy, Skill } from './types';
import { LayoutDashboard, Briefcase, ShieldCheck, UserCircle, Mail, BarChart2, BrainCircuit, Lock, Database, GitBranch, Linkedin, Github, FileJson, Server, Settings2, Code2, Presentation, Network } from 'lucide-react';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/', icon: LayoutDashboard },
  { label: 'Services', href: '/projects', icon: Briefcase },
  { label: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheck },
  { label: 'About', href: '/about', icon: UserCircle },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'data-solutions-1',
    title: 'Retail Sales Performance Dashboard',
    description: 'Developed an interactive dashboard to visualize sales trends, KPIs, and customer behavior for a retail client, leading to a 15% increase in marketing ROI.',
    category: 'Data Analysis',
    tags: ['Tableau', 'SQL', 'Data Visualization', 'Business Intelligence', 'Power BI'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sales dashboard',
    codeLink: 'https://github.com/giddx/sales-dashboard-demo',
    liveLink: '#',
  },
  {
    id: 'software-engineering-1',
    title: 'Custom CRM for a Startup',
    description: 'Designed and built a scalable Customer Relationship Management (CRM) system from the ground up, tailored to the unique workflow of a fast-growing SME.',
    category: 'Software Engineering',
    tags: ['React', 'Node.js', 'PostgreSQL', 'API Design', 'System Architecture'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'software application',
    codeLink: 'https://github.com/giddx/custom-crm-demo',
  },
  {
    id: 'it-consulting-1',
    title: 'IT Infrastructure Overhaul for NGO',
    description: 'Provided strategic guidance to an NGO for modernizing their IT infrastructure, improving operational efficiency and data security.',
    category: 'IT Consulting',
    tags: ['IT Strategy', 'Cloud Migration', 'System Integration', 'Vendor Management'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'it consulting',
  },
   {
    id: 'data-solutions-2',
    title: 'Customer Segmentation Analysis',
    description: 'Utilized clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing campaigns and improving engagement.',
    category: 'Data Analysis',
    tags: ['Python', 'Scikit-learn', 'Data Mining', 'Customer Analytics'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'customer data chart',
    codeLink: 'https://github.com/giddx/customer-segmentation-demo',
  },
];

export const CYBERSECURITY_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-case-1',
    title: 'Phishing Campaign Response & Awareness Training',
    summary: 'Executed a rapid incident response to a phishing attack and implemented a proactive awareness training program, reducing successful phishing incidents by 90%.',
    details: 'A sophisticated phishing campaign targeted company employees. My role involved identifying the attack vector, containing the threat, and analyzing the payload. Post-incident, I developed and delivered a comprehensive security awareness training program for all staff, focusing on identifying and reporting suspicious emails.',
    skills: ['Incident Response', 'Phishing Analysis', 'Security Awareness', 'User Training'],
    icon: ShieldCheck,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'phishing email'
  },
  {
    id: 'cs-case-2',
    title: 'Penetration Testing & Vulnerability Management',
    summary: 'Conducted a comprehensive penetration test on a client\'s web application, identified critical vulnerabilities, and guided the remediation process.',
    details: 'Performed a full-scope penetration test, discovering several high-risk vulnerabilities including SQL Injection and Cross-Site Scripting (XSS). I provided a detailed report with actionable recommendations and collaborated with the development team to ensure all issues were patched, significantly strengthening their security posture.',
    skills: ['Penetration Testing', 'Vulnerability Management', 'Risk Assessment', 'Remediation'],
    icon: Lock,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'security audit'
  },
];

export const SKILLS_LIST: Skill[] = [
  // Data Analysis
  { name: 'SQL', icon: Database, category: 'Data Analysis' },
  { name: 'Tableau', icon: BarChart2, category: 'Data Analysis' },
  { name: 'Power BI', icon: Presentation, category: 'Data Analysis' },
  { name: 'Python (Pandas, NumPy)', icon: Code2, category: 'Data Analysis' },
  // Data Science (Kept for potential future use, matches 'Data Analysis' skills)
  { name: 'Machine Learning', icon: BrainCircuit, category: 'Data Science' },
  // Cybersecurity
  { name: 'Network Security', icon: Network, category: 'Cybersecurity' },
  { name: 'Incident Response', icon: ShieldCheck, category: 'Cybersecurity' },
  { name: 'Penetration Testing', icon: Lock, category: 'Cybersecurity' },
  { name: 'SIEM Tools', icon: Server, category: 'Cybersecurity' },
  // IT Consulting
  { name: 'IT Strategy', icon: Briefcase, category: 'IT Consulting' },
  { name: 'Cloud Solutions', icon: Server, category: 'IT Consulting' },
  // Software Engineering
  { name: 'React', icon: Code2, category: 'Software Engineering' },
  { name: 'Node.js', icon: Server, category: 'Software Engineering' },
  { name: 'System Design', icon: Settings2, category: 'Software Engineering' },
  // General
  { name: 'Git & GitHub', icon: GitBranch, category: 'General' },
  { name: 'Project Management', icon: Briefcase, category: 'General' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/gideon-akporido',
  github: 'https://github.com/giddx',
  email: 'info@giddx.com'
};
