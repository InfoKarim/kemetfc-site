import Link from "next/link";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-white/10 bg-navy/95 p-3 backdrop-blur-sm xl:hidden">
      <Link
        href="/ai-assessment"
        className="flex-1 rounded-sm border border-white/25 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-white"
      >
        Free AI Assessment
      </Link>
      <Link
        href="/register"
        className="flex-1 rounded-sm bg-gradient-to-b from-gold-light to-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-navy"
      >
        Register Now
      </Link>
    </div>
  );
}
