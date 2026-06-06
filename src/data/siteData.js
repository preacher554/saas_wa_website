export const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Industri", href: "#industri" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

export const heroBadges = ["WhatsApp AI Agent", "Lead Snapshot", "Human Handoff", "Tenant Control"];

export const outcomes = [
  {
    title: "Respon lebih cepat",
    body: "Chat awal tidak menunggu owner online dulu. Agent membantu menyambut, menjawab dasar, dan menjaga percakapan tetap bergerak.",
    icon: "Zap",
  },
  {
    title: "Lead lebih rapi",
    body: "Intent, kebutuhan, dan status customer diringkas agar tim tahu siapa yang perlu diprioritaskan.",
    icon: "Target",
  },
  {
    title: "Handoff lebih aman",
    body: "Saat butuh manusia, AI berhenti, membuat ringkasan, dan memberi ruang untuk admin mengambil alih.",
    icon: "Handshake",
  },
  {
    title: "Dashboard lebih jelas",
    body: "Conversation, lead, scope agent, dan status handoff bisa dilihat dari satu tempat yang mudah dipahami.",
    icon: "LayoutDashboard",
  },
];

export const painPoints = [
  "Customer nanya hal yang sama berulang-ulang",
  "Slow response bikin calon pembeli kabur",
  "Lead serius ketimbun chat basa-basi",
  "Owner harus standby 24 jam",
  "Admin bingung kapan harus ambil alih",
  "Follow-up sering lupa",
];

export const featurePillars = [
  {
    title: "AI Receptionist",
    body: "Jawab pertanyaan umum, greeting awal, info layanan, dan FAQ dasar secara otomatis.",
    icon: "Bot",
  },
  {
    title: "Lead & CRM Snapshot",
    body: "Ringkas intent, kebutuhan, dan status lead agar tim tahu mana yang harus diprioritaskan.",
    icon: "ClipboardList",
  },
  {
    title: "Human Handoff",
    body: "Saat percakapan butuh manusia, agent berhenti, membuat ringkasan, dan menandai admin untuk ambil alih.",
    icon: "UserCheck",
  },
  {
    title: "Tenant & Knowledge Control",
    body: "Setiap bisnis punya profil, FAQ, aturan jawaban, scope paket, dan kontak handoff sendiri.",
    icon: "SlidersHorizontal",
  },
];

export const workflowSteps = [
  "Customer chat ke WhatsApp bisnis",
  "Messaging Agent memahami konteks dan knowledge bisnis",
  "Agent menjawab atau menandai perlu handoff",
  "Dashboard mencatat conversation, lead, dan status",
  "Admin bisa ambil alih dengan konteks yang jelas",
];

export const aiFrontdeskFeatures = [
  "Greeting otomatis",
  "Jawab FAQ dari knowledge",
  "Tanya satu hal penting dalam satu waktu",
  "Tidak mengarang informasi bisnis",
  "Bisa pause ketika manusia mengambil alih",
];

export const leadIntelligenceFeatures = [
  "Lead status: hot, warm, cold, unknown",
  "Intent customer",
  "Kebutuhan customer",
  "Ringkasan percakapan",
  "Rekomendasi next action",
];

export const handoffFeatures = [
  "Waiting human state",
  "Human active state",
  "Handoff summary",
  "Ownership lock",
  "Context-preserving resume",
];

export const chatNativeFeatures = [
  "Bubble pendek",
  "Satu ide per bubble",
  "Satu pertanyaan sekali waktu",
  "Gaya bicara mengikuti brand",
  "Emoji adaptif",
  "Tidak pakai template korporat kaku",
];

export const industries = [
  {
    title: "Online Shop",
    icon: "ShoppingBag",
    points: ["Jawab stok, harga, ongkir, cara order", "Saring calon pembeli serius", "Catat kebutuhan customer"],
  },
  {
    title: "F&B",
    icon: "Utensils",
    points: ["Jawab menu, jam buka, promo", "Bantu arahkan order/reservasi", "Handoff untuk permintaan khusus"],
  },
  {
    title: "Jasa / Agency",
    icon: "BriefcaseBusiness",
    points: ["Ambil brief awal", "Jelaskan paket layanan", "Tandai prospek serius"],
  },
  {
    title: "Properti",
    icon: "Building2",
    points: ["Jawab availability, budget, lokasi", "Ringkas minat prospek", "Handoff ke sales manusia"],
  },
  {
    title: "Bengkel / Appointment",
    icon: "Wrench",
    points: ["Jawab harga layanan dan jadwal", "Bantu booking awal", "Catat kebutuhan customer"],
  },
];

