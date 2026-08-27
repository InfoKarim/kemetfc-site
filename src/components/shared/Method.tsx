import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = ["Assess", "Plan", "Coach", "Measure", "Develop"];

const commitments = [
  "A baseline",
  "Development objectives",
  "Coach observations",
  "Progress measurements",
  "Parent communication",
  "A development pathway",
];

export function Method() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Methodology"
          title={"The KEMET Method™"}
          description="Development at KEMET FC is individualized and evidence-informed — a repeatable framework applied to every player, every cycle."
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {steps.map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-md border border-gold/40 bg-navy px-6 py-4 font-display text-lg text-white shadow-sm">
                  {step}
                </div>
                {idx < steps.length - 1 ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 max-w-2xl text-sm font-semibold uppercase tracking-[0.14em] text-navy">
            Every KEMET FC player has:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <div
                key={c}
                className="flex items-center gap-3 rounded-md border border-navy/10 bg-white px-4 py-3.5 text-sm text-navy shadow-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
