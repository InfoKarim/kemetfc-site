import { Container } from "@/components/ui/Container";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-24 sm:pb-24 sm:pt-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <Container className="relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <div className="divider-gold mx-auto mt-6" />
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
