import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Faq } from "@/components/shared/Faq";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about KEMET FC — ages, the Free AI Assessment Day, training groups, safety, and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Questions, Answered"
        description="Everything families ask before their first visit to KEMET FC. Can't find what you're looking for? Reach out and we'll get back to you directly."
      />
      <Faq title="Frequently Asked Questions" />
      <FinalCta />
    </>
  );
}
