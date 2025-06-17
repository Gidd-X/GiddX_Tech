'use server';

import { z } from 'zod';
import { summarizeResume as summarizeResumeFlow, type SummarizeResumeInput } from '@/ai/flows/resume-summarizer';

// Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate sending email
  console.log("Contact form submitted:", parsed.data);
  // In a real app, you would send an email here using a service like SendGrid, Resend, etc.

  return { message: "Thank you! Your message has been sent successfully.", success: true };
}


// Resume Tailoring
const ResumeTailoringFormSchema = z.object({
  resumeText: z.string().min(100, { message: "Resume text must be at least 100 characters." }),
  categories: z.preprocess(
    (val) => (typeof val === 'string' ? [val] : val), // Handle single checkbox selection
    z.array(z.enum(['Data Analysis', 'Data Science', 'Cybersecurity']))
     .min(1, { message: "Please select at least one category." })
  ),
});

export type ResumeTailoringState = {
  summary?: string;
  message?: string;
  issues?: string[];
  success: boolean;
};

export async function tailorResume(
  prevState: ResumeTailoringState,
  data: FormData
): Promise<ResumeTailoringState> {
  const resumeText = data.get('resumeText') as string;
  // FormData.getAll returns an array of strings for multiple checkboxes with the same name
  const categories = data.getAll('categories') as SummarizeResumeInput['categories']; 

  const parsed = ResumeTailoringFormSchema.safeParse({ resumeText, categories });

  if (!parsed.success) {
    return {
      message: "Invalid input.",
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }
  
  try {
    const aiInput: SummarizeResumeInput = {
      resume: parsed.data.resumeText,
      categories: parsed.data.categories,
    };
    const result = await summarizeResumeFlow(aiInput);
    if (result && result.summary) {
      return { summary: result.summary, success: true };
    } else {
      return { message: "AI could not generate a summary. Please try again.", success: false };
    }
  } catch (error) {
    console.error("Error tailoring resume:", error);
    return { message: "An error occurred while tailoring the resume. Please try again later.", success: false };
  }
}
