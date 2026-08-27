import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const roles = [
  "Founder & CEO",
  "Club Manager",
  "Head Coach",
  "Coaching Staff",
  "Finance Manager",
  "Team Physician / Medical Advisor",
];

export function Leadership() {
  return (
    <section className="bg-navy py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="The people building KEMET FC"
          description="Full staff profiles are published as roles are confirmed. Credentials and bios will appear here once finalized."
          light
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, idx) => (
            <Reveal key={role} delay={idx * 70}>
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-navy-800">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold/70" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
                  </svg>
                </div>
                <p className="mt-4 font-display text-lg text-white">{role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40">
                  Profile coming soon
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
