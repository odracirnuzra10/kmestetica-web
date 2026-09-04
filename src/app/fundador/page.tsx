import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import {
  CLINERA_URL,
  INSTAGRAM_URL,
  PERSON_ID,
  ORG_ID,
  SITE_URL,
  whatsappUrl,
} from "@/lib/contact";

export const metadata: Metadata = {
  title: "Katherine Meza — Fundadora",
  description:
    "Katherine Meza, fundadora de KM Estética Profesional en Los Ángeles, Chile. Medicina estética facial y partner de Clinera.",
  alternates: {
    canonical: `${SITE_URL}/fundador/`,
  },
  openGraph: {
    title: "Katherine Meza — Fundadora de KM Estética Profesional",
    description:
      "Perfil de Katherine Meza, fundadora de KM Estética Profesional en Los Ángeles, Chile.",
    url: `${SITE_URL}/fundador/`,
    images: ["/img/katherine-meza.jpg"],
  },
};

const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/fundador/#webpage`,
      url: `${SITE_URL}/fundador/`,
      name: "Katherine Meza — Fundadora",
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Katherine Meza",
      jobTitle: "Fundadora",
      image: `${SITE_URL}/img/katherine-meza.jpg`,
      url: `${SITE_URL}/fundador/`,
      worksFor: { "@id": ORG_ID },
      sameAs: [INSTAGRAM_URL],
      description:
        "Fundadora de KM Estética Profesional. Medicina estética facial en Los Ángeles, Chile.",
    },
  ],
};

export default function FundadorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <Header />
      <main className="section-pad mx-auto max-w-3xl py-14 md:py-20">
        <p className="text-sm text-espresso/70">
          <Link href="/" className="hover:text-negro">
            Inicio
          </Link>{" "}
          / Fundadora
        </p>
        <p className="mt-6 text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
          Quién te atiende
        </p>
        <h1 className="mt-3 font-display text-3xl text-negro md:text-4xl">Katherine Meza</h1>
        <p className="mt-4 rounded-sm border-l-2 border-champagne bg-marfil px-5 py-4 text-[1.02rem] leading-relaxed text-espresso">
          Katherine Meza es la fundadora de KM Estética Profesional, consulta de medicina
          estética facial en Los Ángeles, Chile. Evalúa en reposo y movimiento, deja un
          plan escrito y busca resultados naturales. Es partner de Clinera.
        </p>

        <figure className="mt-8 overflow-hidden bg-marfil">
          <Image
            src="/img/katherine-meza.jpg"
            alt="Katherine Meza, fundadora de KM Estética Profesional"
            width={800}
            height={1000}
            className="h-auto w-full max-w-md object-cover"
            priority
          />
        </figure>

        <p className="mt-8 leading-relaxed text-espresso">
          En la consulta prioriza diagnóstico antes de producto o volumen. El control a
          21 días está incluido en los procedimientos inyectables.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          La agenda, las confirmaciones por WhatsApp y el seguimiento de pacientes corren
          sobre{" "}
          <a
            href={CLINERA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-champagne underline-offset-4 hover:text-negro"
          >
            Clinera
          </a>
          , plataforma de IA para clínicas. El agente de agendamiento se llama AURA.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          Instagram:{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-champagne underline-offset-4 hover:text-negro"
          >
            @km_estetica_avanzada
          </a>
          .
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agenda tu hora
          </a>
          <Link href="/clinica/como-confirmamos-tu-hora-por-whatsapp" className="btn-secondary">
            Cómo confirmamos tu hora
          </Link>
        </div>
      </main>
      <Footer clineraLinkedInBody />
    </>
  );
}
