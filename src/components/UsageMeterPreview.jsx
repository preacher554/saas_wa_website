import { AlertTriangle, CheckCircle2, Gauge, PlusCircle } from "lucide-react";
import { usageMeterPreview } from "../data/siteData.js";

const formatNumber = (value) => Number(value || 0).toLocaleString("id-ID");

const toneClass = {
  safe: "bg-[#65A30D]",
  warning: "bg-[#F59E0B]",
  danger: "bg-[#DC2626]",
};

function UsageBar({ metric }) {
  const width = `${Math.min(100, Math.max(0, metric.percent))}%`;

  return (
    <div className="rounded-2xl border border-line-light bg-white p-4 shadow-[inset_0_1px_0_#fff]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-black tracking-[-0.04em]">{metric.label}</h3>
          <p className="mt-1 text-xs font-semibold leading-5 text-muted">{metric.helper}</p>
        </div>
        <span className="rounded-full bg-silver px-3 py-1 text-xs font-black text-ink">
          {formatNumber(metric.used)} / {formatNumber(metric.quota)}
        </span>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full border border-line bg-silver">
        <div className={`h-full rounded-full ${toneClass[metric.tone] || toneClass.safe}`} style={{ width }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs font-black">
        <span className={metric.tone === "warning" ? "text-[#92400E]" : "text-[#3F6212]"}>{metric.percent}% terpakai</span>
        {metric.percent >= 80 ? <span className="text-[#92400E]">Hampir penuh</span> : <span className="text-muted">Normal</span>}
      </div>
    </div>
  );
}

export default function UsageMeterPreview() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-tag">Billing & Usage Preview</p>
            <h2 className="section-title mt-4 text-left">Client Melihat Kuota yang Jelas, Bukan Detail Teknis Internal</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              NusaAI bisa menjelaskan paket dan pemakaian dengan bahasa bisnis: berapa balasan AI yang terpakai, berapa customer yang masuk, kapan perlu add-on, dan kapan admin mengambil alih.
            </p>

            <div className="mt-8 grid gap-3">
              {usageMeterPreview.clientVisible.map((item) => (
                <div className="machined-card flex items-center gap-3 px-4 py-3" key={item}>
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-ink" />
                  <span className="text-sm font-bold text-ink">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-white p-4 text-sm font-semibold leading-7 text-muted">
              Ini hanya mockup marketing. Payment, invoice, koneksi billing real, dan hard quota shutdown belum diimplementasikan.
            </div>
          </div>

          <div className="dashboard-frame usage-preview-frame">
            <div className="dashboard-toolbar">
              <div className="dashboard-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="toolbar-tabs">
                <span className="active">Usage Meter</span>
                <span>Plan</span>
                <span>Add-on</span>
              </div>
            </div>

            <div className="usage-preview-body">
              <div className="usage-preview-hero">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-dim">Paket aktif</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.055em]">{usageMeterPreview.plan}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted">{usageMeterPreview.period}</p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-acid text-ink">
                  <Gauge className="h-6 w-6" />
                </div>
              </div>

              <p className="mt-4 rounded-2xl border border-line-light bg-white px-4 py-3 text-sm font-semibold leading-6 text-muted">
                {usageMeterPreview.summary}
              </p>

              <div className="mt-4 grid gap-3">
                {usageMeterPreview.metrics.map((metric) => (
                  <UsageBar metric={metric} key={metric.label} />
                ))}
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {usageMeterPreview.counters.map((counter, index) => {
                  const Icon = index === 0 ? CheckCircle2 : index === 1 ? AlertTriangle : PlusCircle;
                  return (
                    <div className="rounded-2xl border border-line-light bg-white p-4" key={counter.label}>
                      <Icon className="h-5 w-5" />
                      <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-dim">{counter.label}</p>
                      <strong className="mt-2 block text-xl font-black tracking-[-0.05em]">{counter.value}</strong>
                      <span className="mt-2 block text-xs font-semibold leading-5 text-muted">{counter.caption}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
