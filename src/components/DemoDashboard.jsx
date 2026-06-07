import {
  Bell,
  Bot,
  ChevronDown,
  CirclePause,
  Gauge,
  Home,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Search,
  Settings,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import { usageMeterPreview } from "../data/siteData.js";

const inboxItems = [
  { name: "Dina Permata", label: "Online shop", status: "Hot", preview: "Minta diskon untuk 3 produk", active: true },
  { name: "Rafi Pratama", label: "Properti", status: "Warm", preview: "Cari rumah area Bandung", active: false },
  { name: "Maya Catering", label: "F&B", status: "Warm", preview: "Tanya paket gathering kantor", active: false },
  { name: "Bima Motor", label: "Bengkel", status: "Unknown", preview: "Cek jadwal service besok", active: false },
];

const sideNav = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Inbox", icon: Inbox },
  { label: "Leads", icon: Users },
  { label: "Handoff", icon: UserCheck },
  { label: "Knowledge", icon: Bot },
  { label: "Settings", icon: Settings },
];

const statCards = [
  { label: "Open chats", value: "24", note: "6 menunggu admin" },
  { label: "Lead hot", value: "8", note: "Perlu follow-up cepat" },
  { label: "AI status", value: "On", note: "Paused di 2 chat" },
];

const formatNumber = (value) => Number(value || 0).toLocaleString("id-ID");

function DemoUsageMeter() {
  const aiReplyMetric = usageMeterPreview.metrics.find((metric) => metric.label === "AI Replies");
  const warningCounters = usageMeterPreview.counters.filter((counter) => counter.label.includes("Warning"));

  return (
    <section className="demo-panel demo-usage-panel">
      <div className="demo-panel-heading">
        <div>
          <span>Billing Tool</span>
          <strong>Paket & kuota client</strong>
        </div>
        <div className="demo-usage-icon">
          <Gauge className="h-5 w-5" />
        </div>
      </div>

      <div className="demo-usage-plan">
        <span>Paket aktif</span>
        <strong>{usageMeterPreview.plan}</strong>
        <p>{usageMeterPreview.period}</p>
      </div>

      <div className="demo-usage-basis">
        <span>Basis billing paket</span>
        <strong>
          {formatNumber(aiReplyMetric?.quota)} AI replies / bulan
        </strong>
        <p>
          Tiap client bisa punya paket dan kuota berbeda. Dashboard ini hanya menampilkan pemakaian yang aman untuk client,
          bukan token, model call, provider, atau biaya internal.
        </p>
      </div>

      <div className="demo-usage-metrics">
        {usageMeterPreview.metrics.map((metric) => (
          <div className="demo-usage-row" key={metric.label}>
            <div className="demo-usage-row-head">
              <span>{metric.label}</span>
              <strong>
                {formatNumber(metric.used)} / {formatNumber(metric.quota)}
              </strong>
            </div>
            <div className="demo-usage-track">
              <span className={metric.tone === "warning" ? "warning" : ""} style={{ width: `${metric.percent}%` }} />
            </div>
            <p>{metric.percent >= 80 ? "Hampir mencapai batas paket." : metric.helper}</p>
          </div>
        ))}
      </div>

      <div className="demo-usage-alerts">
        {warningCounters.map((counter) => (
          <div key={counter.label}>
            <span>{counter.label}</span>
            <strong>{counter.value}</strong>
            <p>{counter.caption}</p>
          </div>
        ))}
      </div>

      <div className="demo-usage-note">
        Preview statis dashboard client. Belum ada Supabase, payment, invoice, billing real, atau hard quota shutdown.
      </div>
    </section>
  );
}

