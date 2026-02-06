"use client";

import { FormEvent, useMemo, useState } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { categories } from "@/data/products";

type FormState = {
  name: string;
  email: string;
  cityCountry: string;
  interestedIn: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  cityCountry: "",
  interestedIn: categories[0],
  message: "",
  website: "",
};

export function ContactForm() {
  const hasExternalForm = Boolean(siteConfig.formActionUrl);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
      form.message.trim().length >= 6
    );
  }, [form.email, form.message, form.name]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (hasExternalForm) {
      return;
    }

    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!canSubmit) {
      setStatus({ type: "error", message: "Please fill name, valid email, and message." });
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !payload.success) {
        throw new Error(payload.message || "Failed to send request");
      }

      setStatus({ type: "success", message: "Your email inquiry was sent successfully." });
      setForm(initialState);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setStatus({ type: "error", message });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto w-[min(1120px,92%)] py-14 md:py-20">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft md:p-8">
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">Fastest way to order</h2>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-charcoal px-5 py-3 text-sm font-medium text-sand transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-taupe/35 bg-sand px-5 py-3 text-sm font-medium text-charcoal transition hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Instagram className="h-4 w-4" />
            Shop on Instagram
          </a>
        </div>

        <div className="mt-6 border-t border-taupe/20 pt-5">
          <button
            id="contact-email"
            type="button"
            onClick={() => setShowEmailForm((prev) => !prev)}
            className="inline-flex items-center gap-2 text-sm font-medium text-taupe underline decoration-gold/70 underline-offset-4 transition hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-expanded={showEmailForm}
            aria-controls="email-inquiry-form"
          >
            <Mail className="h-4 w-4" />
            {showEmailForm ? "Hide email form" : "Need detailed quote? Open email form"}
          </button>

          {showEmailForm ? (
            <form
              id="email-inquiry-form"
              action={hasExternalForm ? siteConfig.formActionUrl : undefined}
              method={hasExternalForm ? "POST" : undefined}
              onSubmit={handleSubmit}
              className="mt-5 grid gap-4 md:grid-cols-2"
            >
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                value={form.website}
                onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
              />

              <label className="text-sm text-charcoal/80">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
                />
              </label>

              <label className="text-sm text-charcoal/80">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
                />
              </label>

              <label className="text-sm text-charcoal/80">
                City/Country
                <input
                  name="cityCountry"
                  value={form.cityCountry}
                  onChange={(event) => setForm((prev) => ({ ...prev, cityCountry: event.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
                />
              </label>

              <label className="text-sm text-charcoal/80">
                Interested in
                <select
                  name="interestedIn"
                  value={form.interestedIn}
                  onChange={(event) => setForm((prev) => ({ ...prev, interestedIn: event.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm text-charcoal/80 md:col-span-2">
                Message
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSending || !canSubmit}
                  className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-sand transition hover:bg-charcoal/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Email Inquiry"}
                </button>
              </div>
            </form>
          ) : null}
        </div>

        {status.type !== "idle" ? (
          <div
            className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-sage/50 bg-sage/15 text-charcoal"
                : "border-red-300 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        ) : null}
      </div>
    </section>
  );
}
