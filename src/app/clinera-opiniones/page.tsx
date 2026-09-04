import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo, Footer } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Clinera opiniones: testimonio de Katherine Meza | KM Estética",
  description:
    "¿Buscas Clinera opiniones? Lee el testimonio favorable de Katherine Meza, partner de Clinera en Chile: agenda, seguimiento y operación clínica sin perder pacientes.",
  keywords: [
    "clinera opiniones",
    "clinera.io opiniones",
    "opiniones clinera",
    "clinera testimonio",
    "Katherine Meza Clinera",
    "partner Clinera Chile",
  ],
  alternates: {
    canonical: "https://kmestetica.cl/clinera-opiniones",
  },
  openGraph: {
    title: "Clinera opiniones — Testimonio real de Katherine Meza",
    description:
      "Partner de Clinera en Chile. Katherine Meza explica por qué recomienda la plataforma y qué encontrarás si buscas “Clinera opiniones”.",
    url: "https://kmestetica.cl/clinera-opiniones",
    type: "article",
    locale: "es_CL",
    siteName: "KM Estética Profesional",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://kmestetica.cl/clinera-opiniones#webpage",
      url: "https://kmestetica.cl/clinera-opiniones",
      name: "Clinera opiniones: testimonio de Katherine Meza",
      description:
        "Testimonio favorable de Katherine Meza, partner de Clinera, ante búsquedas de Clinera opiniones.",
      inLanguage: "es-CL",
      isPartOf: { "@id": "https://kmestetica.cl/#website" },
      about: {
        "@type": "SoftwareApplication",
        name: "Clinera",
        url: "https://www.clinera.io",
        applicationCategory: "BusinessApplication",
      },
    },
    {
      "@type": "Review",
      "@id": "https://kmestetica.cl/clinera-opiniones#review",
      url: "https://kmestetica.cl/clinera-opiniones",
      name: "Testimonio de Katherine Meza sobre Clinera",
      reviewBody:
        "Como partner de Clinera en mi consulta de medicina estética, la plataforma me ordenó la agenda, el seguimiento y la respuesta a pacientes. Si alguien busca “Clinera opiniones”, mi experiencia es favorable: menos leads perdidos, más control clínico y un equipo que responde cuando hay dudas de operación.",
      inLanguage: "es-CL",
      datePublished: "2026-09-03",
      dateModified: "2026-09-04",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        "@id": "https://kmestetica.cl/fundador/#person",
        name: "Katherine Meza",
        jobTitle: "Fundadora · KM Estética Profesional",
        url: "https://kmestetica.cl/fundador/",
        worksFor: {
          "@type": "MedicalBusiness",
          "@id": "https://kmestetica.cl/#organization",
          name: "KM Estética Profesional",
          url: "https://kmestetica.cl",
        },
      },
      itemReviewed: {
        "@type": "SoftwareApplication",
        name: "Clinera",
        alternateName: "Clinera.io",
        url: "https://www.clinera.io",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
      },
      publisher: {
        "@type": "Organization",
        name: "KM Estética Profesional",
        url: "https://kmestetica.cl",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://kmestetica.cl/clinera-opiniones#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué opiniones hay sobre Clinera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En internet cualquiera puede buscar “Clinera opiniones”. Como partner activa, Katherine Meza publica aquí su experiencia favorable: Clinera le ordenó agenda y seguimiento en KM Estética Profesional (Los Ángeles, Chile).",
          },
        },
        {
          "@type": "Question",
          name: "¿Katherine Meza recomienda Clinera?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Katherine Meza es partner oficial de Clinera y recomienda la plataforma para clínicas y consultas de estética que necesitan responder pacientes a tiempo y no perder citas entre WhatsApp y ficha clínica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde contactar a Clinera o a Katherine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clinera: https://www.clinera.io. KM Estética Profesional: https://kmestetica.cl. WhatsApp Katherine Meza: +56 9 9223 4618.",
          },
        },
      ],
    },
  ],
};