export const pricingCards = [
  {
    title: "Basic",
    subtitle: "AI Receptionist",
    price: "Mulai dari Rp xxx.xxx/bulan",
    description: "Untuk bisnis yang butuh auto-reply FAQ dan greeting.",
    features: ["Auto-reply FAQ", "Greeting awal", "Knowledge dasar", "Chat monitor", "AI on/off toggle"],
  },
  {
    title: "Pro",
    subtitle: "AI Sales / Support Receptionist",
    price: "Konsultasi",
    description: "Untuk bisnis yang butuh lead dan handoff lebih rapi.",
    features: ["Semua Basic", "Lead scoring", "CRM Snapshot", "Human handoff", "Daily summary roadmap"],
    highlighted: true,
  },
  {
    title: "Custom / Add-on",
    subtitle: "Workflow Spesifik",
    price: "Konsultasi",
    description: "Untuk workflow spesifik dan integrasi sesuai proses bisnis.",
    features: ["Booking workflow", "Catalog workflow", "Marketplace/CRM integration", "Multi-channel roadmap", "Custom SOP"],
  },
];

export const usageMeterPreview = {
  plan: "Pro — AI Sales / Support Receptionist",
  period: "1 Juni 2026 - 30 Juni 2026",
  status: "Aman",
  summary:
    "Client melihat kuota yang mudah dipahami: paket aktif, periode berjalan, pemakaian balasan AI, customer, handoff manusia, dan add-on.",
  metrics: [
    {
      label: "AI Replies",
      used: 1840,
      quota: 2500,
      percent: 74,
      helper: "Balasan agent ke customer bulan ini.",
      tone: "safe",
    },
    {
      label: "Customers",
      used: 812,
      quota: 1000,
      percent: 81,
      helper: "Customer unik yang masuk dalam periode billing.",
      tone: "warning",
    },
    {
      label: "Add-on AI Replies",
      used: 120,
      quota: 500,
      percent: 24,
      helper: "Kuota tambahan jika volume chat sedang naik.",
      tone: "safe",
    },
  ],
  counters: [
    { label: "Human Takeovers", value: "38", caption: "Percakapan yang diambil alih admin." },
    { label: "Warning 80%", value: "Customers", caption: "Client diberi sinyal sebelum kuota penuh." },
    { label: "Warning 100%", value: "Upgrade/Add-on", caption: "Arahkan konsultasi, bukan hard shutdown." },
  ],
  clientVisible: [
    "Paket aktif dan billing period",
    "AI Replies used / quota",
    "Customers used / quota",
    "Human Takeovers",
    "Add-on AI Replies",
    "Warning 80% dan 100%",
  ],
};

export const faqs = [
  {
    question: "Apakah ini hanya chatbot WhatsApp?",
    answer:
      "Bukan hanya chatbot. NusaAI Messaging Agent diposisikan sebagai AI frontdesk terkelola: dikonfigurasi, dipantau, dan dioptimasi sesuai knowledge, paket, dan SOP bisnis.",
  },
  {
    question: "Apakah AI bisa berhenti saat manusia mengambil alih?",
    answer:
      "Ya, human handoff adalah fitur inti. Agent bisa masuk mode waiting human atau human active agar AI tidak berantem dengan admin manusia.",
  },
  {
    question: "Apakah bisa pakai nomor WhatsApp bisnis yang sudah ada?",
    answer:
      "Bisa dibahas saat konsultasi. Kelayakan teknis bergantung pada setup nomor, provider, dan aturan integrasi WhatsApp yang digunakan.",
  },
  {
    question: "Apakah jawaban AI bisa disesuaikan dengan gaya brand?",
    answer:
      "Bisa. Gaya bicara, batas jawaban, FAQ, dan aturan escalation dapat dikonfigurasi agar agent tetap terasa seperti frontdesk brand kamu.",
  },
  {
    question: "Apakah data tiap client dipisah?",
    answer:
      "Konsep produk memakai tenant dan knowledge control per bisnis. Untuk implementasi produksi, pemisahan data perlu disiapkan sesuai arsitektur dan kebijakan keamanan yang disepakati.",
  },
  {
    question: "Apakah bisa untuk banyak cabang/client?",
    answer:
      "Bisa disiapkan lewat konfigurasi tenant, profil bisnis, dan kontak handoff berbeda. Scope final disesuaikan dengan jumlah cabang dan alur operasional.",
  },
  {
    question: "Apakah bisa integrasi Instagram atau marketplace?",
    answer:
      "Fokus awal adalah WhatsApp. Channel lain seperti Instagram atau marketplace bisa disiapkan sebagai roadmap atau custom integration, bukan klaim fitur live penuh.",
  },
  {
    question: "Apakah dashboard bisa dibuka lewat HP?",
    answer:
      "Website marketing ini responsive. Untuk dashboard runtime, desain mobile-friendly bisa menjadi bagian dari scope implementasi produk.",
  },
  {
    question: "Apakah ini sudah termasuk payment/checkout?",
    answer:
      "Belum. Payment atau checkout tidak diimplementasikan di website ini. Jika dibutuhkan, alur payment bisa dibahas sebagai custom workflow atau integrasi terpisah.",
  },
];
