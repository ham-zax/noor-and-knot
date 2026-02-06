import { Check } from "lucide-react";

const points = [
  "100% handmade",
  "Custom colors available",
  "Gift-ready finishing",
  "Soft + durable yarn",
];

export function WhyUs() {
  return (
    <section className="mx-auto w-[min(1120px,92%)] py-14 md:py-18">
      <div className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-soft md:p-10">
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Why people love it</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">Made with care and intention</h2>
        <ul className="mt-6 grid gap-3 text-charcoal/85 sm:grid-cols-2">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3 rounded-2xl border border-taupe/15 bg-sand px-4 py-3 text-sm">
              <Check className="h-4 w-4 text-gold" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
