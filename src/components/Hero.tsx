import Image from "next/image";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="mx-auto grid w-[min(1120px,92%)] items-center gap-8 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-gold/40 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-taupe">
          {siteConfig.tagline}
        </span>
        <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
          Handmade Crochet Pouches &amp; Mini Bags
        </h1>
        <p className="max-w-lg text-base leading-7 text-charcoal/75 sm:text-lg">
          Islamic-inspired, gift-ready pieces for everyday moments and Eid gatherings in soft,
          elegant tones.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
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
            className="rounded-full border border-taupe/40 bg-white/70 px-6 py-3 text-sm font-medium text-charcoal transition hover:border-gold/60 hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <span className="inline-flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              Shop on Instagram
            </span>
          </a>
          <a
            href="#contact-email"
            className="rounded-full border border-transparent px-2 py-1 text-sm font-medium text-taupe underline decoration-gold/70 underline-offset-4 transition hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Prefer email inquiry?
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
          <Image
            src="/images/products/product-1.jpeg"
            alt="Crochet drawstring pouch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 92vw, 42vw"
            priority
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
          <Image
            src="/images/products/product-2.jpeg"
            alt="Crochet phone pouch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 44vw, 20vw"
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/50 bg-white shadow-soft">
          <Image
            src="/images/products/product-3.jpeg"
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
