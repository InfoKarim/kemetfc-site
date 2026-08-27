import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/shared/LegalPlaceholder";

export const metadata: Metadata = { title: "Refund Policy" };

export default function Page() {
  return <LegalPlaceholder title="Refund Policy" />;
}
