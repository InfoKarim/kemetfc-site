"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { allFaqItems, type FaqItem } from "@/lib/faq-data";

export function Faq({
  items = allFaqItems,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
  light = false,
}: {
  items?: FaqItem[];
  title?: string;
  eyebrow?: string;
  light?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={light ? "bg-navy py-24 sm:py-28" : "bg-ivory py-24 sm:py-28"}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} light={light} />

        <Reveal>
          <div
            className={`mt-12 mx-auto max-w-3xl divide-y ${
              light ? "divide-white/10" : "divide-navy/10"
            }`}
          >
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-display text-base sm:text-lg ${
                        light ? "text-white" : "text-navy"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg ${
                        light
                          ? "border-gold/50 text-gold-light"
                          : "border-gold/50 text-gold"
                      }`}
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p
                      className={`pb-6 text-sm leading-relaxed ${
                        light ? "text-white/65" : "text-stone"
                      }`}
                    >
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
