import { ArrowRight, Eye } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="final-cta">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(2.2rem,5vw,4.6rem)] font-black leading-[1.02] tracking-[-0.065em] text-ink">
              Siap Punya AI Frontdesk untuk Bisnis Kamu?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Konsultasi gratis untuk cek alur chat, scope kebutuhan, dan paket agent yang paling cocok.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#" className="btn-acid">
                Konsultasi via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#/login" className="btn-ghost bg-white/70">
                <Eye className="h-4 w-4" />
                Lihat Demo Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
