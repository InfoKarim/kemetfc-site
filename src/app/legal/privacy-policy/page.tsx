import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/shared/LegalPlaceholder";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return <LegalPlaceholder title="Privacy Policy" />;
}
