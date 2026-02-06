"use client";

import { FormEvent, useMemo, useState } from "react";

import { siteConfig } from "@/config/site";
import { categories } from "@/data/products";

type FormState = {
  name: string;
  whatsapp: string;
  cityCountry: string;
  interestedIn: string;
  colorPreference: string;
  isCustom: "No" | "Yes";
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  whatsapp: "",
  cityCountry: "",
  interestedIn: categories[0],
  colorPreference: "",
  isCustom: "No",
  message: "",
  website: "",
};

export function ContactForm() {
  const hasExternalForm = Boolean(siteConfig.formActionUrl);
  const [form, setForm] = useState<FormState>(initialState);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return form.name.trim().length > 1 && form.whatsapp.trim().length >= 7;
  }, [form]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (hasExternalForm) {
      return;
    }

    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!canSubmit) {
      setStatus({ type: "error", message: "Please fill in your name and WhatsApp number." });
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

      setStatus({ type: "success", message: "Your request was sent. We will contact you soon, inshaAllah." });
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
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Contact / Order form</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">Send your order request</h2>

        <form
          action={hasExternalForm ? siteConfig.formActionUrl : undefined}
          method={hasExternalForm ? "POST" : undefined}
          onSubmit={handleSubmit}
          className="mt-6 grid gap-4 md:grid-cols-2"
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
            WhatsApp number
            <input
              required
              name="whatsapp"
              value={form.whatsapp}
              onChange={(event) => setForm((prev) => ({ ...prev, whatsapp: event.target.value }))}
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

          <label className="text-sm text-charcoal/80">
            Color preference
            <input
              name="colorPreference"
              value={form.colorPreference}
              onChange={(event) => setForm((prev) => ({ ...prev, colorPreference: event.target.value }))}
              className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
            />
          </label>

          <label className="text-sm text-charcoal/80">
            Custom request
            <select
              name="isCustom"
              value={form.isCustom}
              onChange={(event) => setForm((prev) => ({ ...prev, isCustom: event.target.value as "No" | "Yes" }))}
              className="mt-1 w-full rounded-2xl border border-taupe/25 bg-sand px-4 py-2.5 outline-none transition focus:border-gold"
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </label>

          <label className="text-sm text-charcoal/80 md:col-span-2">
            Message
            <textarea
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
              {isSending ? "Sending..." : "Send Order Request"}
            </button>
          </div>
        </form>

        {status.type !== "idle" ? (
          <div
            className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-sage/50 bg-sage/15 text-charcoal"
                : "border-red-300 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
            {status.type === "success" ? (
              <div className="mt-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-charcoal underline decoration-gold/80 underline-offset-4"
                >
                  Continue to Instagram
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
