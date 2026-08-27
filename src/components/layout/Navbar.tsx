"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Crest } from "@/components/brand/Crest";
import { primaryNav } from "@/lib/nav";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy/95 backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-navy/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-8xl items-center justify-between px-6 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Crest className="h-11 w-11" priority />
          <span className="font-display text-lg tracking-[0.08em] text-white">
            KEMET FC
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-gold" : "text-white/85 hover:text-gold-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            href="/register"
            className="rounded-sm bg-gradient-to-b from-gold-light to-gold px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-navy shadow-[0_6px_18px_-6px_rgba(212,175,55,0.7)] transition-transform hover:-translate-y-0.5"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-6 pb-8 pt-2 xl:hidden">
          <nav className="flex flex-col divide-y divide-white/10">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/90 hover:text-gold-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/register"
            className="mt-6 block rounded-sm bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.14em] text-navy"
          >
            Register
          </Link>
        </div>
      ) : null}
    </header>
  );
}
