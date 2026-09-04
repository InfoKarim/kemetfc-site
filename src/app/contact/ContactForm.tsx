"use client";

import { FormEvent, useState } from "react";

const inputClass =
  "mt-1.5 w-full rounded-sm border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-stone/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/30";

const labelClass = "text-xs font-semibold uppercase tracking-[0.1em] text-navy";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      topic: String(data.get("topic") || ""),
      message: String(data.get("message") || ""),
    };

    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/public/contact-messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("We couldn't send your message. Please try again.");
      }

      setSubmitted(true);
    } catch {
      setError(
        "We couldn't send your message. Please check your connection and try again."
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
        <h3 className="mt-5 font-display text-2xl text-navy">Message Sent</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone">
          Thank you for reaching out. A member of the KEMET FC team will
          respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name</span>
          <input required name="name" type="text" className={inputClass} autoComplete="name" />
        </label>
        <label className="block">
          <span className={labelClass}>Email</span>
          <input required name="email" type="email" className={inputClass} autoComplete="email" />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>I&rsquo;m reaching out about</span>
          <select name="topic" className={inputClass} defaultValue="General Information">
            <option>General Information</option>
            <option>Registration</option>
            <option>Partnerships</option>
            <option>Sponsorship</option>
            <option>Coaching Opportunities</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={labelClass}>Message</span>
          <textarea required name="message" rows={5} className={inputClass} />
        </label>
      </div>
      {error ? (
        <p className="mt-5 text-sm font-medium text-red">{error}</p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-sm bg-gradient-to-b from-gold-light to-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-[0_8px_24px_-8px_rgba(212,175,55,0.6)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
