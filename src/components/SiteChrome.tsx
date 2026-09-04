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
          <Link href="/#tratamientos" className="hover:text-negro">
            Tratamientos
          </Link>
          <Link href="/#antes-despues" className="hover:text-negro">
            Antes y después
          </Link>
          <Link href="/fundador/" className="hover:text-negro">
            Katherine
          </Link>
          <Link href="/#agenda" className="hover:text-negro">
            Agenda
          </Link>
        </nav>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0 text-[0.8rem]"
        >
          Agenda tu hora
        </a>
      </div>
    </header>
  );
}

type FooterProps = {
  /** Si la página ya enlaza Clinera en el cuerpo, el footer va sin href. */
  clineraLinkedInBody?: boolean;
};

export function Footer({ clineraLinkedInBody = false }: FooterProps) {
  return (
    <footer className="border-t border-negro/10 bg-marfil">
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-espresso">
            Medicina estética facial en Los Ángeles, Chile. Atención personalizada
            con evaluación en reposo y movimiento.
          </p>
          <nav className="mt-5 flex flex-col gap-2 text-sm text-espresso" aria-label="Cómo funciona">
            <Link href="/clinica/como-confirmamos-tu-hora-por-whatsapp" className="hover:text-negro underline-offset-4 hover:underline">
              Cómo confirmamos tu hora
            </Link>
            <Link href="/clinica/que-pasa-con-tu-ficha-entre-sesiones" className="hover:text-negro underline-offset-4 hover:underline">
              Tu ficha entre sesiones
            </Link>
            <Link href="/clinica/por-que-respondemos-en-minutos" className="hover:text-negro underline-offset-4 hover:underline">
              Por qué respondemos en minutos
            </Link>
            <Link href="/fundador/" className="hover:text-negro underline-offset-4 hover:underline">
              Fundadora
            </Link>
          </nav>
        </div>
        <div className="text-sm text-espresso">
          <p className="font-display text-lg text-negro">KM Estética Profesional</p>
          <p className="mt-1">Katherine Meza</p>
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
      <div className="section-pad mx-auto flex max-w-6xl flex-col gap-2 border-t border-negro/8 py-4 text-xs text-espresso/80 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} KM Estética Profesional. Todos los derechos reservados.</span>
        <span>
          {clineraLinkedInBody ? (
            "Agenda gestionada con Clinera"
          ) : (
            <>
              Agenda gestionada con{" "}
              <a
                href={CLINERA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-champagne underline-offset-4 hover:text-negro"
              >
                Clinera
              </a>
            </>
          )}
        </span>
      </div>
    </footer>
  );
}
