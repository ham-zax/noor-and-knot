import Image from "next/image";
import { Instagram } from "lucide-react";

import { siteConfig } from "@/config/site";
import { miniGalleryImages } from "@/data/products";

export function InstagramCTA() {
  return (
    <section className="mx-auto w-[min(1120px,92%)] py-14 md:py-18">
      <div className="rounded-3xl border border-white/60 bg-white/75 p-6 shadow-soft md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-taupe">Instagram</p>
            <h2 className="text-3xl font-semibold tracking-tight text-charcoal">See the latest drops</h2>
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-sand transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Instagram className="h-4 w-4" />
            View Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {miniGalleryImages.map((imageSrc, index) => (
            <div
              key={`${imageSrc}-${index}`}
              className="relative aspect-square overflow-hidden rounded-2xl border border-white/60"
            >
              <Image
                src={imageSrc}
                alt={`Noor and Knot preview ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 44vw, (max-width: 1024px) 22vw, 16vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
