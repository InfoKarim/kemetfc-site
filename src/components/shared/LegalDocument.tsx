import { Container } from "@/components/ui/Container";

export function LegalDocument({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border-2 border-gold bg-white p-5 text-sm leading-relaxed text-navy shadow-sm">
            <p className="font-semibold uppercase tracking-[0.14em] text-gold">
              Draft — pending attorney review
            </p>
            <p className="mt-2">
              This document has not yet been reviewed by a licensed attorney and is not
              final. It is published here so families can see what KEMET FC intends to
              agree to, and so legal counsel has a concrete starting point to review —
              not as a legally binding policy yet.
            </p>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Legal
          </p>
          <h1 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-stone">Draft last updated: {lastUpdated}</p>

          <div className="legal-prose mt-10 space-y-6 text-sm leading-relaxed text-navy sm:text-base">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
