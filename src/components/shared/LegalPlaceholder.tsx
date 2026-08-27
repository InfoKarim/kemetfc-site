import { Container } from "@/components/ui/Container";

export function LegalPlaceholder({ title }: { title: string }) {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl rounded-lg border border-navy/10 bg-white p-10 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Legal
          </p>
          <h1 className="mt-3 font-display text-2xl text-navy sm:text-3xl">
            {title}
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-stone">
            This policy is being finalized and will be published here before
            KEMET FC collects any registration or player data in production.
            For questions in the meantime, please contact KEMET FC directly.
          </p>
        </div>
      </Container>
    </section>
  );
}
