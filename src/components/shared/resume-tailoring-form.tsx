'use client';

import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { tailorResume, type ResumeTailoringState } from '@/lib/actions';
import { ALL_CATEGORIES, type ProjectCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ResumeTailoringFormSchema = z.object({
  resumeText: z.string().min(100, { message: "Resume text must be at least 100 characters." }),
  categories: z.array(z.enum(ALL_CATEGORIES))
    .min(1, { message: "Please select at least one category." }),
});

type ResumeFormValues = z.infer<typeof ResumeTailoringFormSchema>;

const initialState: ResumeTailoringState = {
  success: false,
};

export default function ResumeTailoringForm() {
  const [state, formAction] = useFormState(tailorResume, initialState);
  const { toast } = useToast();
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<ResumeFormValues>({
    resolver: zodResolver(ResumeTailoringFormSchema),
    defaultValues: {
      resumeText: '',
      categories: [],
    },
  });

  const watchedCategories = watch('categories');

  useEffect(() => {
    setIsSubmittingForm(false); // Reset submitting state when formAction completes
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    } else if (state.success && state.summary) {
        toast({
          title: "Resume Summary Generated!",
          description: "Your tailored summary is ready below.",
        });
    }
  }, [state, toast]);
  
  const onSubmit = async (data: ResumeFormValues) => {
    setIsSubmittingForm(true);
    const formData = new FormData();
    formData.append('resumeText', data.resumeText);
    data.categories.forEach(category => formData.append('categories', category));
    await formAction(formData); // This should trigger the useEffect for state changes
  };


  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <Card className="bg-card p-6 shadow-xl">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-2xl font-headline text-primary-foreground">Tailor Your Resume</CardTitle>
          <CardDescription className="text-muted-foreground">
            Paste your resume and select categories to generate an AI-powered summary highlighting relevant skills.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label htmlFor="resumeText" className="text-primary-foreground block mb-2 text-lg">Your Resume Text</Label>
            <Textarea
              id="resumeText"
              {...register('resumeText')}
              rows={15}
              placeholder="Paste your full resume text here..."
              className="bg-input border-border focus:border-accent min-h-[300px] text-base"
              aria-invalid={errors.resumeText ? "true" : "false"}
            />
            {errors.resumeText && <p className="text-sm text-destructive mt-1">{errors.resumeText.message}</p>}
             {state.issues && state.issues.find(issue => issue.toLowerCase().includes('resume')) && (
               <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('resume'))}</p>
            )}
          </div>

          <div>
            <Label className="text-primary-foreground block mb-3 text-lg">Target Categories</Label>
            <div className="space-y-3">
              {ALL_CATEGORIES.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    value={category}
                    {...register('categories')}
                    checked={watchedCategories.includes(category)}
                    className="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground border-border"
                  />
                  <Label htmlFor={`category-${category}`} className="text-base text-muted-foreground cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
            {errors.categories && <p className="text-sm text-destructive mt-1">{errors.categories.message}</p>}
             {state.issues && state.issues.find(issue => issue.toLowerCase().includes('category')) && (
               <p className="text-sm text-destructive mt-1">{state.issues.find(issue => issue.toLowerCase().includes('category'))}</p>
            )}
          </div>

          <Button type="submit" disabled={isSubmittingForm} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 text-base">
            {isSubmittingForm ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating...
              </>
            ) : (
              <>
                Generate Summary <Wand2 className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Card>

      <Card className="bg-card p-6 shadow-xl sticky top-24">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-2xl font-headline text-primary-foreground">Generated Summary</CardTitle>
          <CardDescription className="text-muted-foreground">
            Your AI-tailored resume summary will appear here.
          </CardDescription>
        </CardHeader>
        <ScrollArea className="h-[400px] p-4 rounded-md border border-dashed border-border bg-input">
          {isSubmittingForm && !state.summary && (
             <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-accent mb-4" />
                <p className="text-lg">Generating your summary...</p>
                <p className="text-sm">This may take a moment.</p>
            </div>
          )}
          {!isSubmittingForm && state.success && state.summary && (
            <div className="prose prose-sm prose-invert max-w-none text-primary-foreground whitespace-pre-line">
              {state.summary}
            </div>
          )}
          {!isSubmittingForm && !state.success && state.message && !state.summary && (
            <p className="text-destructive">{state.message}</p>
          )}
          {!isSubmittingForm && !state.summary && !state.message && (
             <p className="text-muted-foreground text-center pt-16">Your tailored summary will appear here once generated.</p>
          )}
        </ScrollArea>
      </Card>
    </div>
  );
}
