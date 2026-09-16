import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casament demo · Júlia i Josep",
  description:
    "Descobreix com S&V Events va organitzar el casament de Júlia i Josep a L'Escala, amb l'essència de la Costa Brava com a fil conductor.",
};

const details = [
  { label: "Convidats", value: "134 persones" },
  { label: "Pressupost", value: "25.000 €" },
  { label: "Estil", value: "Essència Costa Brava" },
  { label: "Celebració", value: "Cerimònia · Banquet · Festa" },
];

const venueFeatures = [
  "Espai exterior",
  "Zona de cerimònia",
  "Zona de banquet",
  "Accessible",
  "Pla B en cas de pluja",
];

const tables = [
  "Costa Brava",
  "Cap de Creus",
  "Tamariu",
  "Begur",
  "Llafranc",
  "L'Escala",
  "Palamós",
  "S'Agaró",
  "Cadaqués",
  "Llançà",
  "Port de la Selva",
];

const decorItems = [
  "Cadires de fusta natural",
  "Flors blanques i blau clar",
  "Espelmes a cada taula",
  "Petxines amb el nom de cada convidat",
  "Estovalles blanques i beix",
  "Vaixella de ceràmica artesana",
];

const palette = [
  { hex: "#3F5C73", name: "Blau fosc" },
  { hex: "#8FAFC4", name: "Blau clar" },
  { hex: "#7FA69A", name: "Verd aigua" },
  { hex: "#9AA06B", name: "Oliva" },
  { hex: "#D8C7AE", name: "Beix" },
  { hex: "#B5654A", name: "Terracota" },
];

const gallery = [
  { src: "/images/costa-brava-atardecer.jpg", alt: "Costa rocosa de la Costa Brava a la posta de sol" },
  { src: "/images/mesa-flores-velas.jpg", alt: "Taula decorada amb flors i espelmes" },
  { src: "/images/anillos.jpg", alt: "Aliances dels nuvis" },
  { src: "/images/copas.jpg", alt: "Copes de vi parades a taula" },
  { src: "/images/novia-ramo.jpg", alt: "Núvia amb el seu ram de flors" },
  { src: "/images/olivo.jpg", alt: "Branca d'olivera, símbol de la Mediterrània" },
];

export default function CasamentDemo() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[80vh] min-h-[520px] items-center justify-center overflow-hidden">
        <Image
          src="/images/pareja-playa.jpg"
          alt="Júlia i Josep agafats de la mà a la platja"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 text-center text-[#f8f5ef]">
          <p className="text-xs font-light uppercase tracking-[0.5em] text-champagne">
            Cas real · Casament demo
          </p>
          <h1 className="mt-5 font-serif text-5xl sm:text-7xl">
            Júlia <span className="text-champagne">&amp;</span> Josep
          </h1>
          <p className="mt-5 text-sm font-light uppercase tracking-[0.35em] text-[#f8f5ef]/85">
            15 Maig 2027 · L&apos;Escala, Girona
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          L&apos;essència de la Costa Brava
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-navy/70">
          Júlia i Josep volien un casament especial, elegant i personal, sense
          ser excessivament formal. La seva prioritat era que els convidats
          visquessin una experiència vinculada a la Costa Brava, reflectint
          la seva personalitat en cada detall de la celebració.
        </p>
      </section>

      {/* Details */}
      <section className="bg-champagne-light/60 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-4 sm:px-10">
          {details.map((d) => (
            <div key={d.label} className="text-center">
              <p className="text-xs font-light uppercase tracking-[0.3em] text-champagne">
                {d.label}
              </p>
              <p className="mt-2 font-serif text-xl text-navy">{d.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Venue */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <div className="grid items-center gap-12 sm:grid-cols-2">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
              Ubicació
            </p>
            <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
              L&apos;Escala, Girona
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-navy/70">
              Un espai exterior davant del mar, pensat perquè els 115
              convidats presents a la cerimònia visquin l&apos;essència
              mediterrània que Júlia i Josep volien transmetre.
            </p>
            <ul className="mt-6 space-y-2">
              {venueFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm font-light text-navy/70"
                >
                  <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-72 sm:h-96">
            <Image
              src="/images/costa-brava-atardecer.jpg"
              alt="Costa de L'Escala, Girona, a la posta de sol"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Decoration & tables */}
      <section className="bg-navy py-24 text-[#f8f5ef]">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="text-center">
            <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
              Decoració
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Taules amb noms de la costa gironina
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-[#f8f5ef]/75">
              Cada taula porta el nom d&apos;un poble de la Costa Brava, amb
              un petit detall relacionat amb el lloc que li dona nom. Colors
              neutres i un disseny minimalista deixen protagonisme als
              detalls.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tables.map((t) => (
              <span
                key={t}
                className="rounded-full border border-champagne/50 px-5 py-2 text-xs font-light uppercase tracking-[0.15em] text-champagne-light"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {decorItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-[#f8f5ef]/10 py-3 text-sm font-light text-[#f8f5ef]/80"
              >
                <span className="h-1.5 w-1.5 rotate-45 bg-champagne" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress code palette */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
          Dress code
        </p>
        <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
          Colors del mar i la muntanya
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {palette.map((c) => (
            <div key={c.hex} className="flex flex-col items-center gap-2">
              <span
                className="h-12 w-12 rounded-full border border-navy/10"
                style={{ backgroundColor: c.hex }}
              />
              <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-navy/60">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.src} className="relative h-56 sm:h-64">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-champagne-light/60 py-24 text-center">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          Vols un casament fet a la teva mida?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-navy/60">
          Cada parella és única, i el seu casament també ho hauria de ser.
          Parlem del teu.
        </p>
        <Link
          href="/contacte"
          className="mt-8 inline-block rounded-full bg-navy px-10 py-3 text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:bg-navy-light"
        >
          Contacta amb nosaltres
        </Link>
      </section>
    </div>
  );
}
