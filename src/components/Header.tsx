"use client";

import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import { siteConfig } from "@/config/site";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
              aria-label="Order on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full border border-taupe/35 bg-white/70 px-3 py-2 text-sm font-medium text-charcoal transition hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Shop on Instagram"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-sand transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Instagram className="h-4 w-4" />
              <span className="sm:hidden">Insta</span>
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-taupe/30 bg-white/75 text-charcoal transition hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div id="mobile-nav-menu" className="mt-4 border-t border-taupe/20 pt-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {siteConfig.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-medium text-charcoal/90 transition hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
