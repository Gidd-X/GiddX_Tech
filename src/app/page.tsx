import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/section-wrapper';
import { ArrowRight, ShieldCheck, BarChart2, Briefcase, Code2, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const expertiseAreas = [
  {
    title: 'Cybersecurity Solutions',
    description: 'From awareness training to penetration testing, we help secure your digital infrastructure against modern threats.',
    icon: ShieldCheck,
    link: '/cybersecurity',
  },
  {
    title: 'Data Solutions',
    description: 'We analyze, visualize, and draw actionable insights from your data to drive smarter business decisions.',
    icon: BarChart2,
    link: '/projects?category=Data+Analysis',
  },
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to streamline your IT systems and operations, whether you\'re a startup or a scaling business.',
    icon: Briefcase,
    link: '/projects?category=IT+Consulting',
  },
  {
    title: 'Software Engineering',
    description: 'We design and develop intuitive, custom software products tailored to your unique business needs.',
    icon: Code2,
    link: '/projects?category=Software+Engineering',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-br from-background to-card pt-20 pb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
          Innovating Tomorrow’s Solutions Today
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
         A forward-thinking Nigerian-based tech consultancy specializing in innovative, reliable, and scalable digital solutions for individuals, startups, and organizations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transition-transform hover:scale-105">
            <Link href="/projects">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/20 hover:text-accent font-semibold shadow-lg transition-transform hover:scale-105">
            <Link href="/about">
              About GIDDX TECH
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Expertise Overview Section */}
      <SectionWrapper title="What We Do" subtitle="At GIDDX TECH-SOLUTIONS, we provide a range of specialized services to empower your business.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area) => (
            <Card key={area.title} className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col group">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-accent/20 rounded-full mb-4 group-hover:bg-accent/30 transition-colors">
                  <area.icon className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="font-headline text-2xl text-primary">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-center mb-6">{area.description}</p>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild variant="ghost" className="w-full text-accent hover:bg-accent/20 hover:text-accent-foreground group-hover:text-accent-foreground">
                  <Link href={area.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Call to Action Section */}
      <SectionWrapper className="bg-card">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold mb-4 text-primary">Let's Build the Future Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            GIDDX TECH-SOLUTIONS isn’t just a service provider — we’re your tech partner on the journey to growth. Let's connect.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg transition-transform hover:scale-105">
            <Link href="/contact">
              Get In Touch <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
