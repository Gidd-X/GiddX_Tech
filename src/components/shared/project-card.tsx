import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink } from 'lucide-react';
import SkillBadge from './skill-badge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col group overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
          data-ai-hint={project.imageHint}
        />
        <Badge variant="default" className="absolute top-2 right-2 bg-accent text-accent-foreground shadow">
          {project.category}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground h-20 overflow-hidden text-ellipsis">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-primary mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <SkillBadge key={tag} skillName={tag} variant="outline" />
            ))}
          </div>
        </div>
        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-sm text-primary mb-2">Code Snippet:</h4>
            <pre className="bg-background/50 p-2 rounded-md text-xs overflow-x-auto">
              <code className={`language-${project.codeSnippets[0].language} font-code text-muted-foreground`}>
                {project.codeSnippets[0].code}
              </code>
            </pre>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto pt-4 border-t border-border/50">
        <div className="flex justify-start gap-3 w-full">
          {project.codeLink && (
            <Button variant="outline" size="sm" asChild className="hover:border-accent hover:text-accent">
              <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
          {project.liveLink && project.liveLink !== '#' && (
            <Button variant="default" size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
