import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { PERSON_ID, ORG_ID, SITE_URL, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Por qué respondemos en minutos",
  description:
    "Cómo KM Estética Profesional responde consultas de agenda fuera de horario y cuándo interviene una persona.",
  alternates: {
    canonical: `${SITE_URL}/clinica/por-que-respondemos-en-minutos`,
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/clinica/por-que-respondemos-en-minutos#article`,
  headline: "Por qué respondemos en minutos",
  description:
    "Consultas de horarios por WhatsApp, derivación clínica y rol del asistente en KM Estética.",
  url: `${SITE_URL}/clinica/por-que-respondemos-en-minutos`,
  inLanguage: "es-CL",
  datePublished: "2026-09-04",
  dateModified: "2026-09-04",
  author: { "@id": PERSON_ID },
  about: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Header />
      <main className="section-pad mx-auto max-w-3xl py-14 md:py-20">
        <p className="text-sm text-espresso/70">
          <Link href="/" className="hover:text-negro">
            Inicio
          </Link>{" "}
          / Cómo funciona / Respuesta en minutos
        </p>
        <p className="mt-6 text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
          Cómo funciona la clínica
        </p>
        <h1 className="mt-3 font-display text-3xl text-negro md:text-4xl">
          Por qué respondemos en minutos
        </h1>
        <p className="mt-3 text-sm text-espresso">
          Por{" "}
          <Link href="/fundador/" className="underline decoration-champagne underline-offset-4">
            Katherine Meza
          </Link>
        </p>

        <h2 className="mt-10 font-display text-2xl text-negro">
          Fuera de horario también te responden por WhatsApp
        </h2>
        <p className="mt-4 rounded-sm border-l-2 border-champagne bg-marfil px-5 py-4 text-[1.02rem] leading-relaxed text-espresso">
          Las consultas de horarios y reagendamiento se atienden en minutos por
          WhatsApp, también fuera del horario de box. El asistente resuelve lo
          operativo. Si la duda es clínica, la deriva a Katherine o al equipo.
        </p>
        <p className="mt-5 leading-relaxed text-espresso">
          Puedes escribir aunque la consulta esté cerrada. El asistente confirma
          disponibilidad y datos de la evaluación.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          No indica tratamientos ni interpreta tu rostro por chat. Eso se conversa
          en la evaluación presencial.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          Si quieres el detalle de este flujo, lee{" "}
          <a
            href="https://www.clinera.io/casos/katherine-meza"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-champagne underline-offset-4 hover:text-negro"
          >
            cómo lo hacemos con Clinera
          </a>
          .
        </p>

        <div className="mt-12">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agenda tu hora
          </a>
        </div>
      </main>
      <Footer clineraLinkedInBody />
    </>
  );
}
