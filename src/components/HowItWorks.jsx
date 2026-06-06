import SectionHeader from "./SectionHeader.jsx";
import { workflowSteps } from "../data/siteData.js";

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="section-pad">
      <div className="container-shell">
        <SectionHeader title="Dari Chat Customer Sampai Follow-up Lebih Rapi" description="Alurnya dibuat dekat dengan cara bisnis kecil dan menengah bekerja: tetap di channel chat, tapi konteksnya masuk ke dashboard." />
        <div className="relative grid gap-4 lg:grid-cols-5">
          {workflowSteps.map((step, index) => (
            <article className="machined-card relative p-5" key={step}>
              <span className="mb-8 grid h-11 w-11 place-items-center rounded-xl bg-acid text-sm font-black">{index + 1}</span>
              <p className="text-base font-bold leading-6 tracking-[-0.035em]">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
