import Link from "next/link";
import { Instagram } from "lucide-react";

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

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-sand transition hover:bg-charcoal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Instagram className="h-4 w-4" />
            <span className="sm:hidden">Instagram</span>
            <span className="hidden sm:inline">Shop on Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
