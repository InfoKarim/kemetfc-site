import type { Metadata } from "next";
import { LegalDocument } from "@/components/shared/LegalDocument";

export const metadata: Metadata = { title: "Liability Waiver" };

export default function Page() {
  return (
    <LegalDocument title="Liability Waiver & Assumption of Risk" lastUpdated="Draft — not yet published">
      <p>
        This Liability Waiver and Assumption of Risk (&ldquo;Waiver&rdquo;) is between the parent or
        legal guardian (&ldquo;Parent&rdquo;) registering a player (&ldquo;Player&rdquo;) and KEMET FC, a
        youth soccer academy operating in Michigan, USA (&ldquo;KEMET FC,&rdquo; &ldquo;we,&rdquo; or
        &ldquo;us&rdquo;), for participation in KEMET FC training sessions, assessment days,
        programs, and related activities (&ldquo;Activities&rdquo;).
      </p>

      <h2>1. Assumption of risk</h2>
      <p>
        Soccer and related athletic training involve inherent risks of injury, including but
        not limited to sprains, strains, collisions with other players, falls, contact with
        the ball or equipment, and, in rare cases, more serious injury. Parent acknowledges
        these risks are a normal part of the sport and voluntarily allows Player to
        participate in Activities with full knowledge of these risks.
      </p>

      <h2>2. Release of liability</h2>
      <p>
        To the fullest extent permitted by Michigan law, Parent releases and holds harmless
        KEMET FC, its coaches, staff, contractors, and venue owners from claims, liability,
        damages, or costs arising from Player&rsquo;s participation in Activities, except where
        caused by gross negligence, recklessness, or intentional misconduct on the part of
        KEMET FC or its staff.
      </p>
      <p>
        <strong>
          Note for attorney review: several states, including potentially Michigan, limit or
          prohibit a parent&rsquo;s ability to waive a minor child&rsquo;s own personal-injury claims.
          This section must be reviewed against current Michigan law before publication, and
          may need to be narrowed (e.g., to property damage or the parent&rsquo;s own claims
          only) rather than purporting to waive the Player&rsquo;s claims.
        </strong>
      </p>

      <h2>3. Emergency medical treatment</h2>
      <p>
        In the event Player is injured or becomes ill during Activities and Parent cannot
        immediately be reached, Parent authorizes KEMET FC staff to arrange necessary
        emergency medical treatment, including transport to a medical facility, at Parent&rsquo;s
        expense. KEMET FC coaches do not diagnose medical conditions and will refer any
        health concern to a qualified healthcare professional.
      </p>

      <h2>4. Equipment and conduct</h2>
      <p>
        Player is expected to wear appropriate footwear and protective equipment (including
        shin guards) as directed by coaching staff, and to follow all safety instructions.
        KEMET FC reserves the right to remove a player from an Activity for conduct that
        endangers themselves or others.
      </p>

      <h2>5. Duration</h2>
      <p>
        This Waiver applies to the specific Activity or program the Player is registered
        for and to ordinary related activities (warm-ups, small-sided games, assessments)
        during that program, unless renewed or replaced by a later version for future
        programs.
      </p>

      <h2>6. Governing law</h2>
      <p>
        This Waiver is governed by the laws of the State of Michigan.{" "}
        <strong>To be confirmed by counsel before this document is finalized.</strong>
      </p>

      <h2>7. Acknowledgment</h2>
      <p>
        By checking &ldquo;I have read and agree to the liability waiver&rdquo; during registration,
        Parent confirms they have read, understood, and agree to this Waiver on behalf of
        Player.
      </p>
    </LegalDocument>
  );
}
