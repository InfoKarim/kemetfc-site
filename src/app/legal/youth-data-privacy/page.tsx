import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/shared/LegalPlaceholder";

export const metadata: Metadata = { title: "Youth Data Privacy" };

export default function Page() {
  return <LegalPlaceholder title="Youth Data Privacy" />;
}
