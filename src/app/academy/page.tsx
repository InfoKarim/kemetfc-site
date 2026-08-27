import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Pillars } from "@/components/home/Pillars";
import { Method } from "@/components/shared/Method";
import { CoachingPhilosophy } from "@/components/shared/CoachingPhilosophy";
import { Safety } from "@/components/shared/Safety";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "The KEMET FC academy approach: five development pillars, the KEMET Method, coaching philosophy, and player safety standards.",
};

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Academy"
        title="A professional development environment, built for young players"
        description="KEMET FC is organized around one idea: development is a discipline, not an accident. Here's the framework behind every session."
      />
      <Pillars />
      <Method />
      <CoachingPhilosophy />
      <Safety />
      <FinalCta />
    </>
  );
}
