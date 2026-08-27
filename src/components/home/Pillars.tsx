import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const pillars = [
  {
    key: "technical",
    label: "Technical",
    items: ["Ball mastery", "Passing", "Receiving", "Dribbling", "Finishing", "1v1 ability"],
  },
  {
    key: "tactical",
    label: "Tactical",
    items: ["Game understanding", "Decision-making", "Positioning", "Space recognition"],
  },
  {
    key: "physical",
    label: "Physical",
    items: [
      "Movement quality",
      "Coordination",
      "Speed",
      "Agility",
      "Age-appropriate athletic development",
    ],
  },
  {
    key: "psychological",
    label: "Psychological",
    items: ["Confidence", "Focus", "Resilience", "Problem-solving"],
  },
  {
    key: "character",
    label: "Character",
    items: ["Discipline", "Respect", "Leadership", "Accountability", "Teamwork"],
  },
];

const icons: Record<string, React.ReactNode> = {
  technical: (
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v18M3 12h18M6 6l12 12M18 6 6 18" />
  ),
  tactical: <path d="M4 12h16M4 6h10M4 18h7M17 15l3 3-3 3" />,
  physical: <path d="M6 20V10m6 10V4m6 16v-7" />,
  psychological: <path d="M12 3a5 5 0 0 0-5 5c0 2 1 3 1 5v2h8v-2c0-2 1-3 1-5a5 5 0 0 0-5-5ZM10 20h4" />,
  character: <path d="M12 21c4-2 7-5 7-10V5l-7-2-7 2v6c0 5 3 8 7 10Z" />,
};

export function Pillars() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why KEMET FC"
          title="Five pillars behind every session"
          description="Every training block at KEMET FC is designed against a whole-player framework — because a complete footballer is built on more than technique alone."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.key} delay={idx * 80}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-md border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl">
                <div className="pattern-pyramid-row absolute inset-x-0 top-0 h-1.5 opacity-0 transition-opacity group-hover:opacity-100" />
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icons[pillar.key]}
                </svg>
                <h3 className="mt-5 font-display text-xl text-navy">
                  {pillar.label}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-stone">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
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
