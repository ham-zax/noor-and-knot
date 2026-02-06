import { categories } from "@/data/products";

const descriptions: Record<string, string> = {
  "Everyday Pouches": "Minimal, practical pieces for daily essentials.",
  "Eid Gifts": "Festive tones and gift-ready finishing.",
  "Custom Orders": "Choose colors, details, and finishing, made to order.",
};

export function Collections() {
  return (
    <section id="collections" className="mx-auto w-[min(1120px,92%)] py-14 md:py-20">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Collections</p>
        <h2 className="text-3xl font-semibold tracking-tight text-charcoal">Shop by Collection</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category}
            className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-gold/40"
          >
            <h3 className="text-xl font-semibold tracking-tight text-charcoal">{category}</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/75">{descriptions[category]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
