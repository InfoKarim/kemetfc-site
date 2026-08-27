import Link from "next/link";
import { Crest } from "@/components/brand/Crest";
import { footerNav, legalNav } from "@/lib/nav";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy pb-28 pt-16 text-white xl:pb-16">
      <div className="mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Crest className="h-12 w-12" />
              <div>
                <p className="font-display text-lg tracking-[0.06em]">KEMET FC</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Michigan, USA &middot; Est. 2026
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs font-display text-sm italic text-blue-light/90">
              &ldquo;Develop the Person Before the Player.&rdquo;
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Rooted in ancient wisdom. Driven by opportunity. Built for the
              future.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Legal
            </p>
            <ul className="mt-5 space-y-3">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </p>
            <p className="mt-5 text-sm text-white/70">Michigan, USA</p>
            <p className="mt-2 text-sm text-white/70">
              <Link href="/contact" className="hover:text-gold-light">
                info@kemetfc.com (placeholder)
              </Link>
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs text-white/70 transition-colors hover:border-gold hover:text-gold-light"
                >
                  {s.label.slice(0, 1)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} KEMET FC. All rights reserved.</p>
          <p>Michigan, USA &middot; Youth Soccer Academy &middot; Ages 6&ndash;12</p>
        </div>
      </div>
    </footer>
  );
}
