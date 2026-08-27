"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const inputClass =
  "mt-1.5 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-stone/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

const labelClass = "text-xs font-semibold uppercase tracking-[0.1em] text-navy";

type ConsentKey =
  | "parentConsent"
  | "liabilityWaiver"
  | "emergencyMedical"
  | "photoVideo"
  | "privacyPolicy"
  | "terms";

const standardConsents: { key: ConsentKey; label: string }[] = [
  { key: "parentConsent", label: "I confirm I am the parent or legal guardian of the player named above and consent to their participation." },
  { key: "liabilityWaiver", label: "I have read and agree to the liability waiver." },
  { key: "emergencyMedical", label: "I have provided accurate emergency and medical information and will update KEMET FC of any changes." },
  { key: "photoVideo", label: "I consent to my child being photographed or filmed for KEMET FC training, evaluation, and promotional purposes." },
  {
    key: "privacyPolicy",
    label: "I have read and agree to the Privacy Policy.",
  },
  { key: "terms", label: "I have read and agree to the Terms & Conditions." },
];

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [techConsent, setTechConsent] = useState(false);
  const [consents, setConsents] = useState<Record<ConsentKey, boolean>>({
    parentConsent: false,
    liabilityWaiver: false,
    emergencyMedical: false,
    photoVideo: false,
    privacyPolicy: false,
    terms: false,
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const missing = Object.values(consents).some((v) => !v);
    if (missing || !techConsent) {
      setError(
        "Please review and check every consent item — including the technology/AI data consent — before submitting."
      );
      return;
    }

    const data = new FormData(e.currentTarget);
    const playerAge = Number(data.get("playerAge"));

    const payload = {
      parent_name: String(data.get("parentName") || ""),
      parent_email: String(data.get("email") || ""),
      parent_phone: String(data.get("phone") || ""),
      emergency_contact: String(data.get("emergencyContact") || ""),
      player_name: String(data.get("playerName") || ""),
      player_date_of_birth: String(data.get("playerDob") || ""),
      player_age: Number.isFinite(playerAge) ? playerAge : null,
      preferred_position: String(data.get("preferredPosition") || "") || null,
      experience_level: String(data.get("experience") || "") || null,
      current_team: String(data.get("currentTeam") || "") || null,
      consents: {
        parent_consent: consents.parentConsent,
        liability_waiver: consents.liabilityWaiver,
        emergency_medical: consents.emergencyMedical,
        photo_video: consents.photoVideo,
        privacy_policy: consents.privacyPolicy,
        terms: consents.terms,
        technology_ai_consent: techConsent,
      },
    };

    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/public/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(
          "We couldn't submit your registration. Please try again, or contact us directly."
        );
      }

      setSubmitted(true);
    } catch {
      setError(
        "We couldn't submit your registration. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/30 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl text-navy">
          Registration Received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone">
          Thank you for registering for KEMET FC&rsquo;s Free AI Assessment
          Day. A member of our staff will follow up with confirmation and the
          exact assessment location.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Parent / Guardian
          </p>
        </div>
        <label className="block">
          <span className={labelClass}>Parent / Guardian Name</span>
          <input required name="parentName" type="text" className={inputClass} autoComplete="name" />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input required name="email" type="email" className={inputClass} autoComplete="email" />
        </label>
        <label className="block">
          <span className={labelClass}>Phone</span>
          <input required name="phone" type="tel" className={inputClass} autoComplete="tel" />
        </label>
        <label className="block">
          <span className={labelClass}>Emergency Contact</span>
          <input required name="emergencyContact" type="text" placeholder="Name and phone number" className={inputClass} />
        </label>

        <div className="sm:col-span-2 mt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            Player
          </p>
        </div>
        <label className="block">
          <span className={labelClass}>Player Name</span>
          <input required name="playerName" type="text" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Player Date of Birth</span>
          <input required name="playerDob" type="date" className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Player Age</span>
          <input required name="playerAge" type="number" min={6} max={12} className={inputClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Preferred Position</span>
          <select name="preferredPosition" className={inputClass} defaultValue="">
            <option value="" disabled>Select a position</option>
            <option>Goalkeeper</option>
            <option>Defender</option>
            <option>Midfielder</option>
            <option>Forward</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Playing Experience</span>
          <select name="experience" className={inputClass} defaultValue="">
            <option value="" disabled>Select experience level</option>
            <option>No previous experience</option>
            <option>Recreational (1&ndash;2 years)</option>
            <option>Recreational (3+ years)</option>
            <option>Club / competitive</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Current Team (if any)</span>
          <input name="currentTeam" type="text" className={inputClass} />
        </label>
      </div>

      <div className="mt-8 border-t border-navy/10 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          Consent & Waivers
        </p>
        <div className="mt-4 space-y-3">
          {standardConsents.map((c) => (
            <label key={c.key} className="flex items-start gap-3 text-sm text-stone">
              <input
                type="checkbox"
                required
                checked={consents[c.key]}
                onChange={(e) =>
                  setConsents((prev) => ({ ...prev, [c.key]: e.target.checked }))
                }
                className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-navy/30 accent-navy"
              />
              <span>
                {c.label}
                {c.key === "privacyPolicy" ? (
                  <>
                    {" "}
                    <Link href="/legal/privacy-policy" className="underline hover:text-navy">
                      Read Privacy Policy
                    </Link>
                  </>
                ) : null}
                {c.key === "terms" ? (
                  <>
                    {" "}
                    <Link href="/legal/terms" className="underline hover:text-navy">
                      Read Terms & Conditions
                    </Link>
                  </>
                ) : null}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-md border-2 border-blue bg-blue/10 p-5">
        <label className="flex items-start gap-3 text-sm text-navy">
          <input
            type="checkbox"
            required
            checked={techConsent}
            onChange={(e) => setTechConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-navy/40 accent-navy"
          />
          <span>
            <span className="font-semibold">Technology / AI Data Consent —</span>{" "}
            I consent to KEMET FC using technology-assisted assessment tools
            to help coaches record and organize my child&rsquo;s development
            data. I understand this technology supports coach observation and
            does not replace coach decision-making, and makes no medical or
            diagnostic claims.
          </span>
        </label>
      </div>

      {error ? (
        <p className="mt-5 text-sm font-medium text-red">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 w-full rounded-sm bg-gradient-to-b from-gold-light to-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {submitting ? "Submitting…" : "Submit Registration"}
      </button>
    </form>
  );
}
