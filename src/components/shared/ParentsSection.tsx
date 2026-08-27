import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const items = [
  "Player progress reports",
  "Development goals",
  "Attendance",
  "Coach feedback",
  "Assessment history",
  "Program announcements",
  "Secure communication",
];

export function ParentsSection() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="For Parents"
              title="You should know how your child is developing."
              description="KEMET FC believes parents deserve meaningful communication — not just whether their child played well, but how they're growing as a player and a person."
            />
            <div className="mt-8">
              <Button href="/parents" variant="navy">
                Explore the Parent Experience
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-navy/10 bg-white px-5 py-4 text-sm font-medium text-navy shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
