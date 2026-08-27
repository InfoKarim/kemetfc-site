import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AiTechnology } from "@/components/shared/AiTechnology";
import { AssessmentDayBanner } from "@/components/home/AssessmentDayBanner";
import { Faq } from "@/components/shared/Faq";
import { allFaqItems } from "@/lib/faq-data";

export const metadata: Metadata = {
  title: "AI Assessment",
  description:
    "KEMET FC's Free AI Assessment Day: a free, no-cost player assessment for ages 6-12 in Michigan, backed by technology-assisted insight and coach-led decisions.",
};

const assessmentFaq = allFaqItems.filter((item) =>
  [
    "What is the Free AI Assessment Day?",
    "How does the player assessment work?",
    "Does AI decide whether my child is accepted?",
    "What happens after the assessment?",
    "What ages does KEMET FC accept?",
  ].includes(item.q)
);

export default function AiAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Assessment"
        title="Understand your player, before you commit to anything"
        description="KEMET FC's assessment process combines structured coach observation with organized, technology-assisted tracking — so every family leaves with clarity, not guesswork."
      />
      <AssessmentDayBanner />
      <AiTechnology />
      <Faq items={assessmentFaq} title="Assessment Questions" eyebrow="FAQ" />
    </>
  );
}
