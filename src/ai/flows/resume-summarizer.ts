// 'use server';
/**
 * @fileOverview An AI agent that summarizes a resume based on specified categories.
 *
 * - summarizeResume - A function that summarizes the resume.
 * - SummarizeResumeInput - The input type for the summarizeResume function.
 * - SummarizeResumeOutput - The return type for the summarizeResume function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResumeInputSchema = z.object({
  resume: z
    .string()
    .describe('The full text of the resume to summarize.'),
  categories: z
    .array(z.enum(['Data Analysis', 'Data Science', 'Cybersecurity']))
    .describe(
      'An array of categories to tailor the resume summary towards.'
    ),
});
export type SummarizeResumeInput = z.infer<typeof SummarizeResumeInputSchema>;

const SummarizeResumeOutputSchema = z.object({
  summary: z
    .string()
    .describe('A summary of the resume, tailored to the specified categories.'),
});
export type SummarizeResumeOutput = z.infer<typeof SummarizeResumeOutputSchema>;

export async function summarizeResume(input: SummarizeResumeInput): Promise<SummarizeResumeOutput> {
  return summarizeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResumePrompt',
  input: {schema: SummarizeResumeInputSchema},
  output: {schema: SummarizeResumeOutputSchema},
  prompt: `You are an expert resume summarizer, skilled at tailoring resumes to specific job categories.

  Please provide a summary of the following resume, focusing on the categories specified. The summary should highlight the skills and experiences most relevant to those categories.

  Resume:
  {{resume}}

  Categories:
  {{#each categories}}
  - {{{this}}}
  {{/each}}
  `,
});

const summarizeResumeFlow = ai.defineFlow(
  {
    name: 'summarizeResumeFlow',
    inputSchema: SummarizeResumeInputSchema,
    outputSchema: SummarizeResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
