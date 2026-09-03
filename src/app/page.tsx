import Image from "next/image";
import { Header, Footer } from "@/components/SiteChrome";

const treatments = [
  {
    name: "Toxina botulínica",
    description: "Líneas de expresión y armonización del tercio superior.",
    duration: "20 min",
    validity: "4–6 meses",
  },
  {
    name: "Ácido hialurónico",
    description: "Rinomodelación, pómulos, mentón y perfilado facial.",
    duration: "45 min",
    validity: "10–14 meses",
  },
  {
    name: "Bioestimulación y tensores",
    description: "Hilos PDO y bioestimuladores para firmeza progresiva.",
    duration: "60 min",
    validity: "Gradual",
  },
  {
    name: "Mesoterapia",
    description: "Vitaminas y activos para glow y calidad de piel.",
    duration: "30 min",
    validity: "Por sesión",
  },
  {
    name: "Depilación láser diodo",
    description: "Planes personalizados por zona y fototipo.",
    duration: "Según zona",
    validity: "Protocolo",
  },
];

const trustItems = [
  {
    title: "Título profesional",
    text: "Formación y práctica verificable en estética facial.",
  },
  {
    title: "Enfoque caso a caso",
    text: "Evaluación en reposo y movimiento antes de indicar.",
  },
  {
    title: "Control a 21 días",
    text: "Incluido en todo procedimiento inyectable.",
  },
  {
    title: "Partner Clinera",
    text: "Agenda y seguimiento con plataforma clínica.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="section-pad mx-auto grid max-w-6xl gap-10 pb-14 pt-10 md:grid-cols-2 md:items-center md:gap-12 md:pb-16 md:pt-14">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
              Estética facial · Los Ángeles
            </p>
            <div className="mt-4 mb-5 h-px w-12 bg-champagne" aria-hidden />
            <h1 className="font-display text-[2.35rem] leading-[1.12] text-negro md:text-[3.15rem]">
              Medicina estética con enfoque personalizado
            </h1>
            <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-espresso">
              Evaluación facial en reposo y movimiento. Plan escrito con zonas,
              producto y volumen — sin improvisar en box.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-espresso">
              <li>Evaluación profesional</li>
              <li>Tratamientos personalizados</li>
              <li>Resultados naturales</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#agenda" className="btn-primary">
                Agendar evaluación
              </a>
              <a href="#antes-despues" className="btn-secondary">
                Ver antes y después
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-marfil md:aspect-[5/6]">
            <Image
              src="/img/katherine-meza.jpg"
              alt="Katherine Meza, profesional de KM Estética, realizando un procedimiento facial"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-marfil" aria-label="Credenciales">
          <div className="section-pad mx-auto grid max-w-6xl gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {trustItems.map((item) => (
              <div key={item.title} className="border-l border-champagne/70 pl-4">
                <p className="font-display text-lg text-negro">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-espresso">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Treatments index */}
        <section id="tratamientos" className="section-pad mx-auto max-w-6xl py-16 md:py-20">
          <div className="mb-10 max-w-xl">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
              Índice de servicios
            </p>
            <h2 className="mt-3 font-display text-3xl text-negro md:text-4xl">Tratamientos</h2>
            <p className="mt-3 text-espresso">
              Transparencia de duración y vigencia para que llegues a la evaluación
              con información clara.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-marfil text-[0.7rem] tracking-[0.14em] text-espresso uppercase">
                  <th className="px-4 py-3 font-medium">Tratamiento</th>
                  <th className="px-4 py-3 font-medium">Descripción</th>
                  <th className="px-4 py-3 font-medium">Duración</th>
                  <th className="px-4 py-3 font-medium">Vigencia</th>
                  <th className="px-4 py-3 font-medium" />
                </tr>
              </thead>
              <tbody>
                {treatments.map((t) => (
                  <tr key={t.name} className="border-b border-negro/10 align-top">
                    <td className="px-4 py-5 font-display text-lg text-negro">{t.name}</td>
                    <td className="px-4 py-5 text-sm text-espresso">{t.description}</td>
                    <td className="px-4 py-5">
                      <span className="font-mono-data text-[0.7rem] text-espresso">{t.duration}</span>
                    </td>
                    <td className="px-4 py-5">
                      <span className="font-mono-data text-[0.7rem] text-espresso">{t.validity}</span>
                    </td>
                    <td className="px-4 py-5 text-right">
                      <a href="#agenda" className="text-sm text-negro underline-offset-4 hover:underline">
                        Ver
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Antes y después placeholder */}
        <section id="antes-despues" className="bg-marfil">
          <div className="section-pad mx-auto max-w-6xl py-16 md:py-20">
            <p className="text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
              Resultados
            </p>
            <h2 className="mt-3 font-display text-3xl text-negro md:text-4xl">Antes y después</h2>
            <p className="mt-3 max-w-xl text-espresso">
              Galería clínica en preparación. En la evaluación revisamos casos
              comparables a tu anatomía y objetivo — sin promesas genéricas.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex aspect-[4/5] items-end bg-papel p-4 text-sm text-espresso/70"
                >
                  Caso clínico {n} · próximamente
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Katherine + Clinera */}
        <section id="katherine" className="section-pad mx-auto max-w-6xl py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.22em] text-champagne uppercase">
                Quién te atiende
              </p>
              <h2 className="mt-3 font-display text-3xl text-negro md:text-4xl">Katherine Meza</h2>
              <p className="mt-4 text-espresso leading-relaxed">
                Fundadora de <strong className="font-medium text-negro">KM Estética Profesional</strong>.
                Trabajo con un protocolo de evaluación personalizado: primero el
                diagnóstico facial, después el plan escrito. Busco resultados
                naturales, proporcionados a tu rostro.
              </p>
              <p className="mt-4 text-espresso leading-relaxed">
                Soy <strong className="font-medium text-negro">partner oficial de Clinera</strong>:
                la agenda, el seguimiento y la operación de la consulta corren sobre
                su plataforma clínica. Eso me permite responder más rápido y no
                perder pacientes entre el WhatsApp y la ficha.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="https://www.clinera.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Conocer Clinera
                </a>
                <Image
                  src="/img/logo-clinera.png"
                  alt="Clinera"
                  width={140}
                  height={32}
                  className="h-7 w-auto opacity-80"
                />
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden bg-marfil">
              <Image
                src="/img/logo-km-estetica.jpeg"
                alt="Logo KM Estética Profesional"
                fill
                className="object-contain p-10"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* Agenda / CTA */}
        <section id="agenda" className="bg-negro text-papel">
          <div className="section-pad mx-auto flex max-w-6xl flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl">Agenda tu evaluación</h2>
              <p className="mt-4 text-papel/75 leading-relaxed">
                Cuéntame tu objetivo. Te respondo con disponibilidad real y los
                próximos pasos. La operación de agenda está potenciada por Clinera.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.clinera.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-papel px-5 py-3.5 text-sm font-medium text-negro transition hover:bg-marfil"
              >
                Ir a Clinera
              </a>
              <a
                href="mailto:hola@kmestetica.cl"
                className="inline-flex items-center justify-center border border-papel/40 px-5 py-3.5 text-sm font-medium text-papel transition hover:border-papel"
              >
                Escribir a Katherine
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
