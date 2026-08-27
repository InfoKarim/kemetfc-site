import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const areas = [
  "Player profiles",
  "Technical assessment",
  "Movement analysis",
  "Performance tracking",
  "Development history",
  "Coach observations",
  "Progress visualization",
  "Parent reports",
];

export function AiTechnology({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Technology With Purpose"
              title="Insight for coaches. Clarity for parents."
              description="KEMET FC uses technology-assisted assessment to help coaches understand each player's development more clearly — organized, consistent, and easy to track over time."
            />

            <div className="mt-8 rounded-md border-l-4 border-gold bg-navy/[0.04] p-5">
              <p className="font-display text-lg text-navy">
                &ldquo;Technology provides insight. Coaches make the decisions.&rdquo;
              </p>
            </div>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone">
              Technology at KEMET FC never replaces a coach&rsquo;s judgment,
              and it never makes medical or diagnostic claims. It exists to
              organize what coaches already observe, so nothing about a
              player&rsquo;s development gets lost between sessions.
            </p>

            {!compact ? (
              <div className="mt-8">
                <Button href="/register" variant="navy">
                  Learn About the Free Assessment
                </Button>
              </div>
            ) : (
              <div className="mt-8">
                <Button href="/ai-assessment" variant="navy">
                  See How Assessment Works
                </Button>
              </div>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-md border border-navy/10 bg-white px-4 py-4 text-sm font-medium text-navy shadow-sm transition-colors hover:border-gold/50"
                >
                  {area}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
