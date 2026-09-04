import type { Metadata } from "next";
import { Marcellus, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, puenteGraph } from "@/lib/contact";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KM Estética Profesional | Katherine Meza — Los Ángeles",
    template: "%s | KM Estética Profesional",
  },
  description:
    "Medicina estética facial con enfoque personalizado en Los Ángeles, Chile. Evaluación profesional, plan escrito y resultados naturales. Agenda por WhatsApp.",
  keywords: [
    "estética facial Los Ángeles",
    "Katherine Meza",
    "KM Estética",
    "toxina botulínica",
    "ácido hialurónico",
    "medicina estética Chile",
  ],
  authors: [{ name: "Katherine Meza", url: `${SITE_URL}/fundador/` }],
  creator: "Katherine Meza",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: "KM Estética Profesional",
    title: "KM Estética Profesional | Katherine Meza",
    description:
      "Medicina estética facial en Los Ángeles, Chile. Evaluación personalizada y resultados naturales.",
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
    description: "Medicina estética facial · Los Ángeles, Chile",
    images: ["/img/katherine-meza.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = puenteGraph();
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
