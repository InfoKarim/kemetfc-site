import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/shared/LegalPlaceholder";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return <LegalPlaceholder title="Terms & Conditions" />;
}
