import Image from "next/image";
import { Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

function whatsappProductLink(productName: string) {
  const text = encodeURIComponent(`Assalamu alaikum, I want to request ${productName}.`);
  return `${siteConfig.whatsappUrl}?text=${text}`;
}

export function ProductGrid() {
  const featured = products.find((product) => product.featured) ?? products[0];
  const others = products.filter((product) => product.id !== featured.id).slice(0, 4);

  return (
    <section id="bestsellers" className="mx-auto w-[min(1120px,92%)] py-14 md:py-20">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Bestsellers</p>
        <h2 className="text-3xl font-semibold tracking-tight text-charcoal">Most-Loved Pieces</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-xl md:row-span-2 lg:col-span-1">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 24vw"
            />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/70 bg-[#f6f1e7e0] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-charcoal">
              <Sparkles className="h-3 w-3 text-gold" />
              New
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-semibold tracking-tight text-charcoal">{featured.name}</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal/75">{featured.description}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.14em] text-taupe">{featured.attribute}</p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-sm font-medium text-taupe">{featured.fromPrice ?? "Custom pricing"}</span>
              <a
                href={whatsappProductLink(featured.name)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center rounded-full bg-charcoal px-4 text-xs font-semibold uppercase tracking-[0.12em] text-sand"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </article>

        {others.map((product) => (
          <article
            key={product.id}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 24vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold tracking-tight text-charcoal">{product.name}</h3>
              <p className="mt-2 text-sm leading-6 text-charcoal/75">{product.description}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-taupe">{product.attribute}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                <span className="text-sm text-taupe">{product.fromPrice ?? "Custom"}</span>
                <a
                  href={whatsappProductLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full border border-charcoal/20 bg-sand px-4 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
