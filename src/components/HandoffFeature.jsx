import FeatureList from "./FeatureList.jsx";
import { handoffFeatures } from "../data/siteData.js";

export default function HandoffFeature() {
  return (
    <section className="section-pad bg-white/55">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <p className="section-tag">Human Handoff</p>
          <h2 className="section-title text-left">AI Tahu Kapan Harus Berhenti</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            Ketika percakapan butuh manusia, agent bisa berhenti menjawab, membuat ringkasan, dan memberi ruang untuk admin mengambil alih.
          </p>
          <div className="mt-8">
            <FeatureList items={handoffFeatures} />
          </div>
        </div>
        <div className="machined-card p-6">
          <div className="handoff-flow">
            <div className="ticket-card large">
              <span>Handoff Ticket</span>
              <strong>Waiting human</strong>
              <p>Customer minta diskon final. AI pause dan menunggu approval admin.</p>
            </div>
            <div className="flow-line" />
            <div className="bubble incoming">Bisa kurang lagi kak?</div>
            <div className="bubble outgoing muted">AI berhenti. Admin mengambil alih.</div>
            <div className="owner-lock">Ownership lock: Admin Maya</div>
          </div>
        </div>
      </div>
    </section>
  );
}
