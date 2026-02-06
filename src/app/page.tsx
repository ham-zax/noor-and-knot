import { Collections } from "@/components/Collections";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { InstagramCTA } from "@/components/InstagramCTA";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { WhyUs } from "@/components/WhyUs";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.brandName,
    description: siteConfig.description,
    url: "https://noor-and-knot.vercel.app",
    sameAs: [siteConfig.instagramUrl],
    makesOffer: products.map((product) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `https://noor-and-knot.vercel.app${product.image}`,
      },
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[url('/patterns/arabesque.svg')] bg-[length:520px] bg-center" />
      </div>

      <div className="relative">
        <Header />
        <main>
          <Reveal>
            <Hero />
          </Reveal>
          <Reveal>
            <ProductGrid />
          </Reveal>
          <Reveal>
            <Collections />
          </Reveal>
          <Reveal>
            <WhyUs />
          </Reveal>
          <Reveal>
            <HowItWorks />
          </Reveal>
          <Reveal>
            <InstagramCTA />
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}
