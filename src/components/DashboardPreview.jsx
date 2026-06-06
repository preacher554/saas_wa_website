export default function DashboardPreview() {
  return (
    <section id="dashboard" className="section-pad bg-white/55">
      <div className="container-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="section-tag mx-auto">Dashboard Preview</p>
          <h2 className="section-title">Satu Dashboard untuk Mengontrol Agent, Chat, Lead, dan Handoff</h2>
          <p className="section-description">
            Mockup ini menunjukkan arah pengalaman produk: semua percakapan, snapshot lead, control tenant, dan status handoff dalam satu workspace.
          </p>
        </div>

        <div className="dashboard-frame large-dashboard">
          <div className="dashboard-toolbar">
            <div className="dashboard-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="toolbar-tabs">
              <span className="active">NusaAI Workspace</span>
              <span>Tenant</span>
              <span>Reports</span>
            </div>
          </div>

          <div className="product-dashboard-grid">
            <aside className="dashboard-sidebar">
              <div className="sidebar-logo">N</div>
              {["Inbox", "Leads", "Handoff", "Knowledge", "Tenant"].map((item, index) => (
                <span className={index === 0 ? "active" : ""} key={item}>
                  {item}
                </span>
              ))}
            </aside>

            <div className="dashboard-inbox">
              <div className="panel-title">Inbox</div>
              {["Dina Permata", "Rafi Properti", "Maya Catering", "Bima Bengkel"].map((name, index) => (
                <div className={`inbox-row ${index === 0 ? "active" : ""}`} key={name}>
                  <div className="avatar">{name.charAt(0)}</div>
                  <div>
                    <strong>{name}</strong>
                    <span>{index === 0 ? "Hot lead, waiting human" : "AI monitoring"}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-chat">
              <div className="chat-top">
                <div>
                  <p className="text-sm font-bold">Dina Permata</p>
                  <span>WhatsApp chat, AI paused</span>
                </div>
                <div className="handoff-chip">Human active</div>
              </div>
              <div className="bubble incoming">Kalau beli 3 bisa diskon?</div>
              <div className="bubble outgoing">Aku cek ke admin dulu ya kak.</div>
              <div className="handoff-summary">
                <span>Handoff summary</span>
                <p>Customer ingin beli 3 produk ukuran M warna hitam, lokasi Jakarta, minta diskon final.</p>
              </div>
              <div className="bubble incoming">Oke kak ditunggu.</div>
            </div>

            <aside className="dashboard-right">
              <div className="panel-title">CRM Snapshot</div>
              <div className="status-row">
                <span>Lead</span>
                <strong>Hot</strong>
              </div>
              <div className="snapshot-row">
                <span>Intent</span>
                <strong>Purchase inquiry</strong>
              </div>
              <div className="snapshot-row">
                <span>Handoff</span>
                <strong>Admin Maya</strong>
              </div>
              <div className="tenant-control">
                <span>Tenant Control</span>
                <strong>AI Receptionist Pro</strong>
                <div className="ai-toggle">
                  <span />
                  AI paused
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
