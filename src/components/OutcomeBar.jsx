import Icon from "./Icon.jsx";
import { outcomes } from "../data/siteData.js";

export default function OutcomeBar() {
  return (
    <section className="section-tight">
      <div className="container-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {outcomes.map((outcome) => (
          <article className="machined-card p-6" key={outcome.title}>
            <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-acid text-ink">
              <Icon name={outcome.icon} />
            </div>
            <h3 className="text-lg font-extrabold tracking-[-0.04em]">{outcome.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{outcome.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
