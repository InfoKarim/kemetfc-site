import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with KEMET FC: schools, community organizations, sports facilities, sponsors, healthcare partners, and technology partners in Michigan.",
};

const partnerTypes = [
  { label: "Schools", copy: "In-school and after-school player development programming." },
  { label: "School Districts", copy: "District-wide access to structured youth soccer development." },
  { label: "Community Organizations", copy: "Bringing development-focused soccer into local community programs." },
  { label: "Sports Facilities", copy: "Training venue and field-time partnerships across Michigan." },
  { label: "Sponsors", copy: "Aligning your brand with a professional, character-driven youth academy." },
  { label: "Local Businesses", copy: "Community partnerships that support families and young athletes." },
  { label: "Healthcare Partners", copy: "Referral relationships for player safety and wellbeing." },
  { label: "Technology Partners", copy: "Collaborating on the assessment and development platform." },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Partner With KEMET FC"
        description="KEMET FC is building a long-term academy in Michigan — and building it alongside schools, organizations, and businesses who share the same commitment to young people."
      />

      <section className="bg-ivory py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Who We Partner With"
            title="Organizations building alongside KEMET FC"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((p, idx) => (
              <Reveal key={p.label} delay={idx * 60}>
                <div className="h-full rounded-md border border-navy/10 bg-white p-6 shadow-sm transition-colors hover:border-gold/50">
                  <h3 className="font-display text-lg text-navy">{p.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-gold/30 bg-navy p-10 text-center sm:p-14">
            <h3 className="font-display text-2xl text-white sm:text-3xl">
              Become a KEMET FC Partner
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Tell us about your organization and how you&rsquo;d like to work
              with KEMET FC — we&rsquo;ll follow up to discuss the fit.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                Become a KEMET FC Partner
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
