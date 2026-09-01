import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = { title: "Youth Data Privacy" };

export default function Page() {
  return (
    <LegalDocument title="Youth Data Privacy" lastUpdated="September 1, 2026">
      <p>
        Nearly all KEMET FC players are minors. This page explains, specifically, how we
        handle children&rsquo;s information, in addition to our general{" "}
        <a href="/legal/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>1. Parental consent comes first</h2>
      <p>
        We only collect a child&rsquo;s information, video, or photos with a parent or legal
        guardian&rsquo;s consent, given at registration. Consent for each purpose (participation,
        photo/video, technology/AI-assisted assessment) is requested and recorded
        separately, so agreeing to one does not imply agreeing to another.
      </p>

      <h2>2. Technology-assisted assessment</h2>
      <p>
        KEMET FC uses technology-assisted assessment tools, including computer-vision
        movement analysis and AI-generated summaries, to help coaches organize what they
        observe about a player&rsquo;s development. This technology:
      </p>
      <ul>
        <li>Never makes a medical or diagnostic claim about a child</li>
        <li>Never replaces a coach&rsquo;s own judgment or decision-making</li>
        <li>
          Is reviewed by a human coach or staff member before it is used to generate
          training guidance for a player
        </li>
      </ul>

      <h2>3. Who can see a child&rsquo;s information</h2>
      <p>
        A player&rsquo;s data is visible to: KEMET FC coaches and staff working with that player,
        administrators, and the parent(s)/guardian(s) linked to that player&rsquo;s account. It
        is not visible to other families.
      </p>

      <h2>4. Parent/guardian rights</h2>
      <p>A parent or legal guardian may, at any time:</p>
      <ul>
        <li>Request a copy of all information held about their child</li>
        <li>Withdraw consent for photo/video or technology-assisted assessment</li>
        <li>Request deletion of their child&rsquo;s data</li>
        <li>Ask questions about how a specific piece of data is used</li>
      </ul>
      <p>
        Requests can be made through our <a href="/contact">Contact</a> page. We aim to
        respond promptly.
      </p>

      <h2>5. Data we do not knowingly collect</h2>
      <p>
        We do not knowingly collect information directly from a child without a parent or
        guardian completing registration first, and we do not permit children to create
        their own accounts independent of a parent/guardian.
      </p>

      <h2>6. Security</h2>
      <p>
        Video and player records are stored in private, access-controlled systems — not
        publicly accessible. Every staff account is individual; passwords are never shared.
        If we ever believe a child&rsquo;s data may have been exposed, we will investigate,
        secure the affected systems, and notify affected families.
      </p>

      <h2>7. Contact for privacy questions</h2>
      <p>
        Parents or guardians with questions about a specific child&rsquo;s data can reach us via
        the <a href="/contact">Contact</a> page.
      </p>
    </LegalDocument>
  );
}
