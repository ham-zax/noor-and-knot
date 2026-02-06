import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header
      className="sticky z-50 mx-auto w-[min(1120px,92%)]"
      style={{ top: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <div className="rounded-2xl border border-white/40 bg-[#f6f1e7cc] px-4 py-3 shadow-[0_8px_28px_rgba(31,31,31,0.08)] backdrop-blur-md sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-lg font-semibold tracking-tight text-charcoal">
            {siteConfig.brandName}
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-charcoal/80 md:flex">
            {siteConfig.navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-charcoal">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-taupe/35 bg-white/70 px-3 py-2 text-sm font-medium text-charcoal transition hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-sand transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Instagram className="h-4 w-4" />
              <span className="sm:hidden">Insta</span>
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
