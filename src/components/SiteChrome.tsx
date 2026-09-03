import Link from "next/link";
import { CLINERA_URL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contact";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex flex-col leading-none ${className}`} aria-label="KM Estética Profesional">
      <span className="font-display text-[1.85rem] tracking-[0.08em] text-negro">KM</span>
      <span className="mt-1 block h-px w-full bg-negro/70" aria-hidden />
      <span className="mt-1 text-[0.58rem] font-medium tracking-[0.22em] text-espresso uppercase">
        Estética Profesional
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-negro/8 bg-papel/90 backdrop-blur-md">
      <div className="section-pad mx-auto flex max-w-6xl items-center justify-between gap-4 py-3.5">
        <Logo />
        <nav className="hidden items-center gap-7 text-[0.82rem] tracking-wide text-espresso md:flex" aria-label="Principal">
          <a href="#tratamientos" className="hover:text-negro">
            Tratamientos
          </a>
          <a href="#antes-despues" className="hover:text-negro">
            Antes y después
          </a>
          <a href="#katherine" className="hover:text-negro">
            Katherine
          </a>
          <a href="#agenda" className="hover:text-negro">
            Agenda
          </a>
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0 text-[0.8rem]"
        >
          Agendar evaluación
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-negro/10 bg-marfil">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-espresso">
            Medicina estética facial en Los Ángeles, Chile. Atención personalizada con
            respaldo tecnológico de{" "}
            <a
              href={CLINERA_URL}
              className="underline decoration-champagne underline-offset-4 hover:text-negro"
              rel="noopener noreferrer"
              target="_blank"
            >
              Clinera
            </a>
            .
          </p>
        </div>
        <div className="text-sm text-espresso">
          <p className="font-display text-lg text-negro">KM Estética Profesional</p>
          <p className="mt-1">Katherine Meza · Partner Clinera</p>
          <p className="mt-1">
            WhatsApp:{" "}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-champagne underline-offset-4 hover:text-negro"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </p>
          <p className="mt-1">Los Ángeles, Chile · kmestetica.cl</p>
        </div>
      </div>
      <div className="section-pad mx-auto max-w-6xl border-t border-negro/8 py-4 text-xs text-espresso/80">
        © {new Date().getFullYear()} KM Estética Profesional. Todos los derechos reservados.
      </div>
    </footer>
  );
}
