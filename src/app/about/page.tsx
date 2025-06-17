import Image from 'next/image';
import SectionWrapper from '@/components/shared/section-wrapper';
import SkillBadge from '@/components/shared/skill-badge';
import { SKILLS_LIST, SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Mail, Linkedin, Github } from 'lucide-react';

export default function AboutPage() {
  const dataAnalysisSkills = SKILLS_LIST.filter(s => s.category === 'Data Analysis');
  const dataScienceSkills = SKILLS_LIST.filter(s => s.category === 'Data Science');
  const cybersecuritySkills = SKILLS_LIST.filter(s => s.category === 'Cybersecurity');
  const generalSkills = SKILLS_LIST.filter(s => s.category === 'General');
  
  const skillCategories = [
    { title: 'Data Analysis', skills: dataAnalysisSkills },
    { title: 'Data Science', skills: dataScienceSkills },
    { title: 'Cybersecurity', skills: cybersecuritySkills },
    { title: 'General Proficiencies', skills: generalSkills },
  ];

  return (
    <SectionWrapper title="About Me" subtitle="Passionate about data, security, and technology-driven solutions.">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Photo and Contact */}
        <div className="md:col-span-1 space-y-6">
          <Card className="bg-card shadow-lg overflow-hidden">
            <div className="relative w-full aspect-square">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Professional Photo"
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105 duration-300"
                data-ai-hint="professional portrait"
                priority
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-headline font-semibold text-primary-foreground mb-2">Your Name</h3>
              <p className="text-accent">Data & Security Professional</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary-foreground">Connect & Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start gap-2 hover:border-accent hover:text-accent">
                <Link href={`mailto:${SOCIAL_LINKS.email}`}>
                  <Mail className="h-5 w-5" /> {SOCIAL_LINKS.email}
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2 hover:border-accent hover:text-accent">
                <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" /> LinkedIn Profile
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2 hover:border-accent hover:text-accent">
                <Link href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" /> GitHub Profile
                </Link>
              </Button>
              <Button variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground justify-start gap-2 mt-2">
                 {/* This would link to a PDF resume, ensure it's in /public */}
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" /> Download Resume
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Bio and Skills */}
        <div className="md:col-span-2 space-y-8">
          <Card className="bg-card p-6 md:p-8 shadow-lg">
            <CardTitle className="text-2xl font-headline mb-4 text-primary-foreground">My Journey</CardTitle>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hello! I'm a dedicated professional with a multifaceted passion for the world of data and cybersecurity. My journey began with a fascination for uncovering stories hidden within datasets, which naturally led me to explore the robust field of data analysis. I thrive on transforming complex information into clear, actionable insights that drive decision-making.
              </p>
              <p>
                As I delved deeper, the predictive power of data science captivated me. I've honed my skills in machine learning and statistical modeling, building solutions that not only understand the present but also forecast future trends. This analytical mindset extends to cybersecurity, where I apply a data-driven approach to identify vulnerabilities, mitigate risks, and fortify digital defenses.
              </p>
              <p>
                I believe that the intersection of these three fields – Data Analysis, Data Science, and Cybersecurity – is where true innovation lies. My goal is to leverage this unique blend of expertise to create intelligent, secure, and impactful solutions. I am a lifelong learner, constantly seeking new challenges and opportunities to expand my knowledge.
              </p>
            </div>
          </Card>

          {skillCategories.map(category => (
            category.skills.length > 0 && (
              <Card key={category.title} className="bg-card p-6 shadow-lg">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-headline text-primary-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} skillName={skill.name} icon={skill.icon} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
