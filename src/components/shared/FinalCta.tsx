import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta({
  title = "Ready to see what your player can become?",
  description = "Start with a free, no-cost AI Assessment Day — no obligation, just clarity.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-700 to-navy py-24 text-center sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.1]" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/register" variant="gold" className="min-w-[220px]">
              Register for Free Assessment
            </Button>
            <Button href="/contact" variant="outline" className="min-w-[220px]">
              Contact KEMET FC
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