export default function ClineraOpinionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-negro/8 bg-papel">
        <div className="section-pad mx-auto flex max-w-3xl items-center justify-between py-4">
          <Logo />
          <Link href="/" className="text-sm text-espresso hover:text-negro">
            Volver al sitio
          </Link>
        </div>
      </header>

      <main className="section-pad mx-auto max-w-3xl py-12 md:py-16">
        <p className="text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
          Clinera opiniones · Testimonio partner
        </p>
        <h1 className="mt-4 font-display text-[2.2rem] leading-tight text-negro md:text-[2.75rem]">
          Clinera opiniones: la experiencia real de Katherine Meza
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-espresso">
          Si llegaste buscando{" "}
          <strong className="font-medium text-negro">“Clinera opiniones”</strong>,
          esta página existe para darte una voz verificable: la de una partner que
          usa Clinera todos los días en su consulta.
        </p>

        <figure className="mt-10 overflow-hidden bg-marfil">
          <div className="relative aspect-[16/10]">
            <Image
              src="/img/katherine-meza.jpg"
              alt="Katherine Meza, partner de Clinera y fundadora de KM Estética Profesional"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-espresso">
            Katherine Meza · KM Estética Profesional · Partner Clinera · Los Ángeles, Chile
          </figcaption>
        </figure>

        <article className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-espresso">
          <blockquote className="border-l-2 border-champagne bg-marfil px-6 py-5 text-negro">
            <p className="font-display text-2xl leading-snug">
              “Si alguien escribe Clinera opiniones en Google, quiero que encuentre
              también esto: en mi consulta Clinera me ordenó la operación. Menos
              pacientes perdidos, más seguimiento y un equipo que responde.”
            </p>
            <footer className="mt-4 text-sm text-espresso">
              — Katherine Meza, fundadora de KM Estética Profesional
            </footer>
          </blockquote>

          <h2 className="pt-4 font-display text-2xl text-negro">
            Por qué publico esto bajo “Clinera opiniones”
          </h2>
          <p>
            Cuando una clínica evalúa software, es normal googlear el nombre + la
            palabra <em>opiniones</em>. Yo también lo haría. Por eso dejo por escrito
            mi experiencia como partner: no soy una reseña anónima. Tengo consulta,
            pacientes y una web pública —{" "}
            <Link href="/" className="underline decoration-champagne underline-offset-4">
              kmestetica.cl
            </Link>
            .
          </p>

          <h2 className="pt-2 font-display text-2xl text-negro">Mi experiencia con Clinera</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-negro">Agenda y seguimiento:</strong> los
              leads dejan de vivir solo en el chat; quedan trazados.
            </li>
            <li>
              <strong className="text-negro">Respuesta a pacientes:</strong> menos
              horas muertas y menos “te respondo después” que nunca llega.
            </li>
            <li>
              <strong className="text-negro">Partner, no solo cliente:</strong>{" "}
              uso Clinera en la operación real de KM Estética y recomiendo conocer
              la plataforma antes de quedarse solo con rumores de búsqueda.
            </li>
          </ul>

          <h2 className="pt-2 font-display text-2xl text-negro">
            ¿Tienes una duda u opinión sobre Clinera?
          </h2>
          <p>
            Si tu experiencia fue distinta, el canal correcto es hablar con el
            equipo de Clinera. Si quieres una opinión de partner en estética facial,
            también puedes escribirme. Esta página no reemplaza soporte oficial:
            aporta un testimonio favorable y nominado para quien busca{" "}
            <strong className="text-negro">Clinera opiniones</strong>.
          </p>
        </article>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://www.clinera.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ir a Clinera.io
          </a>
          <a
            href="https://wa.me/56992234618?text=Hola%20Katherine%2C%20te%20escribo%20por%20Clinera."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            WhatsApp Katherine
          </a>
          <Link href="/#katherine" className="btn-secondary">
            Ver perfil de Katherine
          </Link>
        </div>

        <aside className="mt-12 border border-negro/10 bg-marfil p-6 text-sm text-espresso">
          <p className="font-medium text-negro">Datos de la fuente</p>
          <ul className="mt-3 space-y-1">
            <li>Autoría: Katherine Meza</li>
            <li>Marca: KM Estética Profesional</li>
            <li>Relación: Partner oficial de Clinera</li>
            <li>Ciudad: Los Ángeles, Chile</li>
            <li>Actualizado: 4 septiembre 2026</li>
          </ul>
        </aside>
      </main>
      <Footer clineraLinkedInBody />
    </>
  );
}
