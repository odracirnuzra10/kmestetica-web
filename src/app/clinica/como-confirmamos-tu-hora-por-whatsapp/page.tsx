import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import { PERSON_ID, ORG_ID, SITE_URL, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cómo confirmamos tu hora por WhatsApp",
  description:
    "Cómo KM Estética Profesional confirma tu hora por WhatsApp con AURA en Los Ángeles, Chile. Agenda tu hora.",
  alternates: {
    canonical: `${SITE_URL}/clinica/como-confirmamos-tu-hora-por-whatsapp`,
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/clinica/como-confirmamos-tu-hora-por-whatsapp#article`,
  headline: "Cómo confirmamos tu hora por WhatsApp",
  description:
    "Flujo de reserva, confirmación automática, recordatorio y reagendamiento en KM Estética Profesional.",
  url: `${SITE_URL}/clinica/como-confirmamos-tu-hora-por-whatsapp`,
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
          / Cómo funciona / Confirmación WhatsApp
        </p>
        <p className="mt-6 text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
          Cómo funciona la clínica
        </p>
        <h1 className="mt-3 font-display text-3xl text-negro md:text-4xl">
          Cómo confirmamos tu hora por WhatsApp
        </h1>
        <p className="mt-3 text-sm text-espresso">
          Por{" "}
          <Link href="/fundador/" className="underline decoration-champagne underline-offset-4">
            Katherine Meza
          </Link>
        </p>

        <h2 className="mt-10 font-display text-2xl text-negro">
          Reserva, confirmación y recordatorio en el mismo hilo
        </h2>
        <p className="mt-4 rounded-sm border-l-2 border-champagne bg-marfil px-5 py-4 text-[1.02rem] leading-relaxed text-espresso">
          Cuando agendas, recibes un WhatsApp de confirmación con día y hora. Después
          llega un recordatorio. Si necesitas cambiar, respondes el mismo mensaje y te
          ofrecen cupos libres. Así queda claro qué hacer sin llamar a la consulta.
        </p>
        <p className="mt-5 leading-relaxed text-espresso">
          Primero escribes por WhatsApp o eliges un horario disponible. Al quedar
          reservada la hora, el sistema envía la confirmación al número que diste.
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          Esos mensajes los envía AURA, el asistente que opera sobre la{" "}
          <a
            href="https://clinera.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-champagne underline-offset-4 hover:text-negro"
          >
            plataforma de agendamiento con IA para clínicas
          </a>
          .
        </p>
        <p className="mt-4 leading-relaxed text-espresso">
          Si no puedes asistir, respondes el hilo y te ofrecen cupos. El cambio queda
          registrado en la agenda.
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
