import type { CaseStudy } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import SkillBadge from './skill-badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const IconComponent = caseStudy.icon;
  return (
    <Card className="bg-card border-border shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col group">
      {caseStudy.imageUrl && (
         <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint={caseStudy.imageHint || "cybersecurity abstract"}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {IconComponent && <IconComponent className="h-8 w-8 text-accent flex-shrink-0" />}
          <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors">{caseStudy.title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">{caseStudy.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold text-sm text-primary mb-2">Details:</h4>
        <ScrollArea className="h-24 pr-3">
          <p className="text-sm text-muted-foreground whitespace-pre-line">{caseStudy.details}</p>
        </ScrollArea>
      </CardContent>
      <CardFooter className="mt-auto border-t border-border/50 pt-4">
        <div className="w-full">
          <h4 className="font-semibold text-xs text-primary mb-2">Skills Demonstrated:</h4>
          <div className="flex flex-wrap gap-2">
            {caseStudy.skills.map((skill) => (
              <SkillBadge key={skill} skillName={skill} variant="outline" className="text-xs" />
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
