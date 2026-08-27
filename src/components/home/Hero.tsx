import { Crest } from "@/components/brand/Crest";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {/* Cinematic backdrop: layered navy gradient + pitch lines + pyramid horizon, in place of stock photography */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1b3557_0%,_#0d1b2a_55%,_#080f18_100%)]" />
        <div className="pattern-geo absolute inset-0 opacity-40" />
        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.14]"
          viewBox="0 0 1200 260"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 260 L180 90 L340 260 Z" fill="#d4af37" />
          <path d="M260 260 L520 40 L780 260 Z" fill="#d4af37" />
          <path d="M700 260 L880 110 L1060 260 Z" fill="#d4af37" />
          <path d="M950 260 L1120 130 L1200 200 L1200 260 Z" fill="#d4af37" />
        </svg>
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <circle cx="400" cy="700" r="180" fill="none" stroke="#6fa8dc" strokeWidth="1.5" />
          <line x1="400" y1="520" x2="400" y2="800" stroke="#6fa8dc" strokeWidth="1.5" />
          <line x1="80" y1="800" x2="720" y2="800" stroke="#6fa8dc" strokeWidth="1.5" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
      </div>

      <Container className="relative flex min-h-[92vh] flex-col items-center justify-center py-28 text-center sm:py-32">
        <div className="animate-fade-up flex flex-col items-center">
          <Crest className="h-24 w-24 sm:h-28 sm:w-28" priority />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-light/90">
            <span className="rounded-full border border-white/15 px-3 py-1.5">
              Ages 6&ndash;12
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1.5">
              Michigan, USA
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1.5">
              Est. 2026
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Develop the Person.
            <br />
            <span className="text-gradient-gold">Build the Player.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
            KEMET FC is a next-generation youth soccer academy combining
            professional coaching, individualized player development,
            technology, and data-informed assessment.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/register" variant="gold" className="min-w-[220px]">
              Join KEMET FC
            </Button>
            <Button
              href="/ai-assessment"
              variant="outline"
              className="min-w-[220px]"
            >
              Free AI Assessment
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
