import { ArrowLeft, ArrowRight, Bot, LockKeyhole, ShieldCheck } from "lucide-react";

export default function LoginDemo({ onEnterDemo }) {
  return (
    <main className="demo-auth-page">
      <div className="demo-auth-shell">
        <section className="demo-auth-copy">
          <a href="#beranda" className="inline-flex items-center gap-2 text-sm font-black text-muted transition hover:text-ink">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke landing page
          </a>

          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-line bg-silver px-3 py-2 text-sm font-bold text-muted shadow-[inset_0_1px_0_#fff]">
            <span className="h-2 w-2 rounded-full bg-acid" />
            Demo mode tanpa akun
          </div>

          <h1 className="mt-7 max-w-3xl text-[clamp(2.6rem,6vw,5.7rem)] font-black leading-[0.98] tracking-[-0.07em]">
            Masuk ke Dashboard NusaAI Tanpa Setup Auth Dulu
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            Karena backend Supabase masih ongoing, halaman ini memakai akses demo lokal. Kamu bisa melihat tampilan dalam Messaging Agent tanpa email, password, atau koneksi database.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["No account", "No Supabase", "No secret"].map((item) => (
              <div className="machined-card px-4 py-3 text-sm font-black" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="demo-login-card">
          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-acid">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-black tracking-[-0.04em]">NusaAI</p>
                <span className="text-sm font-semibold text-muted">Messaging Agent</span>
              </div>
            </div>
            <span className="rounded-full bg-silver px-3 py-1 text-xs font-black text-muted">DEMO</span>
          </div>

          <div className="grid gap-3">
            <div className="demo-disabled-field">
              <span>Email</span>
              <strong>demo@nusaai.local</strong>
            </div>
            <div className="demo-disabled-field">
              <span>Password</span>
              <strong>••••••••••••</strong>
            </div>
          </div>

          <button type="button" className="btn-acid mt-6 w-full" onClick={onEnterDemo}>
            Masuk Demo Tanpa Akun
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-5 grid gap-3">
            <div className="demo-auth-note">
              <LockKeyhole className="h-4 w-4" />
              Tidak ada autentikasi asli di mode ini.
            </div>
            <div className="demo-auth-note">
              <ShieldCheck className="h-4 w-4" />
              Supabase Auth bisa dipasang nanti tanpa mengubah arah UI.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
