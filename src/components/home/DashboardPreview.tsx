import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const bars = [
  { label: "Technical", value: 80 },
  { label: "Tactical", value: 65 },
  { label: "Physical", value: 75 },
  { label: "Psychological", value: 60 },
  { label: "Character", value: 90 },
];

export function DashboardPreview() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Player Profile Dashboard"
          title="A clear picture of every player's development"
          description="Illustrative preview — the real dashboard is built with families and coaches as the platform rolls out."
          light
        />

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-lg border border-white/10 bg-navy-800 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Player Profile &middot; Sample
                </p>
                <p className="font-display text-lg text-white">A. Youth Player &middot; U10</p>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-white/60">
                Illustrative Data
              </span>
            </div>

            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                  Overall Development
                </p>
                <svg viewBox="-30 0 360 280" className="mt-4 w-full max-w-sm">
                  <polygon points="150,40 254.6,116 214.7,239 85.3,239 45.4,116" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                  <polygon points="150,77.4 219,127.6 192.7,208.7 107.3,208.7 81,127.6" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <polygon points="150,113.7 184.5,138.8 171.4,179.4 128.6,179.4 115.5,138.8" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="150" y1="150" x2="150" y2="40" stroke="rgba(255,255,255,0.1)" />
                  <line x1="150" y1="150" x2="254.6" y2="116" stroke="rgba(255,255,255,0.1)" />
                  <line x1="150" y1="150" x2="214.7" y2="239" stroke="rgba(255,255,255,0.1)" />
                  <line x1="150" y1="150" x2="85.3" y2="239" stroke="rgba(255,255,255,0.1)" />
                  <line x1="150" y1="150" x2="45.4" y2="116" stroke="rgba(255,255,255,0.1)" />

                  <polygon
                    points="150,62 218,128 198.5,216.75 111.2,203.4 55.9,119.4"
                    fill="rgba(212,175,55,0.28)"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />

                  <text x="150" y="26" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="600">Technical</text>
                  <text x="262" y="112" textAnchor="start" fill="#ffffff" fontSize="11" fontWeight="600">Tactical</text>
                  <text x="222" y="258" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="600">Physical</text>
                  <text x="78" y="258" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="600">Psychological</text>
                  <text x="38" y="112" textAnchor="end" fill="#ffffff" fontSize="11" fontWeight="600">Character</text>
                </svg>

                <div className="mt-2 space-y-3">
                  {bars.map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-xs text-white/60">
                        <span>{bar.label}</span>
                        <span>{bar.value}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-light to-gold"
                          style={{ width: `${bar.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Current Strengths", copy: "1v1 dribbling, first touch under pressure, communication on the ball." },
                  { title: "Development Priorities", copy: "Scanning before receiving; finishing with the weaker foot." },
                  { title: "Coach Notes", copy: "Responds well to challenge-based drills; ready for more decision-making reps." },
                  { title: "Attendance", copy: "14 of 16 sessions attended this cycle." },
                  { title: "Assessment History", copy: "Baseline · Mid-Program · Final assessment on file." },
                  { title: "Individual Development Plan", copy: "Three focus objectives set with the coaching staff." },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-light">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {card.copy}
                    </p>
                  </div>
                ))}
                <div className="rounded-md border border-dashed border-white/15 p-4 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-light">
                    Progress Over Time
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Development trend line across each assessment cycle &mdash; visualized as the parent and player portals launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Button href="/player-development" variant="outline">
            View How Player Development Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
