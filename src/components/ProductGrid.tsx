import Image from "next/image";

import { products } from "@/data/products";

export function ProductGrid() {
  const featured = products.find((product) => product.featured) ?? products[0];
  const others = products.filter((product) => product.id !== featured.id).slice(0, 4);

  return (
    <section id="bestsellers" className="mx-auto w-[min(1120px,92%)] py-14 md:py-18">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Bestsellers</p>
        <h2 className="text-3xl font-semibold tracking-tight text-charcoal">Loved Pieces</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <article className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-xl md:row-span-2">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 36vw"
            />
          </div>
          <div className="space-y-2 p-5">
            <h3 className="text-xl font-semibold tracking-tight text-charcoal">{featured.name}</h3>
            <p className="text-sm leading-6 text-charcoal/75">{featured.description}</p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm font-medium text-taupe">{featured.fromPrice ?? "Custom pricing"}</span>
              <a href="#contact" className="text-sm font-medium text-charcoal underline decoration-gold/80 underline-offset-4">
                Request this
              </a>
            </div>
          </div>
        </article>

        {others.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg"
          >
            <div className="relative aspect-[16/11] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, 24vw"
              />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="font-semibold tracking-tight text-charcoal">{product.name}</h3>
              <p className="text-sm leading-6 text-charcoal/75">{product.description}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm text-taupe">{product.fromPrice ?? "Custom"}</span>
                <a href="#contact" className="text-sm font-medium text-charcoal underline decoration-gold/80 underline-offset-4">
                  Request this
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
