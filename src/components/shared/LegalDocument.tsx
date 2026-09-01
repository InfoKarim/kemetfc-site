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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Legal
          </p>
          <h1 className="mt-3 font-display text-3xl text-navy sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-stone">Last updated: {lastUpdated}</p>

          <div className="legal-prose mt-10 space-y-6 text-sm leading-relaxed text-navy sm:text-base">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