function Sidebar({ onLogout }) {
  return (
    <aside className="demo-sidebar">
      <a href="#beranda" className="demo-brand">
        <span>N</span>
        <div>
          <strong>NusaAI</strong>
          <small>Demo Dashboard</small>
        </div>
      </a>

      <nav className="demo-side-nav">
        {sideNav.map((item) => {
          const Icon = item.icon;
          return (
            <button type="button" className={item.active ? "active" : ""} key={item.label}>
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="demo-sidebar-card">
        <span>Tenant aktif</span>
        <strong>Nusa Resto Jakarta</strong>
        <p>AI Sales / Support Receptionist</p>
      </div>

      <button type="button" className="demo-logout" onClick={onLogout}>
        <LogOut className="h-4 w-4" />
        Keluar demo
      </button>
    </aside>
  );
}

export default function DemoDashboard({ onLogout }) {
  return (
    <main className="demo-app">
      <Sidebar onLogout={onLogout} />

      <section className="demo-main">
        <header className="demo-topbar">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-dim">Messaging Agent</p>
            <h1>AI Frontdesk Workspace</h1>
          </div>
          <div className="demo-top-actions">
            <button type="button">
              <Search className="h-4 w-4" />
              Search
            </button>
            <button type="button" aria-label="Notification">
              <Bell className="h-4 w-4" />
            </button>
            <button type="button" className="demo-user-chip">
              Admin Demo
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="demo-mode-banner">
          <ShieldCheck className="h-5 w-5" />
          <div>
            <strong>Mode demo frontend-only.</strong>
            <span> Data di layar ini statis untuk preview UI. Supabase Auth, database, realtime inbox, dan role access belum tersambung.</span>
          </div>
        </div>

        <div className="demo-stat-grid">
          {statCards.map((stat) => (
            <article className="demo-stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.note}</p>
            </article>
          ))}
        </div>

        <DemoUsageMeter />

        <div className="demo-workspace">
          <section className="demo-panel demo-inbox-panel">
            <div className="demo-panel-heading">
              <div>
                <span>Inbox</span>
                <strong>Conversation queue</strong>
              </div>
              <span className="demo-count">24</span>
            </div>
            <div className="demo-inbox-list">
              {inboxItems.map((item) => (
                <button type="button" className={`demo-inbox-item ${item.active ? "active" : ""}`} key={item.name}>
                  <span className="avatar">{item.name.charAt(0)}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.label}</small>
                    <p>{item.preview}</p>
                  </div>
                  <em>{item.status}</em>
                </button>
              ))}
            </div>
          </section>

          <section className="demo-panel demo-chat-panel">
            <div className="demo-chat-header">
              <div className="flex items-center gap-3">
                <span className="avatar">D</span>
                <div>
                  <strong>Dina Permata</strong>
                  <p>WhatsApp · AI paused for handoff</p>
                </div>
              </div>
              <span className="handoff-chip">Waiting human</span>
            </div>

            <div className="demo-chat-stream">
              <div className="bubble incoming">Kak, ready warna hitam ukuran M?</div>
              <div className="bubble outgoing">Ready kak. Untuk dikirim ke kota mana ya?</div>
              <div className="bubble incoming">Jakarta. Kalau ambil 3 bisa diskon?</div>
              <div className="demo-system-event">
                <CirclePause className="h-4 w-4" />
                AI berhenti menjawab karena butuh approval admin.
              </div>
              <div className="bubble outgoing muted">Aku cek ke admin dulu ya kak.</div>
            </div>

            <div className="demo-reply-box">
              <MessageCircle className="h-4 w-4" />
              <span>Ketik balasan admin di sini...</span>
              <button type="button">Ambil alih</button>
            </div>
          </section>

          <aside className="demo-right-stack">
            <section className="demo-panel">
              <div className="demo-panel-heading">
                <div>
                  <span>CRM Snapshot</span>
                  <strong>Dina Permata</strong>
                </div>
              </div>
              <div className="demo-kv-list">
                <div>
                  <span>Status</span>
                  <strong className="lime-pill">Hot lead</strong>
                </div>
                <div>
                  <span>Intent</span>
                  <strong>Beli produk dan tanya diskon</strong>
                </div>
                <div>
                  <span>Next action</span>
                  <strong>Admin cek approval diskon final</strong>
                </div>
              </div>
            </section>

            <section className="demo-panel">
              <div className="demo-panel-heading">
                <div>
                  <span>Tenant Control</span>
                  <strong>Nusa Resto Jakarta</strong>
                </div>
              </div>
              <div className="demo-toggle-row">
                <span>AI Agent</span>
                <strong>ON</strong>
              </div>
              <div className="demo-toggle-row">
                <span>Human handoff</span>
                <strong>Enabled</strong>
              </div>
              <button type="button" className="demo-secondary-action">
                <Home className="h-4 w-4" />
                Lihat knowledge scope
              </button>
            </section>

            <section className="demo-panel">
              <div className="demo-panel-heading">
                <div>
                  <span>Client Usage</span>
                  <strong>Ringkasan billing</strong>
                </div>
              </div>
              <div className="demo-kv-list">
                <div>
                  <span>Basis paket</span>
                  <strong>AI reply quota</strong>
                </div>
                <div>
                  <span>AI Replies</span>
                  <strong>1.840 / 2.500</strong>
                </div>
                <div>
                  <span>Warning</span>
                  <strong className="lime-pill">812 / 1.000</strong>
                </div>
                <div>
                  <span>Add-on</span>
                  <strong>120 / 500 replies</strong>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
