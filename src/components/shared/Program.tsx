import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { end: 8, suffix: "", label: "Weeks" },
  { end: 16, suffix: "", label: "Professional Training Sessions" },
  { end: 2, suffix: "", label: "Sessions Per Week" },
];

const features = [
  "Ages 6–12",
  "Small development groups",
  "Professional coaching",
  "Baseline assessment",
  "Mid-program review",
  "Final assessment",
  "Individual player development report",
  "Parent progress communication",
];

export function Program({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="KEMET FC · Pilot Program"
          title="8-Week Player Development Program"
          description="A structured first step into the KEMET FC pathway — built around assessment, coaching, and measurable progress."
        />

        <div className="mt-12 grid grid-cols-3 gap-4 sm:max-w-xl">
          {stats.map((s) => (
            <div key={s.label} className="rounded-md border border-navy/10 bg-white p-5 text-center shadow-sm">
              <p className="font-display text-3xl text-navy sm:text-4xl">
                <CountUp end={s.end} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] uppercase leading-tight tracking-[0.08em] text-stone">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-md border border-navy/10 bg-white px-4 py-3 text-sm text-navy"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {f}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-md border border-gold/30 bg-navy p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Tuition
            </p>
            <p className="mt-1 font-display text-xl text-white">
              Pricing Coming Soon
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/register" variant="gold">
              Join the Pilot Program
            </Button>
            <Button href="/contact" variant="outline">
              Request Program Information
            </Button>
          </div>
        </div>

        {!compact ? null : (
          <div className="mt-8">
            <Button href="/programs" variant="ghost">
              Full Program Details
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
