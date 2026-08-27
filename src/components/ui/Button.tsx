import Link from "next/link";
import { ReactNode } from "react";

type Variant = "gold" | "navy" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  gold:
    "bg-gradient-to-b from-gold-light to-gold text-navy shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] hover:shadow-[0_10px_28px_-6px_rgba(212,175,55,0.75)] hover:-translate-y-0.5",
  navy:
    "bg-navy text-white shadow-[0_8px_24px_-10px_rgba(13,27,42,0.7)] hover:bg-navy-700 hover:-translate-y-0.5",
  outline:
    "border border-white/40 text-white hover:bg-white/10 hover:border-white/70",
  ghost:
    "border border-navy/15 text-navy hover:bg-navy/5",
};

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-200 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
