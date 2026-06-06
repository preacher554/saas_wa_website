import { Bot } from "lucide-react";
import FeatureList from "./FeatureList.jsx";
import { aiFrontdeskFeatures } from "../data/siteData.js";

export default function AIFrontdeskFeature() {
  return (
    <section className="section-pad bg-white/55">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-tag">AI Frontdesk</p>
          <h2 className="section-title text-left">AI Frontdesk yang Bekerja Sesuai Scope Bisnis</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            Agent tidak diberi ruang untuk sok tahu. Ia bekerja dari knowledge, aturan jawaban, dan batas escalation yang disepakati.
          </p>
          <div className="mt-8">
            <FeatureList items={aiFrontdeskFeatures} />
          </div>
        </div>
        <div className="machined-card p-6">
          <div className="frontdesk-console">
            <div className="console-header">
              <Bot className="h-5 w-5" />
              Agent Scope
              <span>Active</span>
            </div>
            <div className="console-grid">
              <div>
                <span>Knowledge</span>
                <strong>FAQ, layanan, harga approved</strong>
              </div>
              <div>
                <span>Guardrail</span>
                <strong>Tidak jawab di luar scope</strong>
              </div>
              <div>
                <span>Question rhythm</span>
                <strong>Satu pertanyaan sekali waktu</strong>
              </div>
              <div>
                <span>Pause rule</span>
                <strong>Stop saat admin aktif</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
