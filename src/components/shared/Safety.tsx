import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  "Coach background screening",
  "Age-appropriate training",
  "Emergency action planning",
  "Player check-in / check-out",
  "Injury escalation procedures",
  "Parent emergency contacts",
  "Safeguarding standards",
  "Qualified healthcare referral when appropriate",
];

export function Safety() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Player Safety"
          title="Player safety comes first."
          light
        />

        <Reveal>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/80"
              >
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-white/60">
            Coaches do not diagnose medical conditions or override healthcare
            restrictions. Any concern is referred to qualified healthcare
            professionals and communicated directly with parents.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
