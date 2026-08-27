import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Pathway } from "@/components/home/Pathway";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { AgeGroups } from "@/components/shared/AgeGroups";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "Player Development",
  description:
    "How KEMET FC structures player development: the Assess-to-Reassess pathway, the player profile dashboard, and age-appropriate pathways for ages 6-12.",
};

export default function PlayerDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Player Development"
        title="Development that follows the player, not the calendar"
        description="From the first assessment to every session after it, KEMET FC replaces guesswork with a structured, repeatable process."
      />
      <Pathway />
      <DashboardPreview />
      <AgeGroups />
      <FinalCta
        title="See where your player fits in the pathway"
        description="Start with a free, no-cost AI Assessment Day."
      />
    </>
  );
}
