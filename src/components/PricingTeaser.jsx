import { Check } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { pricingCards } from "../data/siteData.js";

export default function PricingTeaser() {
  return (
    <section id="harga" className="section-pad bg-white/55">
      <div className="container-shell">
        <SectionHeader title="Pilih Paket Sesuai Cara Bisnis Kamu Melayani Chat" description="Harga final bergantung pada scope knowledge, alur handoff, volume percakapan, dan workflow tambahan yang diperlukan." />
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingCards.map((card) => (
            <article className={`pricing-card ${card.highlighted ? "featured" : ""}`} key={card.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-dim">{card.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.06em]">{card.title}</h3>
                </div>
                {card.highlighted ? <span className="rounded-full bg-acid px-3 py-1 text-xs font-black">Recommended</span> : null}
              </div>
              <p className="mt-5 text-sm leading-6 text-muted">{card.description}</p>
              <div className="mt-7 text-xl font-black tracking-[-0.04em]">{card.price}</div>
              <ul className="mt-7 grid gap-3">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" className={card.highlighted ? "btn-acid mt-8 w-full" : "btn-ghost mt-8 w-full"}>
                Konsultasi
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
