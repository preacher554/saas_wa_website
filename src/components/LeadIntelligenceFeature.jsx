import FeatureList from "./FeatureList.jsx";
import { leadIntelligenceFeatures } from "../data/siteData.js";

export default function LeadIntelligenceFeature() {
  return (
    <section className="section-pad">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
        <div className="machined-card p-6 lg:order-1">
          <div className="crm-snapshot">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-dim">CRM Snapshot</span>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">Dina Permata</h3>
              </div>
              <span className="rounded-full bg-acid px-3 py-1 text-xs font-black">HOT</span>
            </div>
            <div className="mt-6 grid gap-3">
              <div className="snapshot-row">
                <span>Intent</span>
                <strong>Beli 3 produk, tanya diskon</strong>
              </div>
              <div className="snapshot-row">
                <span>Kebutuhan</span>
                <strong>Ukuran M, warna hitam, kirim Jakarta</strong>
              </div>
              <div className="snapshot-row">
                <span>Next action</span>
                <strong>Admin cek approval diskon dan ongkir</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:order-2">
          <p className="section-tag">Lead Intelligence</p>
          <h2 className="section-title text-left">Tahu Mana Lead yang Serius, Mana yang Cuma Tanya-tanya</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            Bukan sekadar transcript. Agent membantu menyusun sinyal penting dari percakapan agar admin tidak mulai dari nol.
          </p>
          <div className="mt-8">
            <FeatureList items={leadIntelligenceFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
}
