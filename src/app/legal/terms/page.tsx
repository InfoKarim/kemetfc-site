import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <LegalDocument title="Terms & Conditions" lastUpdated="September 1, 2026">
      <p>
        These Terms & Conditions (&ldquo;Terms&rdquo;) govern registration for and participation in
        KEMET FC programs, and use of the kemetfc.com website. By registering a player or
        using this website, Parent agrees to these Terms on behalf of themselves and Player.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        KEMET FC programs are currently open to players ages 6–12. Registration must be
        completed by a parent or legal guardian.
      </p>

      <h2>2. Registration and acceptance</h2>
      <p>
        Submitting the registration form is a request to join a KEMET FC program, not a
        guarantee of a spot. KEMET FC will confirm registration, program dates, and location
        details directly with Parent. Free Assessment Day spots are limited and offered on a
        first-registered basis.
      </p>

      <h2>3. Program fees</h2>
      <p>
        The Free AI Assessment Day has no cost. Pricing for the 8-Week Player Development
        Program will be communicated before payment is requested; see our{" "}
        <a href="/legal/refund-policy">Refund Policy</a> for cancellation terms once pricing
        is finalized.
      </p>

      <h2>4. Conduct</h2>
      <p>
        Players, parents, and guardians are expected to treat coaches, staff, and other
        families with respect. KEMET FC may decline or discontinue a player&rsquo;s participation
        for conduct that endangers safety or repeatedly disrupts sessions, with a
        conversation with Parent first wherever possible.
      </p>

      <h2>5. Health and safety</h2>
      <p>
        Parent confirms the medical and emergency information provided at registration is
        accurate and will notify KEMET FC of any changes. Participation is also subject to
        our <a href="/legal/liability-waiver">Liability Waiver</a>.
      </p>

      <h2>6. Photos, video, and technology-assisted assessment</h2>
      <p>
        Use of photos, video, and technology-assisted (including AI-assisted) assessment
        tools is governed separately by our{" "}
        <a href="/legal/photo-video-policy">Photo/Video Policy</a> and{" "}
        <a href="/legal/youth-data-privacy">Youth Data Privacy</a> pages, and only occurs
        where Parent has given the corresponding consent at registration.
      </p>

      <h2>7. Website use</h2>
      <p>
        The kemetfc.com website and any parent/player portal are provided for the purpose of
        registering for and following a player&rsquo;s development at KEMET FC. Accounts are
        personal to the parent/guardian or coach they were issued to and should not be
        shared.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        Except for injury-related matters covered by the{" "}
        <a href="/legal/liability-waiver">Liability Waiver</a>, KEMET FC&rsquo;s liability under
        these Terms is limited to the amount paid for the relevant program.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Michigan.
      </p>

      <h2>10. Changes to these Terms</h2>
      <p>
        We may update these Terms as programs evolve. Continued participation after an
        update constitutes acceptance of the revised Terms.
      </p>
    </LegalDocument>
  );
}
