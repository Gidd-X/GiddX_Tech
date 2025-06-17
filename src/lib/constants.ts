import type { NavItem, Project, CaseStudy, Skill } from './types';
import { LayoutDashboard, Briefcase, ShieldCheck, UserCircle, FileText, Mail, BarChart2, BrainCircuit, Lock, Database, GitBranch, Linkedin, Github, FileJson, Server, Settings2, Filter, Activity, TrendingUp, Presentation, Wand2, Network } from 'lucide-react';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/', icon: LayoutDashboard },
  { label: 'Projects', href: '/projects', icon: Briefcase },
  { label: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheck },
  { label: 'About', href: '/about', icon: UserCircle },
  { label: 'Resume Tailoring', href: '/resume-tailoring', icon: Wand2 },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'da-project-1',
    title: 'Sales Performance Dashboard',
    description: 'Interactive dashboard visualizing sales trends and KPIs for a retail company.',
    category: 'Data Analysis',
    tags: ['Tableau', 'SQL', 'Data Visualization', 'Business Intelligence'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sales dashboard',
    codeLink: 'https://github.com/yourusername/sales-dashboard',
    liveLink: '#',
    visualizations: [
      { url: 'https://placehold.co/800x600.png', hint: 'sales chart', caption: 'Quarterly Sales Growth'}
    ],
    codeSnippets: [
      { language: 'sql', code: "SELECT quarter, SUM(sales) FROM sales_data GROUP BY quarter;"}
    ]
  },
  {
    id: 'ds-project-1',
    title: 'Customer Churn Prediction',
    description: 'Machine learning model to predict customer churn using Python and scikit-learn.',
    category: 'Data Science',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Pandas', 'Jupyter'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'machine learning',
    codeLink: 'https://github.com/yourusername/churn-prediction',
  },
  {
    id: 'cs-project-1',
    title: 'Network Intrusion Detection System Analysis',
    description: 'Analyzed IDS logs to identify patterns and potential security threats.',
    category: 'Cybersecurity',
    tags: ['IDS', 'Log Analysis', 'Splunk', 'Threat Detection'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'network security',
  },
   {
    id: 'da-project-2',
    title: 'Market Basket Analysis',
    description: 'Identified purchasing patterns and product associations using Apriori algorithm.',
    category: 'Data Analysis',
    tags: ['R', 'Association Rules', 'Market Analysis', 'Data Mining'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data mining',
    codeLink: 'https://github.com/yourusername/market-basket-analysis',
  },
];

export const CYBERSECURITY_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-case-1',
    title: 'Phishing Campaign Response',
    summary: 'Led the response to a targeted phishing campaign, minimizing impact and improving defenses.',
    details: 'A sophisticated phishing campaign targeted company executives. My role involved identifying the attack vector, containing the threat by isolating affected accounts, analyzing the malware payload (anonymized type: InfoStealerVariantX), and coordinating with IT to implement enhanced email filtering rules and user awareness training. Post-incident report highlighted key learnings and recommended security posture improvements.',
    skills: ['Incident Response', 'Phishing Analysis', 'Malware Triage', 'Security Awareness'],
    icon: ShieldCheck,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'phishing email'
  },
  {
    id: 'cs-case-2',
    title: 'Vulnerability Assessment & Penetration Test Coordination',
    summary: 'Coordinated a third-party VAPT, managed remediation efforts for identified vulnerabilities.',
    details: 'Oversaw a comprehensive vulnerability assessment and penetration test for critical web applications. This involved vendor selection, scoping the engagement, and acting as the primary point of contact. After the VAPT, I analyzed the findings, prioritized vulnerabilities based on risk (CVSS scores and business impact), and worked with development teams to track and verify remediation. This led to a significant reduction in exploitable vulnerabilities.',
    skills: ['Vulnerability Management', 'Penetration Testing', 'Risk Assessment', 'Remediation Tracking'],
    icon: Lock,
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'security audit'
  },
];

export const SKILLS_LIST: Skill[] = [
  // Data Analysis
  { name: 'SQL', icon: Database, category: 'Data Analysis' },
  { name: 'Excel', icon: FileJson, category: 'Data Analysis' },
  { name: 'Tableau', icon: BarChart2, category: 'Data Analysis' },
  { name: 'Power BI', icon: Presentation, category: 'Data Analysis' },
  { name: 'Python (Pandas, NumPy)', icon: Settings2, category: 'Data Analysis' },
  { name: 'Statistical Analysis', icon: Activity, category: 'Data Analysis' },
  { name: 'Data Visualization', icon: TrendingUp, category: 'Data Analysis' },
  // Data Science
  { name: 'Machine Learning', icon: BrainCircuit, category: 'Data Science' },
  { name: 'Scikit-learn', icon: Settings2, category: 'Data Science' },
  { name: 'TensorFlow/Keras', icon: Settings2, category: 'Data Science' },
  { name: 'Natural Language Processing (NLP)', icon: Settings2, category: 'Data Science' },
  { name: 'Jupyter Notebooks', icon: FileText, category: 'Data Science' },
  // Cybersecurity
  { name: 'Network Security', icon: Network, category: 'Cybersecurity' },
  { name: 'Incident Response', icon: ShieldCheck, category: 'Cybersecurity' },
  { name: 'Vulnerability Assessment', icon: Filter, category: 'Cybersecurity' },
  { name: 'SIEM (e.g., Splunk)', icon: Server, category: 'Cybersecurity' },
  { name: 'Cryptography', icon: Lock, category: 'Cybersecurity' },
  { name: 'Ethical Hacking', icon: Lock, category: 'Cybersecurity' },
  // General
  { name: 'Git & GitHub', icon: GitBranch, category: 'General' },
  { name: 'Problem Solving', icon: Settings2, category: 'General' },
  { name: 'Communication', icon: Mail, category: 'General' },
];

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/yourusername',
  github: 'https://github.com/yourusername',
  email: 'your.email@example.com'
};
