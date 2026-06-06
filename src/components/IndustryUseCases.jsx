import Icon from "./Icon.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { industries } from "../data/siteData.js";

export default function IndustryUseCases() {
  return (
    <section id="industri" className="section-pad">
      <div className="container-shell">
        <SectionHeader title="Cocok untuk Banyak Jenis Bisnis" description="Messaging Agent dirancang untuk bisnis yang hidup dari chat masuk: order, pertanyaan, appointment, sampai prospek yang perlu di-follow up." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry) => (
            <article className="machined-card p-5" key={industry.title}>
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-white ring-1 ring-line">
                <Icon name={industry.icon} />
              </div>
              <h3 className="text-lg font-extrabold tracking-[-0.04em]">{industry.title}</h3>
              <ul className="mt-4 grid gap-3">
                {industry.points.map((point) => (
                  <li key={point} className="text-sm leading-6 text-muted">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
