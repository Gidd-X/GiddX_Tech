'use client';

import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  success: false,
};

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        reset(); // Reset form fields on successful submission
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to send message.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, reset]);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-primary-foreground">Name</Label>
        <Input
          id="name"
          {...register('name')}
          className="bg-input border-border focus:border-accent"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        {state.issues && state.fields?.name && state.issues.find(issue => issue.toLowerCase().includes('name')) && (
           <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('name'))}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-primary-foreground">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="bg-input border-border focus:border-accent"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
         {state.issues && state.fields?.email && state.issues.find(issue => issue.toLowerCase().includes('email')) && (
           <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('email'))}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject" className="text-primary-foreground">Subject</Label>
        <Input
          id="subject"
          {...register('subject')}
          className="bg-input border-border focus:border-accent"
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
        {state.issues && state.fields?.subject && state.issues.find(issue => issue.toLowerCase().includes('subject')) && (
           <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('subject'))}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-primary-foreground">Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={5}
          className="bg-input border-border focus:border-accent min-h-[120px]"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
        {state.issues && state.fields?.message && state.issues.find(issue => issue.toLowerCase().includes('message')) && (
           <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('message'))}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 text-base">
        {isSubmitting ? 'Sending...' : <>Send Message <Send className="ml-2 h-5 w-5"/></>}
      </Button>
    </form>
  );
}
