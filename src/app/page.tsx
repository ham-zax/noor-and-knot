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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
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
