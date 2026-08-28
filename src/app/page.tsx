import { Hero } from "@/components/home/Hero";
import { AssessmentDayBanner } from "@/components/home/AssessmentDayBanner";
import { Pillars } from "@/components/home/Pillars";
import { Pathway } from "@/components/home/Pathway";
import { AiTechnology } from "@/components/shared/AiTechnology";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { Program } from "@/components/shared/Program";
import { AgeGroups } from "@/components/shared/AgeGroups";
import { Method } from "@/components/shared/Method";
import { ParentsSection } from "@/components/shared/ParentsSection";
import { CoachingPhilosophy } from "@/components/shared/CoachingPhilosophy";
import { Safety } from "@/components/shared/Safety";
import { AboutStory } from "@/components/shared/AboutStory";
import { Faq } from "@/components/shared/Faq";
import { FinalCta } from "@/components/shared/FinalCta";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { allFaqItems } from "@/lib/faq-data";

export default function Home() {
  return (
    <>
      <VideoShowcase />
      <Hero />
      <AssessmentDayBanner />
      <Pillars />
      <Pathway />
      <AiTechnology compact />
      <DashboardPreview />
      <Program compact />
      <AgeGroups />
      <Method />
      <ParentsSection />
      <CoachingPhilosophy />
      <Safety />
      <AboutStory compact />
      <Faq items={allFaqItems.slice(0, 6)} />
      <FinalCta />
    </>
  );
}
