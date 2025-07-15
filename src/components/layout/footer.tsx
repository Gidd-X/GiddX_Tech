'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t border-border py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <Github className="h-6 w-6 hover:text-accent transition-colors" />
          </Link>
          <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6 hover:text-accent transition-colors" />
          </Link>
          <Link href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email Me">
            <Mail className="h-6 w-6 hover:text-accent transition-colors" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} GIDDX TECH-SOLUTIONS. All rights reserved.
        </p>
         <p className="text-xs mt-2">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
