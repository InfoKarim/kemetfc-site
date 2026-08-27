import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const journey = [
  { label: "Heritage", copy: "Kemet — the ancient name for Egypt — represents discipline, knowledge, and resilience passed down across generations." },
  { label: "Journey", copy: "That heritage travels to Michigan, where a new academy is built for a new generation of players and families." },
  { label: "Opportunity", copy: "American opportunity meets structured, professional-style development, accessible to young players from day one." },
  { label: "Future", copy: "KEMET FC is building toward a long-term pathway — for the person a player becomes, as much as the footballer." },
];

export function AboutStory({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Story"
          title="Rooted in ancient wisdom. Driven by opportunity."
          description="KEMET represents heritage, knowledge, discipline, and resilience — carried forward into the American environment where this academy is being built."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((step, idx) => (
            <Reveal key={step.label} delay={idx * 90}>
              <div className="relative h-full rounded-md border border-navy/10 bg-white p-6 shadow-sm">
                <span className="font-display text-3xl text-gold/60">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-lg text-navy">
                  {step.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {compact ? (
          <div className="mt-10">
            <Button href="/about" variant="navy">
              Read the Full Story
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
