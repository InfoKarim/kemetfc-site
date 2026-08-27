import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const steps = [
  { n: "01", label: "Assess", copy: "A structured baseline across technical, tactical, physical, psychological, and character markers." },
  { n: "02", label: "Understand", copy: "Coaches translate the assessment into a clear picture of the player today." },
  { n: "03", label: "Plan", copy: "An individual development plan is built around real strengths and priorities." },
  { n: "04", label: "Train", copy: "Sessions are coached against that plan, inside a full team environment." },
  { n: "05", label: "Measure", copy: "Progress is tracked against the baseline, not against other players." },
  { n: "06", label: "Develop", copy: "The plan evolves as the player grows, on and off the ball." },
  { n: "07", label: "Reassess", copy: "The cycle repeats — development is continuous, not a one-time event." },
];

export function Pathway() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Player Development Pathway"
          title="Every player enters a pathway, not just a practice"
          description="KEMET FC players move through a structured, repeating development cycle — so growth is intentional, not incidental."
          light
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-7 lg:gap-3">
          {steps.map((step, idx) => (
            <Reveal key={step.n} delay={idx * 70} className="relative">
              <div className="flex h-full flex-col rounded-md border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50 hover:bg-white/[0.08]">
                <span className="font-display text-2xl text-gold">{step.n}</span>
                <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.1em] text-white">
                  {step.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  {step.copy}
                </p>
              </div>
              {idx < steps.length - 1 ? (
                <div className="mt-3 flex justify-center text-gold/50 lg:absolute lg:right-[-14px] lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
                  <svg width="18" height="18" viewBox="0 0 24 24" className="rotate-90 lg:rotate-0" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/player-development" variant="outline">
            Explore Player Development
          </Button>
        </div>
      </Container>
    </section>
  );
}
