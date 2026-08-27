import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KEMET FC in Michigan for general information, registration, partnerships, sponsorship, or coaching opportunities.",
};

const topics = [
  { label: "General Information", copy: "Questions about the academy, ages, or how to get started." },
  { label: "Registration", copy: "Help with registering for the Free AI Assessment Day or a program." },
  { label: "Partnerships", copy: "Schools, community organizations, and facility partnerships." },
  { label: "Sponsorship", copy: "Brand and business sponsorship opportunities." },
  { label: "Coaching Opportunities", copy: "Interested in coaching with KEMET FC? Reach out." },
];

const socials = ["Instagram", "Facebook", "X", "YouTube"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with KEMET FC"
        description="Michigan, USA — we're happy to answer questions about the academy, registration, or partnership opportunities."
      />

      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="font-display text-2xl text-navy">
                What can we help with?
              </h2>
              <div className="mt-6 space-y-4">
                {topics.map((t) => (
                  <div key={t.label} className="rounded-md border border-navy/10 bg-white p-5">
                    <p className="font-display text-base text-navy">{t.label}</p>
                    <p className="mt-1 text-sm text-stone">{t.copy}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className={"text-xs font-semibold uppercase tracking-[0.16em] text-gold"}>
                  Follow KEMET FC
                </p>
                <div className="mt-3 flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-xs font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
                    >
                      {s.slice(0, 1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
