/** Entidades y contacto para puente SEO/AEO → Clinera */

export const SITE_URL = "https://kmestetica.cl";
export const ORG_ID = `${SITE_URL}/#organization`;
export const CLINIC_ID = `${SITE_URL}/#losangeles`;
export const PERSON_ID = `${SITE_URL}/fundador/#person`;

/** @ids compartidos con Hebe / Lumina / Clinera */
export const OACG_ID = "https://oacg.cl/#organization";
export const CLINERA_ID = "https://clinera.io/#organization";
export const RICARDO_ID = "https://www.metodohebe.cl/fundador/#person";

export const WHATSAPP_E164 = "56992234618";
export const WHATSAPP_DISPLAY = "+56 9 9223 4618";
export const CLINERA_URL = "https://www.clinera.io";
export const INSTAGRAM_URL = "https://www.instagram.com/km_estetica_avanzada/";
export const INSTAGRAM_HANDLE = "@km_estetica_avanzada";

const DEFAULT_MSG =
  "Hola Katherine, quiero agendar una evaluación en KM Estética Profesional.";

export function whatsappUrl(message: string = DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}

/** Dirección completa pendiente (solo comuna confirmada en el sitio). */
export const SEDE = {
  name: "KM Estética Profesional — Los Ángeles",
  streetAddress: "", // TODO: calle y número
  addressLocality: "Los Ángeles",
  addressRegion: "Región del Biobío",
  postalCode: "", // TODO
  addressCountry: "CL",
  // TODO: horario exacto si difiere
  hoursNote: "Agenda por WhatsApp",
};

export const TREATMENTS = [
  {
    name: "Toxina botulínica",
    description: "Líneas de expresión y armonización del tercio superior.",
    url: `${SITE_URL}/#tratamientos`,
  },
  {
    name: "Ácido hialurónico",
    description: "Rinomodelación, pómulos, mentón y perfilado facial.",
    url: `${SITE_URL}/#tratamientos`,
  },
  {
    name: "Bioestimulación y tensores",
    description: "Hilos PDO y bioestimuladores para firmeza progresiva.",
    url: `${SITE_URL}/#tratamientos`,
  },
  {
    name: "Mesoterapia",
    description: "Vitaminas y activos para glow y calidad de piel.",
    url: `${SITE_URL}/#tratamientos`,
  },
  {
    name: "Depilación láser diodo",
    description: "Planes personalizados por zona y fototipo.",
    url: `${SITE_URL}/#tratamientos`,
  },
] as const;

export const FAQ_OPS = [
  {
    q: "¿Cómo confirmo mi hora?",
    a: "Recibes confirmación automática por WhatsApp. La envía AURA, el asistente de IA de Clinera que gestiona nuestra agenda.",
  },
  {
    q: "¿Puedo reagendar por WhatsApp?",
    a: "Sí, responde al mensaje de confirmación y el asistente te ofrece horarios disponibles.",
  },
  {
    q: "¿Quién responde el WhatsApp de la clínica?",
    a: "Un asistente de IA atiende consultas de horarios y ubicación. Las evaluaciones y dudas clínicas las responde Katherine o el equipo.",
  },
  {
    q: "¿Guardan mi ficha entre sesiones?",
    a: "Sí, cada sesión queda registrada con notas del profesional y evolución del tratamiento.",
  },
  {
    q: "¿Dónde está la sede?",
    a: "KM Estética Profesional atiende en Los Ángeles, Región del Biobío, Chile. Agenda por WhatsApp +56 9 9223 4618.",
  },
] as const;

export function puenteGraph() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: SEDE.addressLocality,
    addressRegion: SEDE.addressRegion,
    addressCountry: SEDE.addressCountry,
  };
  if (SEDE.streetAddress) address.streetAddress = SEDE.streetAddress;
  if (SEDE.postalCode) address.postalCode = SEDE.postalCode;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": OACG_ID,
        name: "OACG Group",
        url: "https://oacg.cl",
        description:
          "Grupo que agrupa Método Hebe, Protocolo Lumina y Clinera.",
      },
      {
        "@type": "Organization",
        "@id": CLINERA_ID,
        name: "Clinera",
        url: "https://clinera.io",
        description:
          "Plataforma de IA para clínicas médicas y estéticas en Latinoamérica",
        parentOrganization: { "@id": OACG_ID },
        founder: { "@id": RICARDO_ID },
      },
      {
        "@type": "Person",
        "@id": RICARDO_ID,
        name: "Ricardo Oyarzún",
        url: "https://www.metodohebe.cl/fundador/",
        jobTitle: "Fundador y CEO",
        worksFor: { "@id": OACG_ID },
        sameAs: [
          "https://www.linkedin.com/in/ricardo-oyarzun",
          "https://clinera.io",
        ],
      },
      {
        "@type": ["MedicalBusiness", "HealthAndBeautyBusiness"],
        "@id": ORG_ID,
        name: "KM Estética Profesional",
        alternateName: ["Katherine Meza", "KM Estética"],
        url: SITE_URL,
        logo: `${SITE_URL}/img/logo-km-estetica.jpeg`,
        image: `${SITE_URL}/img/katherine-meza.jpg`,
        telephone: `+${WHATSAPP_E164}`,
        description:
          "Consulta de medicina estética facial en Los Ángeles, Chile, fundada por Katherine Meza.",
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        isRelatedTo: { "@id": CLINERA_ID },
        department: [{ "@id": CLINIC_ID }],
        sameAs: [INSTAGRAM_URL],
        areaServed: {
          "@type": "City",
          name: "Los Ángeles",
        },
        address,
      },
      {
        "@type": "MedicalClinic",
        "@id": CLINIC_ID,
        name: SEDE.name,
        url: SITE_URL,
        telephone: `+${WHATSAPP_E164}`,
        parentOrganization: { "@id": ORG_ID },
        address,
        areaServed: {
          "@type": "City",
          name: "Los Ángeles",
        },
        sameAs: [INSTAGRAM_URL],
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Katherine Meza",
        url: `${SITE_URL}/fundador/`,
        jobTitle: "Fundadora",
        image: `${SITE_URL}/img/katherine-meza.jpg`,
        worksFor: { "@id": ORG_ID },
        sameAs: [INSTAGRAM_URL],
        knowsAbout: [
          "Medicina estética facial",
          "Toxina botulínica",
          "Ácido hialurónico",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "KM Estética Profesional",
        inLanguage: "es-CL",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}
