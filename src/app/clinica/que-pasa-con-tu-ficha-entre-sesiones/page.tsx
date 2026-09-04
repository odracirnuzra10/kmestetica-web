import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { PERSON_ID, ORG_ID, SITE_URL, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Qué pasa con tu ficha entre sesiones",
  description:
    "Cómo KM Estética Profesional guarda tu ficha, fotos de evolución y notas entre sesiones en Los Ángeles.",
  alternates: {
    canonical: `${SITE_URL}/clinica/que-pasa-con-tu-ficha-entre-sesiones`,
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/clinica/que-pasa-con-tu-ficha-entre-sesiones#article`,
  headline: "Qué pasa con tu ficha entre sesiones",
  description:
    "Trazabilidad del tratamiento, fotos de evolución, notas del profesional y privacidad en KM Estética.",
  url: `${SITE_URL}/clinica/que-pasa-con-tu-ficha-entre-sesiones`,
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
          / Cómo funciona / Ficha entre sesiones
        </p>
        <p className="mt-6 text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
          Cómo funciona la clínica
        </p>
        <h1 className="mt-3 font-display text-3xl text-negro md:text-4xl">
          Qué pasa con tu ficha entre sesiones
        </h1>
        <p className="mt-3 text-sm text-espresso">
          Por{" "}
          <Link href="/fundador/" className="underline decoration-champagne underline-offset-4">
            Katherine Meza
          </Link>
        </p>

        <h2 className="mt-10 font-display text-2xl text-negro">
          Tu historial queda listo para la próxima visita
        </h2>
        <p className="mt-4 rounded-sm border-l-2 border-champagne bg-marfil px-5 py-4 text-[1.02rem] leading-relaxed text-espresso">
          Entre sesiones queda tu ficha: fotos de evolución, notas del profesional y el
          plan facial acordado. En la próxima visita no repetimos el diagnóstico desde
          cero. Solo el equipo de la consulta usa esos datos.
        </p>
        <p className="mt-5 leading-relaxed text-espresso">
          Al cerrar cada sesión se registran observaciones clínicas y, si corresponde,
          control fotográfico con el mismo criterio de encuadre.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          Esa información vive en Clinera, el sistema donde la consulta concentra agenda
          y seguimiento. No se publica ni se comparte fuera del equipo tratante.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          Si vienes a un control, Katherine revisa lo anterior antes de indicar el
          siguiente paso del plan.
        </p>

        <div className="mt-12">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Agenda tu hora
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
