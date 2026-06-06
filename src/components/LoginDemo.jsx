import { useEffect, useState } from "react";
import { ArrowRight, Bot, Eye, Instagram, LockKeyhole, Mail, MessageCircle, Send } from "lucide-react";

const carouselSlides = [
  {
    title: "Booking Lebih Gampang, Admin Lebih Tenang",
    body: "Jawab otomatis soal jadwal, harga, dan antrian sebelum admin mengambil alih.",
    persona: "Service Desk",
    tone: "blue",
    questions: ["Bisa booking servis hari Sabtu?", "Ganti oli mobil berapa ya?", "Bengkel buka sampai jam berapa?"],
    metric: "128,7K",
    chart: "line",
  },
  {
    title: "Prospek Properti Lebih Cepat Tersaring",
    body: "Agent merangkum budget, lokasi, dan tipe unit sebelum sales masuk ke percakapan.",
    persona: "Property Sales",
    tone: "sky",
    questions: ["Masih ada unit 2BR di Bekasi?", "Saya cari rumah di bawah 800 juta", "Bisa KPR syariah?"],
    metric: "8/10",
    chart: "progress",
  },
  {
    title: "Order F&B Tidak Hilang di Jam Sibuk",
    body: "Pertanyaan menu, promo, dan pengiriman tetap tertangani ketika tim sedang padat.",
    persona: "Cafe Admin",
    tone: "coral",
    questions: ["Ada menu paket hemat?", "Bisa kirim ke kantor jam 1?", "Ada minuman non kopi?"],
    metric: "64%",
    chart: "bars",
  },
  {
    title: "Brief Jasa Lebih Rapi Sebelum Handoff",
    body: "Agent menanyakan kebutuhan inti satu per satu agar tim manusia punya konteks jelas.",
    persona: "Agency Support",
    tone: "violet",
    questions: ["Ada contoh desain logo sebelumnya?", "Berapa lama pengerjaan website?", "Bisa bantu konten reels juga?"],
    metric: "100%",
    chart: "progress",
  },
  {
    title: "Chat Online Shop Jadi Lead yang Siap Ditindak",
    body: "Stok, ukuran, promo, dan checkout bisa disaring dulu sebelum admin masuk.",
    persona: "Shop Assistant",
    tone: "amber",
    questions: ["Kak, bisa minta link checkout?", "Ada promo buat hari ini?", "Ukuran M masih ada?"],
    metric: "128,7K",
    chart: "line",
  },
];

function ChannelIcon({ index }) {
  const icons = [
    <MessageCircle className="h-5 w-5" key="wa" />,
    <Send className="h-5 w-5" key="telegram" />,
    <Instagram className="h-5 w-5" key="ig" />,
  ];

  return <span className={`login-channel-icon channel-${index}`}>{icons[index]}</span>;
}

function MiniChart({ type }) {
  if (type === "progress") {
    return (
      <div className="login-progress-card">
        <div className="login-progress-track">
          <span />
        </div>
        <div className="login-progress-label">
          <span>Progress</span>
          <strong>100%</strong>
        </div>
      </div>
    );
  }

  if (type === "bars") {
    return (
      <div className="login-chart-card">
        <div className="login-bars">
          {[42, 18, 34, 46, 22, 28, 58, 40, 52].map((height, index) => (
            <span style={{ height: `${height}%` }} key={`${height}-${index}`} />
          ))}
        </div>
        <div className="login-progress-label">
          <span>Current margin</span>
          <strong>Rp 640rb</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="login-chart-card">
      <strong>128,7K</strong>
      <div className="login-line-chart">
        <span />
      </div>
      <div className="login-chart-tooltip">Lead qualified +3.4%</div>
    </div>
  );
}

function LoginVisual({ slide }) {
  return (
    <div className={`login-visual-card tone-${slide.tone}`}>
      <div className="login-persona">
        <div className="login-persona-head" />
        <div className="login-persona-body">
          <span />
          <strong>{slide.persona}</strong>
        </div>
      </div>

      <div className="login-floating-stack">
        {slide.questions.map((question, index) => (
          <div className="login-question-card" key={question}>
            <ChannelIcon index={index} />
            <span>{question}</span>
          </div>
        ))}
        <MiniChart type={slide.chart} />
      </div>
    </div>
  );
}

export default function LoginDemo({ onEnterDemo }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = carouselSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main className="demo-auth-page login-split-page">
      <section className="login-form-panel">
        <a href="#beranda" className="login-brand">
          <span>
            <Bot className="h-5 w-5" />
          </span>
          <div>
            <strong>NusaAI</strong>
            <small>Messaging Agent</small>
          </div>
        </a>

        <div className="login-form-wrap">
          <p className="login-kicker">Demo akses tanpa akun</p>
          <h1>
            Selamat Datang di <span>NusaAI</span>
          </h1>
          <p className="login-subcopy">Login untuk melihat dashboard Messaging Agent. Untuk sementara, tombol login langsung masuk ke mode demo karena Supabase Auth masih ongoing.</p>

          <form className="login-form" onSubmit={(event) => event.preventDefault()}>
            <label className="login-input">
              <Mail className="h-4 w-4" />
              <input type="email" defaultValue="demo@nusaai.local" aria-label="Email demo" />
            </label>
            <label className="login-input">
              <LockKeyhole className="h-4 w-4" />
              <input type="password" defaultValue="demo-password" aria-label="Password demo" />
              <Eye className="h-4 w-4" />
            </label>

            <div className="login-help-row">
              <span>Credential hanya tampilan demo.</span>
              <button type="button">Lupa password?</button>
            </div>

            <button type="button" className="login-primary-btn" onClick={onEnterDemo}>
              Login Demo Tanpa Akun
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="login-divider">
            <span />
            <em>atau</em>
            <span />
          </div>

          <button type="button" className="login-google-btn" onClick={onEnterDemo}>
            <span>G</span>
            Masuk demo dengan Google
          </button>

          <p className="login-register-copy">
            Belum punya akun? <button type="button" onClick={onEnterDemo}>Lihat demo dulu</button>
          </p>
        </div>

        <p className="login-copyright">© 2026 NusaAI. Demo frontend-only, belum terhubung ke backend.</p>
      </section>

      <section className="login-carousel-panel">
        <div className="login-carousel-stage">
          <LoginVisual slide={slide} />
          <div className="login-slide-copy">
            <h2>{slide.title}</h2>
            <p>{slide.body}</p>
            <div className="login-dots" aria-label="Carousel slide selector">
              {carouselSlides.map((item, index) => (
                <button
                  type="button"
                  className={index === activeSlide ? "active" : ""}
                  aria-label={`Lihat slide ${item.persona}`}
                  onClick={() => setActiveSlide(index)}
                  key={item.persona}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="login-floating-consult">
        <MessageCircle className="h-4 w-4" />
        Konsultasi Sekarang
      </a>
    </main>
  );
}
