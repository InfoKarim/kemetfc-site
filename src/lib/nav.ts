export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Academy", href: "/academy" },
  { label: "Player Development", href: "/player-development" },
  { label: "AI Assessment", href: "/ai-assessment" },
  { label: "Programs", href: "/programs" },
  { label: "Parents", href: "/parents" },
  { label: "About", href: "/about" },
  { label: "Partnerships", href: "/partnerships" },
];

export const footerNav: NavItem[] = [
  { label: "Academy", href: "/academy" },
  { label: "Programs", href: "/programs" },
  { label: "AI Assessment", href: "/ai-assessment" },
  { label: "Parents", href: "/parents" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "FAQ", href: "/faq" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Youth Data Privacy", href: "/legal/youth-data-privacy" },
  { label: "Photo/Video Policy", href: "/legal/photo-video-policy" },
  { label: "Refund Policy", href: "/legal/refund-policy" },
];
