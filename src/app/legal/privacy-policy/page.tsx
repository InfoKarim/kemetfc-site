import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <LegalDocument title="Privacy Policy" lastUpdated="September 1, 2026">
      <p>
        KEMET FC (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates a youth soccer academy in Michigan, USA, and
        the kemetfc.com website and player development platform. This Privacy Policy
        explains what information we collect, why, and how it&rsquo;s handled. Most of our
        players are minors — see our separate{" "}
        <a href="/legal/youth-data-privacy">Youth Data Privacy</a> page for details specific
        to children&rsquo;s data.
      </p>

      <h2>1. Information we collect</h2>
      <p>When a parent or guardian registers a player, we collect:</p>
      <ul>
        <li>Parent/guardian name, email address, and phone number</li>
        <li>Emergency contact information</li>
        <li>Player name, date of birth, and age</li>
        <li>Preferred playing position, experience level, and current team (if provided)</li>
        <li>
          Consent selections (liability waiver, emergency medical authorization, photo/video
          consent, and technology/AI data consent)
        </li>
      </ul>
      <p>
        If Player attends training or an assessment, we may also collect video footage,
        photographs, and technology-assisted assessment data — see{" "}
        <a href="/legal/photo-video-policy">Photo/Video Policy</a> and{" "}
        <a href="/legal/youth-data-privacy">Youth Data Privacy</a>.
      </p>

      <h2>2. How we use information</h2>
      <ul>
        <li>To register Player for programs and communicate with Parent about scheduling</li>
        <li>To support coaching staff in tracking Player&rsquo;s development over time</li>
        <li>
          To generate technology-assisted assessment summaries for coaches (never a
          substitute for coach judgment, and never a medical or diagnostic claim)
        </li>
        <li>For safety purposes, including emergency contact and medical response</li>
        <li>
          For promotional purposes only where photo/video consent has been separately given
        </li>
      </ul>
      <p>We do not sell player or parent data.</p>

      <h2>3. Where information is stored</h2>
      <p>
        Registration and player data is stored in a private database. Video is stored in
        private cloud object storage, not publicly accessible. Access is limited to
        authorized KEMET FC staff (coaches, reviewers, administrators) with individual
        accounts — passwords are never shared.
      </p>

      <h2>4. Third-party services</h2>
      <p>
        We use third-party infrastructure providers to host the website, database, and
        video storage, and an AI provider (Anthropic) to help generate technology-assisted
        assessment summaries from coach-reviewed data. These providers process data on our
        behalf under their own data-processing terms and do not have independent rights to
        use it.
      </p>

      <h2>5. Parent/guardian access and control</h2>
      <p>A parent or guardian linked to a player can request:</p>
      <ul>
        <li>A copy of the data we hold about their child</li>
        <li>Correction of inaccurate information</li>
        <li>Deletion of their child&rsquo;s data, subject to any legal retention requirements</li>
        <li>Withdrawal of previously given consent (e.g., photo/video) at any time</li>
      </ul>
      <p>Contact KEMET FC using the details on our <a href="/contact">Contact</a> page to make a request.</p>

      <h2>6. Data retention</h2>
      <p>
        We retain player data for as long as Player is active in a KEMET FC program, plus a
        limited period afterward for safety, legal, and program-continuity purposes.
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this policy as the platform evolves. Material changes will be
        reflected here with an updated date.
      </p>
    </LegalDocument>
  );
}
