import { AlertCircle } from "lucide-react";
import SectionHeader from "./SectionHeader.jsx";
import { painPoints } from "../data/siteData.js";

export default function PainPoints() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeader title="Chat Banyak, Tapi Peluang Sering Hilang?" description="Masalahnya bukan bisnis kamu kurang ramai. Sering kali, chat sudah masuk, tapi belum ada sistem frontdesk yang menjaga alurnya." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((point) => (
            <article className="machined-card flex items-start gap-4 p-5" key={point}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white">
                <AlertCircle className="h-5 w-5" />
              </span>
              <p className="font-semibold leading-6 tracking-[-0.03em] text-ink">{point}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
