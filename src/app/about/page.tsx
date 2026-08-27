import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AboutStory } from "@/components/shared/AboutStory";
import { Leadership } from "@/components/shared/Leadership";
import { FinalCta } from "@/components/shared/FinalCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of KEMET FC: heritage, journey, opportunity, and future — a Michigan youth soccer academy built on ancient wisdom and modern development science.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KEMET FC"
        title="Our Story"
        description="Kemet — the ancient name for Egypt — carries a legacy of discipline, knowledge, and resilience. KEMET FC brings that legacy into a new academy, built for young players in Michigan."
      />
      <AboutStory />
      <Leadership />
      <FinalCta />
    </>
  );
}
