import SectionWrapper from '@/components/shared/section-wrapper';
import ResumeTailoringForm from '@/components/shared/resume-tailoring-form';
import { redirect } from 'next/navigation';

export default function ResumeTailoringPage() {
  // This page is no longer part of the GIDDX site, so we redirect.
  redirect('/contact');

  // We can return null as redirect() will throw an error to stop rendering.
  return null;

  /*
  // Original content is commented out in case it's needed later.
  return (
    <SectionWrapper
      title="AI Resume Tailoring Tool"
      subtitle="Leverage AI to craft a resume summary that highlights your most relevant skills and experiences for specific job categories. Simply paste your resume and select your target areas."
    >
      <ResumeTailoringForm />
    </SectionWrapper>
  );
  */
}
