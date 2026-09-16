import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serveis",
  description:
    "Organització integral de casaments, celebracions i esdeveniments corporatius a Girona i la Costa Brava, a mida de cada client.",
};

const eventTypes = [
  {
    title: "Casaments",
    text: "El nostre servei estrella: cerimònia, banquet i festa organitzats de principi a fi.",
  },
  {
    title: "Aniversaris",
    text: "Celebracions personals amb un disseny fet a mida per a cada ocasió.",
  },
  {
    title: "Comunions",
    text: "Detall i cura en una de les celebracions familiars més especials.",
  },
  {
    title: "Graduacions",
    text: "Festes que tanquen una etapa amb l'organització que es mereixen.",
  },
  {
    title: "Celebracions familiars",
    text: "Trobades i celebracions socials adaptades a cada família.",
  },
  {
    title: "Esdeveniments corporatius",
    text: "Actes d'empresa amb la mateixa professionalitat que una gran celebració.",
  },
];

const process = [
  {
    step: "01",
    title: "Abans de l'esdeveniment",
    text: "Reunió amb el client per conèixer preferències, necessitats i pressupost. Preparem una proposta personalitzada, busquem espais i proveïdors, i planifiquem el programa i l'horari.",
  },
  {
    step: "02",
    title: "Durant l'esdeveniment",
    text: "El nostre equip arriba amb antelació per comprovar el muntatge i la decoració. Fem seguiment del planning i coordinem els proveïdors perquè tot es desenvolupi segons el previst.",
  },
  {
    step: "03",
    title: "Després de l'esdeveniment",
    text: "Comprovem que tot el material sigui recollit i coordinem la retirada amb els proveïdors. Demanem l'opinió del client per seguir millorant el nostre servei.",
  },
];

export default function Serveis() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[340px] items-center justify-center overflow-hidden">
        <Image
          src="/images/mesa-formal.jpg"
          alt="Taula parada per a un esdeveniment elegant"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative z-10 text-center text-[#f8f5ef]">
          <p className="text-xs font-light uppercase tracking-[0.5em] text-champagne">
            Serveis
          </p>
          <h1 className="mt-5 font-serif text-4xl sm:text-6xl">
            Un servei a la teva mida
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
        <p className="text-base font-light leading-relaxed text-navy/70">
          Oferim un servei d&apos;organització i planificació d&apos;esdeveniments
          personalitzat que inclou l&apos;assessorament al client, la
          planificació, la recerca i coordinació de proveïdors, i la
          supervisió de tots els preparatius fins al dia de l&apos;esdeveniment.
          Des d&apos;un acompanyament puntual fins a una organització
          integral: tu decideixes el nivell d&apos;implicació que necessites.
        </p>
      </section>

      {/* Event types */}
      <section className="bg-champagne-light/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="border border-champagne bg-background p-8 text-center"
              >
                <h3 className="font-serif text-xl text-navy">{e.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-navy/60">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <div className="text-center">
          <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
            Com treballem
          </p>
          <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
            Tres fases, un sol equip
          </h2>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {process.map((p) => (
            <div key={p.step}>
              <span className="font-serif text-4xl text-champagne">
                {p.step}
              </span>
              <h3 className="mt-3 font-serif text-xl text-navy">{p.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-navy/60">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-navy py-24 text-[#f8f5ef]">
        <div className="mx-auto max-w-2xl px-6 text-center sm:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl">Pressupost a mida</h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-[#f8f5ef]/75">
            El preu depèn del tipus d&apos;esdeveniment, el nombre de
            convidats i el nivell de personalització. Per això no tenim un
            preu únic: preparem un pressupost fet a mida per a cada client,
            amb diferents modalitats de servei, des de l&apos;assessorament
            puntual fins a l&apos;organització integral.
          </p>
          <Link
            href="/contacte"
            className="mt-8 inline-block rounded-full bg-champagne px-10 py-3 text-xs font-medium uppercase tracking-[0.25em] text-navy transition-colors hover:bg-[#c9b691]"
          >
            Demana el teu pressupost
          </Link>
        </div>
      </section>
    </div>
  );
}
