import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ParentsSection } from "@/components/shared/ParentsSection";
import { Safety } from "@/components/shared/Safety";
import { Faq } from "@/components/shared/Faq";
import { allFaqItems } from "@/lib/faq-data";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "Parents",
  description:
    "What KEMET FC parents can expect: progress reports, development goals, attendance, coach feedback, assessment history, and player safety standards.",
};

const parentFaq = allFaqItems.filter((item) =>
  [
    "How do parents receive progress reports?",
    "Where are training sessions located?",
    "What happens if a player is injured?",
    "What equipment does my child need?",
    "How many players are in each training group?",
  ].includes(item.q)
);

export default function ParentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Parents"
        title="The Parent Experience"
        description="KEMET FC believes parents deserve meaningful, ongoing communication — not just a final score."
      />
      <ParentsSection />
      <Safety />
      <Faq items={parentFaq} title="Parent Questions" eyebrow="FAQ" />
      <FinalCta />
    </>
  );
}
