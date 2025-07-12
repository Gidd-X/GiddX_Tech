import Image from 'next/image';
import SectionWrapper from '@/components/shared/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Mail, Linkedin, Github, CheckCircle, Eye, Target } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const whyChooseUs = [
  'Deep Technical Expertise',
  'Tailored & Scalable Solutions',
  'Commitment to Client Success',
  'A Blend of Local Insight and Global Perspective',
  'Ethical, Transparent, and Result-Driven Approach',
];

export default function AboutPage() {
  return (
    <SectionWrapper title="About GIDDX TECH-SOLUTIONS" subtitle="Innovating Tomorrow’s Solutions Today">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Photo and Contact */}
        <div className="md:col-span-1 space-y-6">
          <Card className="bg-card shadow-lg overflow-hidden">
            <div className="relative w-full aspect-square">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Gideon Akporido"
                layout="fill"
                objectFit="cover"
                className="transition-transform hover:scale-105 duration-300"
                data-ai-hint="professional portrait man"
                priority
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Gideon Akporido</h3>
              <p className="text-accent">Founder & Tech-Solutions Specialist</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary">Connect & Contact</CardTitle>
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
                <Link href="/contact">
                  <Mail className="h-5 w-5" /> Work With Us
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Bio and Details */}
        <div className="md:col-span-2 space-y-8">
          <Card className="bg-card p-6 md:p-8 shadow-lg">
            <CardTitle className="text-2xl font-headline mb-4 text-primary">About Our Company</CardTitle>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                GIDDX TECH-SOLUTIONS is a forward-thinking Nigerian-based tech consultancy specializing in innovative, reliable, and scalable digital solutions. We are committed to empowering individuals, startups, and organizations with the tools and strategies they need to thrive in today’s fast-paced digital world.
              </p>
              <p>
                Founded by Gideon Akporido, a tech-solutions specialist with a passion for data, cybersecurity, and transformative technology, GIDDX TECH-SOLUTIONS was born out of a vision to bridge the digital gap between potential and performance in Africa’s growing tech ecosystem.
              </p>
            </div>
          </Card>

          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="bg-card p-6 shadow-lg">
                <CardHeader className="p-0 mb-4 flex flex-row items-center gap-3">
                    <Eye className="h-8 w-8 text-accent" />
                    <CardTitle className="text-xl font-headline text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-muted-foreground">To be a trusted leader in delivering cutting-edge technology solutions that drive sustainable growth and digital excellence across Africa and beyond.</p>
                </CardContent>
            </Card>
             <Card className="bg-card p-6 shadow-lg">
                <CardHeader className="p-0 mb-4 flex flex-row items-center gap-3">
                    <Target className="h-8 w-8 text-accent" />
                    <CardTitle className="text-xl font-headline text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-muted-foreground">To deliver tailor-made solutions in cybersecurity, data analytics, IT consulting, and software engineering that solve real-world problems.</p>
                </CardContent>
            </Card>
          </div>

          <Card className="bg-card p-6 md:p-8 shadow-lg">
            <CardTitle className="text-2xl font-headline mb-4 text-primary">Why Choose Us?</CardTitle>
            <ul className="space-y-3">
                {whyChooseUs.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground text-lg">{reason}</span>
                    </li>
                ))}
            </ul>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
