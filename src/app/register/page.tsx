import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { RegistrationForm } from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register for KEMET FC's Free AI Assessment Day — ages 6-12, no cost, Michigan. Start the enrollment funnel toward the 8-week development program.",
};

const steps = [
  { n: 1, title: "Create Parent Account" },
  { n: 2, title: "Add Player" },
  { n: 3, title: "Register for Assessment" },
  { n: 4, title: "Complete Consent Forms" },
  { n: 5, title: "Attend Assessment" },
  { n: 6, title: "Receive Player Profile" },
  { n: 7, title: "Choose Development Program" },
];

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Start Registration"
        description="Register for the Free AI Assessment Day below — it's the first step in the KEMET FC pathway."
      />

      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="The Process" title="Seven steps to KEMET FC" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <Reveal key={step.n} delay={idx * 60}>
                <div className="flex h-full items-start gap-3 rounded-md border border-navy/10 bg-white p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm text-gold">
                    {step.n}
                  </span>
                  <span className="pt-1 text-sm font-semibold text-navy">
                    {step.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory pb-24 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Step 3"
              title="Register for the Free AI Assessment Day"
              description="Ages 6–12 · No cost · September 18, 6:00–9:00 PM · Michigan"
            />
            <div className="mt-10">
              <RegistrationForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
