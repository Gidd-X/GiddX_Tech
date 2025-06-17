import SectionWrapper from '@/components/shared/section-wrapper';
import ContactForm from '@/components/shared/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <SectionWrapper
      title="Get In Touch"
      subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out."
    >
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <Card className="bg-card p-6 sm:p-8 shadow-xl">
             <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-headline text-primary-foreground">Send me a message</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <ContactForm />
          </Card>
        </div>
        <div className="md:col-span-2 space-y-6">
           <Card className="bg-card p-6 shadow-lg">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-headline text-primary-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-foreground">Email</h4>
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-muted-foreground hover:text-accent transition-colors break-all">{SOCIAL_LINKS.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-foreground">LinkedIn</h4>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">linkedin.com/in/yourusername</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-foreground">Location</h4>
                  <p className="text-muted-foreground">Remote / Your City, Country (Optional)</p>
                </div>
              </div>
            </CardContent>
          </Card>
           <Card className="bg-card p-6 shadow-lg">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl font-headline text-primary-foreground">Availability</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <p className="text-muted-foreground">
                I am currently available for freelance projects and full-time opportunities. Let's connect to see how we can work together.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
