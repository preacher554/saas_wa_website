import { ArrowRight, Eye, MessageCircle } from "lucide-react";
import { heroBadges } from "../data/siteData.js";

function HeroDashboard() {
  return (
    <div className="dashboard-frame hero-dashboard">
      <div className="dashboard-toolbar">
        <div className="dashboard-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="toolbar-tabs">
          <span className="active">Inbox</span>
          <span>CRM</span>
          <span>Handoff</span>
        </div>
      </div>

      <div className="hero-dashboard-grid">
        <aside className="conversation-list">
          {["Dina - Online Shop", "Rafi - Properti", "Maya - F&B"].map((name, index) => (
            <div className={`conversation-item ${index === 0 ? "active" : ""}`} key={name}>
              <div className="avatar">{name.charAt(0)}</div>
              <div>
                <p>{name}</p>
                <span>{index === 0 ? "Lead hot, minta stok" : "Butuh follow-up"}</span>
              </div>
            </div>
          ))}
        </aside>

        <section className="chat-room">
          <div className="chat-top">
            <div>
              <p className="text-sm font-bold">WhatsApp Conversation</p>
              <span>AI aktif, siap handoff</span>
            </div>
            <div className="ai-toggle">
              <span />
              AI ON
            </div>
          </div>
          <div className="bubble incoming">Kak, ready warna hitam ukuran M?</div>
          <div className="bubble outgoing">Ready kak. Untuk dikirim ke kota mana ya?</div>
          <div className="bubble incoming">Jakarta. Kalau ambil 3 bisa diskon?</div>
          <div className="handoff-chip">Perlu approval manusia</div>
        </section>

        <aside className="crm-card">
          <div className="status-row">
            <span>Lead Status</span>
            <strong>Hot</strong>
          </div>
          <div className="crm-line">
            <span>Intent</span>
            <p>Beli produk dan tanya diskon</p>
          </div>
          <div className="crm-line">
            <span>Next action</span>
            <p>Admin cek approval diskon</p>
          </div>
          <div className="ticket-card">
            <span>Handoff Ticket</span>
            <strong>Waiting human</strong>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="beranda" className="hero-section overflow-hidden pt-36 lg:pt-40">
      <div className="container-shell text-center">
        <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-silver px-3 py-2 text-sm font-semibold text-muted shadow-[inset_0_1px_0_#fff]">
          <span className="h-2 w-2 rounded-full bg-acid shadow-[0_0_0_4px_rgba(212,255,0,0.35)]" />
          Managed AI frontdesk untuk chat bisnis
        </div>

        <h1 className="mx-auto max-w-5xl text-[clamp(2.65rem,6vw,5.6rem)] font-black leading-[0.98] tracking-[-0.065em] text-ink">
          Ubah Chat Masuk Jadi Layanan, Lead, dan <span className="rounded-xl bg-acid px-3">Penjualan</span> yang Lebih Rapi
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
          NusaAI membantu bisnis membalas chat, menyaring lead, dan mengatur handoff manusia lewat Messaging Agent yang terhubung ke dashboard.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#" className="btn-acid">
            Konsultasi Gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#dashboard" className="btn-ghost">
            <Eye className="h-4 w-4" />
            Lihat Demo Dashboard
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {heroBadges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted">
              <MessageCircle className="h-4 w-4 text-ink" />
              {badge}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
