import Icon from "./Icon.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { featurePillars } from "../data/siteData.js";

export default function FeaturePillars() {
  return (
    <section id="fitur" className="section-pad bg-white/55">
      <div className="container-shell">
        <SectionHeader title="Satu Agent untuk Frontdesk Chat Bisnis" description="NusaAI menyatukan auto-reply, lead context, dan handoff manusia supaya chat tidak cuma dijawab, tapi dikelola." />
        <div className="grid gap-5 lg:grid-cols-4">
          {featurePillars.map((feature) => (
            <article className="machined-card group p-6" key={feature.title}>
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink ring-1 ring-line transition group-hover:bg-acid">
                <Icon name={feature.icon} />
              </div>
              <h3 className="text-xl font-extrabold tracking-[-0.045em]">{feature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
