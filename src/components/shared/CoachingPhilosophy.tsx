import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const contrasts: [string, string][] = [
  ["Long-term development", "over short-term trophies"],
  ["Decision-making", "over robotic drills"],
  ["Confidence", "over fear of mistakes"],
  ["Education", "over shouting"],
  ["Individual development", "within team football"],
  ["Character", "alongside performance"],
];

export function CoachingPhilosophy() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Coaching Philosophy"
          title="Coach the player. Develop the person."
          light
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contrasts.map(([lead, trail], idx) => (
            <Reveal key={lead} delay={idx * 70}>
              <div className="h-full rounded-md border border-white/10 bg-white/[0.04] p-6">
                <p className="font-display text-xl text-gold-light">{lead}</p>
                <p className="mt-1 text-sm text-white/60">{trail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
