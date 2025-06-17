import SectionWrapper from '@/components/shared/section-wrapper';
import ResumeTailoringForm from '@/components/shared/resume-tailoring-form';

export default function ResumeTailoringPage() {
  return (
    <SectionWrapper
      title="AI Resume Tailoring Tool"
      subtitle="Leverage AI to craft a resume summary that highlights your most relevant skills and experiences for specific job categories. Simply paste your resume and select your target areas."
    >
      <ResumeTailoringForm />
    </SectionWrapper>
  );
}
