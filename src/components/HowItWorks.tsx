import Image from "next/image";

const steps = [
  "Choose your piece",
  "Pick your colors",
  "Send your request",
  "Confirm and receive updates",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto grid w-[min(1120px,92%)] gap-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
      <div className="rounded-3xl border border-white/60 bg-white/75 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.16em] text-taupe">Ordering</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal">Order in a few steps</h2>
        <ol className="mt-6 space-y-3">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3 rounded-2xl border border-taupe/15 bg-sand p-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-charcoal text-xs font-semibold text-sand">
                {index + 1}
              </span>
              <span className="text-sm text-charcoal/85">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-charcoal/70">
          You will receive a confirmation message with timeline and delivery details.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-soft">
        <Image
          src="/images/products/legacy-2.jpeg"
          alt="Noor and Knot crochet detail"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 92vw, 40vw"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-[#f6f1e7d9] p-4 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe">Noor / Barakah / Sukoon</p>
          <p className="mt-1 text-sm text-charcoal/85">Every piece is handcrafted to feel useful, graceful, and gift-worthy.</p>
        </div>
      </div>
    </section>
  );
}
