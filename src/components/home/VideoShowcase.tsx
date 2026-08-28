"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="pattern-geo absolute inset-0 opacity-[0.1]" aria-hidden="true" />

      <Container className="relative">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            See It In Motion
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            This Is What It Feels Like{" "}
            <span className="text-gradient-gold">to Wear the Crest.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="group relative overflow-hidden rounded-lg border border-gold/30 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-video w-full bg-navy-800">
              {reducedMotion ? (
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="/videos/kemet-fc-promo-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/kemet-fc-promo.mp4" type="video/mp4" />
                </video>
              ) : (
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="/videos/kemet-fc-promo-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src="/videos/kemet-fc-promo.mp4" type="video/mp4" />
                </video>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

              {!reducedMotion && (
                <button
                  type="button"
                  onClick={toggleSound}
                  className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-navy/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-navy/80"
                  aria-label={muted ? "Unmute video" : "Mute video"}
                >
                  {muted ? (
                    <>
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                        <path d="M3 9v6h4l5 5V4L7 9H3z" />
                        <path d="M16.5 12 20 8.5l-1.4-1.4L15 10.6l-3.5-3.5L10 8.5 13.5 12 10 15.5l1.5 1.5 3.5-3.5 3.5 3.5L20 15.5 16.5 12z" opacity="0.85" />
                      </svg>
                      Sound off
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                        <path d="M3 9v6h4l5 5V4L7 9H3z" />
                        <path d="M16 12c0-1.77-1-3.29-2.5-4.03v8.06c1.5-.74 2.5-2.26 2.5-4.03z" />
                        <path d="M14.5 4.72v2.06c2.32.86 4 3.1 4 5.72s-1.68 4.86-4 5.72v2.06c3.45-.93 6-4.08 6-7.78s-2.55-6.85-6-7.78z" />
                      </svg>
                      Sound on
                    </>
                  )}
                </button>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <p className="max-w-lg text-balance text-sm leading-relaxed text-white/85 sm:text-base">
                  From the first touch to the final whistle — a glimpse of
                  the KEMET FC experience.
                </p>
                <div className="pointer-events-auto mt-5">
                  <Button href="/register" variant="gold">
                    Register for Free Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
