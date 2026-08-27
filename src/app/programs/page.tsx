import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Program } from "@/components/shared/Program";
import { AgeGroups } from "@/components/shared/AgeGroups";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "KEMET FC's 8-week player development program: 16 professional training sessions, small development groups, and a full assessment cycle for ages 6-12.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="A structured first step into KEMET FC"
        description="The 8-Week Player Development Program is where the KEMET Method meets the training pitch."
      />
      <Program />
      <AgeGroups />
      <FinalCta />
    </>
  );
}
