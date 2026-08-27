import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/shared/LegalPlaceholder";

export const metadata: Metadata = { title: "Photo/Video Policy" };

export default function Page() {
  return <LegalPlaceholder title="Photo/Video Policy" />;
}
