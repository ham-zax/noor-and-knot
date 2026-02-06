import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-taupe/20 py-10">
      <div className="mx-auto grid w-[min(1120px,92%)] gap-6 text-sm text-charcoal/80 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold tracking-tight text-charcoal">{siteConfig.brandName}</p>
          <p className="mt-2">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="font-medium text-charcoal">Quick Links</p>
          <ul className="mt-2 space-y-1">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-charcoal">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium text-charcoal">Connect</p>
          <p className="mt-2">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-charcoal">
              Instagram
            </a>
          </p>
          <p className="mt-1">Delivery note: UAE-wide delivery timeline to be updated.</p>
        </div>
      </div>
    </footer>
  );
}
