import SectionWrapper from '@/components/shared/section-wrapper';
import CaseStudyCard from '@/components/shared/case-study-card';
import SkillBadge from '@/components/shared/skill-badge';
import { CYBERSECURITY_CASE_STUDIES, SKILLS_LIST } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Lock, CheckCircle, Award } from 'lucide-react';

const cybersecuritySkills = SKILLS_LIST.filter(skill => skill.category === 'Cybersecurity');
const certifications = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', icon: Award, date: '2023' },
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', icon: Award, date: '2024 (In Progress)' },
];


export default function CybersecurityPage() {
  return (
    <SectionWrapper
      title="Cybersecurity Expertise"
      subtitle="Dedicated to protecting digital environments through proactive strategies, robust defenses, and continuous learning."
    >
      {/* Skills Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-headline font-semibold text-center mb-8 text-primary-foreground">Core Cybersecurity Skills</h3>
        <Card className="bg-card p-6 shadow-lg">
          <CardContent className="flex flex-wrap justify-center gap-3">
            {cybersecuritySkills.map((skill) => (
              <SkillBadge key={skill.name} skillName={skill.name} icon={skill.icon} className="py-2 px-4 text-base bg-input hover:bg-input/80" />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Certifications Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-headline font-semibold text-center mb-8 text-primary-foreground">Certifications & Training</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map(cert => (
             <Card key={cert.name} className="bg-card p-6 shadow-md flex items-center gap-4 hover:shadow-primary/10 transition-shadow">
              <cert.icon className="h-10 w-10 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary-foreground">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Case Studies Section */}
      <div>
        <h3 className="text-2xl font-headline font-semibold text-center mb-8 text-primary-foreground">Case Studies</h3>
        {CYBERSECURITY_CASE_STUDIES.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {CYBERSECURITY_CASE_STUDIES.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Case studies coming soon.</p>
        )}
      </div>
    </SectionWrapper>
  );
}
