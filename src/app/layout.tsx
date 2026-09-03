import type { Metadata } from "next";
import { Marcellus, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

const siteUrl = "https://kmestetica.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KM Estética Profesional | Katherine Meza — Los Ángeles",
    template: "%s | KM Estética Profesional",
  },
  description:
    "Medicina estética facial con enfoque personalizado en Los Ángeles, Chile. Katherine Meza, partner Clinera. Evaluación profesional y resultados naturales.",
  keywords: [
    "estética facial Los Ángeles",
    "Katherine Meza",
    "KM Estética",
    "toxina botulínica",
    "ácido hialurónico",
    "partner Clinera",
    "medicina estética Chile",
  ],
  authors: [{ name: "Katherine Meza", url: siteUrl }],
  creator: "Katherine Meza",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "KM Estética Profesional",
    title: "KM Estética Profesional | Katherine Meza",
    description:
      "Medicina estética con enfoque personalizado. Partner oficial de Clinera.",
    images: [
      {
        url: "/img/katherine-meza.jpg",
        width: 1106,
        height: 1414,
        alt: "Katherine Meza — KM Estética Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Estética Profesional | Katherine Meza",
    description: "Medicina estética facial · Los Ángeles · Partner Clinera",
    images: ["/img/katherine-meza.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "KM Estética Profesional",
      inLanguage: "es-CL",
      publisher: { "@id": `${siteUrl}/#org` },
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#org`,
      name: "KM Estética Profesional",
      url: siteUrl,
      image: `${siteUrl}/img/katherine-meza.jpg`,
      description:
        "Consulta de medicina estética facial en Los Ángeles, Chile. Fundada por Katherine Meza. Partner Clinera.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Ángeles",
        addressCountry: "CL",
      },
      founder: { "@id": `${siteUrl}/#katherine` },
      employee: { "@id": `${siteUrl}/#katherine` },
      knowsAbout: [
        "Toxina botulínica",
        "Ácido hialurónico",
        "Bioestimulación",
        "Mesoterapia",
        "Depilación láser",
      ],
      sameAs: ["https://www.clinera.io"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#katherine`,
      name: "Katherine Meza",
      jobTitle: "Fundadora",
      image: `${siteUrl}/img/katherine-meza.jpg`,
      url: `${siteUrl}/#katherine`,
      worksFor: { "@id": `${siteUrl}/#org` },
      knowsAbout: ["Medicina estética facial", "Clinera"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className={`${marcellus.variable} ${dmSans.variable} ${dmMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
