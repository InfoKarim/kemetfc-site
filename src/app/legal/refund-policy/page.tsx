import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = { title: "Refund Policy" };

export default function Page() {
  return (
    <LegalDocument title="Refund Policy" lastUpdated="September 1, 2026">
      <div className="rounded-md border border-navy/15 bg-navy/5 p-4 text-sm text-navy">
        Pricing for the 8-Week Player Development Program has not been finalized yet
        (&ldquo;Pricing Coming Soon&rdquo; on our Programs page). The specific windows and amounts
        below are a starting structure only and need to be set by KEMET FC once pricing is
        decided.
      </div>

      <h2>1. Free Assessment Day</h2>
      <p>
        The Free AI Assessment Day has no cost, so no refund applies. If you can no longer
        attend, please let us know so we can offer your spot to another family.
      </p>

      <h2>2. Paid programs</h2>
      <p>Once a paid program (such as the 8-Week Player Development Program) begins accepting payment:</p>
      <ul>
        <li>
          <strong>Before the program starts:</strong> a full refund, minus any stated
          non-refundable registration fee. <em>Exact deadline to be set.</em>
        </li>
        <li>
          <strong>After the program starts:</strong> a prorated refund for unattended
          remaining sessions may be available at KEMET FC&rsquo;s discretion.{" "}
          <em>Exact terms to be set.</em>
        </li>
        <li>
          <strong>Missed individual sessions</strong> due to illness or injury: contact us —
          we will work with families reasonably rather than apply a rigid rule.{" "}
          <em>Exact policy to be set.</em>
        </li>
      </ul>

      <h2>3. Program cancellation by KEMET FC</h2>
      <p>
        If KEMET FC cancels a program or session (for example, due to weather, low
        enrollment, or venue issues), affected families will receive a full refund or the
        option to transfer to a future session, at the family&rsquo;s choice.
      </p>

      <h2>4. How to request a refund</h2>
      <p>
        Contact us via the <a href="/contact">Contact</a> page with your player&rsquo;s name and
        registration details. We aim to process approved refunds within a stated number of
        business days once payment processing is set up.{" "}
        <strong>To be confirmed once a payment provider is selected.</strong>
      </p>
    </LegalDocument>
  );
}
