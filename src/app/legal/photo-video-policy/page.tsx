import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = { title: "Photo/Video Policy" };

export default function Page() {
  return (
    <LegalDocument title="Photo/Video Policy" lastUpdated="Draft — not yet published">
      <p>
        KEMET FC may photograph or record video of players during training sessions and
        assessments. This policy explains how that footage is used, and what a parent&rsquo;s
        photo/video consent at registration does and does not cover.
      </p>

      <h2>1. Why we record</h2>
      <ul>
        <li>
          <strong>Training and evaluation</strong> — video of a player&rsquo;s movement and play is
          reviewed by coaches (and, where a parent has separately consented, technology-
          assisted assessment tools) to inform their individual development plan
        </li>
        <li>
          <strong>Promotional use</strong> — occasional photos or highlight clips may be used
          on our website, social media, or marketing materials
        </li>
      </ul>
      <p>
        These are requested as one combined consent at registration today; a parent who
        wants to allow training/evaluation footage but opt out of promotional use should
        contact us directly, and we will treat that as an update to their consent.
      </p>

      <h2>2. What consent covers</h2>
      <p>
        Photo/video consent applies only to the player it was given for, and only to KEMET
        FC&rsquo;s own use as described above. It does not transfer footage to unrelated third
        parties for their own marketing purposes.
      </p>

      <h2>3. Withdrawing consent</h2>
      <p>
        A parent or guardian can withdraw photo/video consent at any time by contacting
        KEMET FC. Withdrawal stops future use; it does not retroactively remove material
        already published (for example, a printed flyer) where removal isn&rsquo;t practically
        possible, but we will remove it from digital channels we control.
      </p>

      <h2>4. Assessment footage vs. promotional footage</h2>
      <p>
        Footage captured specifically for technology-assisted assessment is treated as
        player development data (see <a href="/legal/youth-data-privacy">Youth Data
        Privacy</a>) and is not used for promotional purposes unless it also falls within
        the promotional consent above.
      </p>

      <h2>5. Storage and access</h2>
      <p>
        Video is stored in private, access-controlled cloud storage, not publicly
        accessible. Only authorized coaching and administrative staff can access a given
        player&rsquo;s footage.
      </p>

      <h2>6. Questions</h2>
      <p>
        Contact us via the <a href="/contact">Contact</a> page with any question about a
        specific photo or video of your child.
      </p>
    </LegalDocument>
  );
}
