import { navItems } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <a href="#beranda" className="flex items-center gap-2 text-xl font-black tracking-[-0.05em]">
            <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-acid">N</span>
            NusaAI
          </a>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            Messaging Agent / GrowthForge WA Agent untuk membantu bisnis mengelola chat, lead, dan handoff manusia dengan lebih rapi.
          </p>
        </div>
        <div>
          <h3 className="footer-title">Navigasi</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Solusi</h3>
          <div className="footer-links">
            <a href="#fitur">AI Receptionist</a>
            <a href="#fitur">Lead Snapshot</a>
            <a href="#fitur">Human Handoff</a>
            <a href="#harga">Custom Workflow</a>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Kontak</h3>
          <div className="footer-links">
            <a href="#">Konsultasi</a>
            <a href="#">Login</a>
            <span>© 2026 NusaAI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
