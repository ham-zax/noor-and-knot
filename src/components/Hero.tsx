import Image from "next/image";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto grid w-[min(1120px,92%)] items-center gap-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          {siteConfig.tagline}
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl md:text-6xl">
          Handmade Crochet Pouches for Everyday &amp; Eid
        </h1>
        <p className="max-w-xl text-base leading-7 text-charcoal/75 sm:text-lg">
          Islamic-inspired details, custom colors, and a clean structured finish for gifting and
          everyday modest essentials.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Order on WhatsApp"
            className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-sand transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span className="inline-flex items-center gap-2">
              <FaWhatsapp className="h-4 w-4" />
              Order on WhatsApp
            </span>
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Shop on Instagram"
            className="rounded-full border border-taupe/40 bg-white/70 px-6 py-3 text-sm font-medium text-charcoal transition hover:border-gold/60 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              Shop on Instagram
            </span>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-taupe">
          <span className="rounded-full border border-taupe/25 bg-white/65 px-3 py-1.5">Made to order</span>
          <span className="rounded-full border border-taupe/25 bg-white/65 px-3 py-1.5">Custom colors</span>
          <span className="rounded-full border border-taupe/25 bg-white/65 px-3 py-1.5">Gift-ready</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
          <Image
            src="/images/products/crochet-7.jpeg"
            alt="Crochet drawstring pouch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 92vw, 42vw"
            priority
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#f6f1e7d9] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-charcoal backdrop-blur-sm">
            New arrival
          </span>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
          <Image
            src="/images/products/legacy-1.jpeg"
            alt="Crochet phone pouch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 44vw, 20vw"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
          <Image
            src="/images/products/crochet-6.jpeg"
            alt="Crochet mini clutch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 44vw, 20vw"
          />
        </div>
      </div>
    </section>
  );
}
