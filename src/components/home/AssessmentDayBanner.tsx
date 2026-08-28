import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function AssessmentDayBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="pattern-geo absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-br from-navy-700 via-navy-800 to-navy shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  KEMET FC Presents
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Free AI Assessment Day
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
                  Discover your player&rsquo;s profile. Understand their
                  strengths. Build their development plan.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-sm sm:max-w-md">
                  <div>
                    <dt className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Ages</dt>
                    <dd className="mt-1 font-display text-lg text-white">6&ndash;12</dd>
                  </div>
                  <div>
                    <dt className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Cost</dt>
                    <dd className="mt-1 font-display text-lg text-gold-light">No Cost</dd>
                  </div>
                  <div>
                    <dt className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Date</dt>
                    <dd className="mt-1 font-display text-lg text-white">September 18</dd>
                  </div>
                  <div>
                    <dt className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Time</dt>
                    <dd className="mt-1 font-display text-lg text-white">6:00 &ndash; 9:00 PM</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Location</dt>
                    <dd className="mt-1 text-white/80">
                      Michigan &mdash; exact location provided after registration.
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 text-sm italic text-blue-light/80">
                  Food &amp; refreshments served at 9:00 PM.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button href="/register" variant="gold">
                    Register for Free Assessment
                  </Button>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-red">
                    Limited Spots Available
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-white/10 bg-white/5 p-8 text-center">
                <div className="rounded-sm bg-white p-3">
                  <Image
                    src="/qr-register.svg"
                    alt="QR code linking to the KEMET FC registration page"
                    width={128}
                    height={128}
                    className="h-32 w-32"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Scan to Register
                </p>
                <p className="text-[11px] text-white/40">
                  Links directly to kemetfc.com/register
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
