import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const groups = [
  {
    name: "Foundation",
    ages: "Ages 6–8",
    focus: [
      "Fun",
      "Movement",
      "Ball mastery",
      "Coordination",
      "Confidence",
      "Creativity",
      "Basic football understanding",
    ],
    accent: "blue" as const,
  },
  {
    name: "Development",
    ages: "Ages 9–12",
    focus: [
      "Technical execution",
      "Decision-making",
      "1v1 ability",
      "Combination play",
      "Game intelligence",
      "Position-specific understanding",
      "Competitive development",
    ],
    accent: "gold" as const,
  },
];

export function AgeGroups() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Age Groups"
          title="Two pathways, one philosophy"
          description="Training is age-appropriate by design — the same development philosophy, expressed differently at each stage."
          light
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {groups.map((group, idx) => (
            <Reveal key={group.name} delay={idx * 100}>
              <div
                className={`relative overflow-hidden rounded-lg border p-8 ${
                  group.accent === "gold"
                    ? "border-gold/40 bg-gradient-to-br from-navy-700 to-navy-800"
                    : "border-blue/30 bg-gradient-to-br from-navy-800 to-navy"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    group.accent === "gold" ? "text-gold" : "text-blue-light"
                  }`}
                >
                  {group.ages}
                </p>
                <h3 className="mt-2 font-display text-3xl text-white">
                  {group.name}
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {group.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <span
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                          group.accent === "gold" ? "bg-gold" : "bg-blue-light"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
