import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteData.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-2xl">
      <nav className="container-shell flex h-16 items-center justify-between" aria-label="Navigasi utama">
        <a href="#beranda" className="flex items-center gap-2 text-lg font-extrabold tracking-[-0.04em]" onClick={closeMenu}>
          <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-acid text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            N
          </span>
          NusaAI
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#" className="btn-ghost px-5 py-2.5 text-sm">
            Login
          </a>
          <a href="#" className="btn-acid px-5 py-2.5 text-sm">
            Konsultasi
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">Buka menu</span>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-paper/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-sm font-semibold text-muted" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <div className="grid gap-3 pt-3">
              <a href="#" className="btn-ghost w-full" onClick={closeMenu}>
                Login
              </a>
              <a href="#" className="btn-acid w-full" onClick={closeMenu}>
                Konsultasi
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
