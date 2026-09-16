import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosaltres",
  description:
    "Coneix l'equip fundador de S&V Events, Núria Vilanova i Alaia Saubi, i la nostra missió, visió i valors.",
};

const founders = [
  {
    name: "Núria Vilanova López",
    role: "Direcció · Màrqueting i producció",
  },
  {
    name: "Alaia Saubi Teixidor",
    role: "Direcció · Finances i producció",
  },
];

const values = [
  {
    title: "Professionalitat",
    text: "Treballem de manera responsable, organitzada i rigorosa en totes les fases de l'esdeveniment.",
  },
  {
    title: "Creativitat",
    text: "Aportem idees originals i busquem solucions innovadores que permetin diferenciar cada celebració.",
  },
  {
    title: "Compromís",
    text: "Ens impliquem en cada projecte i complim els acords establerts amb els clients.",
  },
  {
    title: "Qualitat",
    text: "Oferim un servei acurat i prestem atenció a tots els detalls per garantir la satisfacció del client.",
  },
  {
    title: "Innovació",
    text: "Estem al dia de les noves tendències, eines i possibilitats del sector per oferir propostes actuals.",
  },
];

export default function Nosaltres() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[380px] items-center justify-center overflow-hidden">
        <Image
          src="/images/pareja-beso.jpg"
          alt="Núvia i nuvi celebrant el seu casament"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 text-center text-[#f8f5ef]">
          <p className="text-xs font-light uppercase tracking-[0.5em] text-champagne">
            Qui som
          </p>
          <h1 className="mt-5 font-serif text-4xl sm:text-6xl">Nosaltres</h1>
        </div>
      </section>

      {/* Origin story */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          El nom d&apos;S&amp;V Events
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-navy/70">
          Per escollir el nom de la marca vam buscar una combinació dels
          nostres cognoms, <span className="italic">Saubi</span> i{" "}
          <span className="italic">Vilanova</span>, amb l&apos;objectiu de
          crear un nom breu, fàcil de recordar i amb un significat personal.
          D&apos;aquesta combinació va sorgir S&amp;V Events, que fa
          referència a les inicials dels nostres cognoms i incorpora el terme
          Events per identificar clarament la nostra activitat.
        </p>
      </section>

      {/* Founders */}
      <section className="bg-champagne-light/60 py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <p className="text-center text-xs font-light uppercase tracking-[0.4em] text-champagne">
            Equip fundador
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {founders.map((f) => (
              <div
                key={f.name}
                className="border border-champagne bg-background px-8 py-10 text-center"
              >
                <h3 className="font-serif text-2xl text-navy">{f.name}</h3>
                <p className="mt-3 text-xs font-light uppercase tracking-[0.25em] text-navy/60">
                  {f.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
        <div className="grid gap-14 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              Missió
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-navy/70">
              Organitzar esdeveniments especials i memorables mitjançant un
              servei professional, creatiu i personalitzat. Volem entendre
              les necessitats i expectatives de cada client per transformar
              les seves idees en celebracions adaptades als seus gustos i
              pressupost, oferint un acompanyament proper durant tot el
              procés d&apos;organització.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              Visió
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-navy/70">
              Convertir-nos en una empresa de referència en el sector de
              l&apos;organització d&apos;esdeveniments, destacant per la
              qualitat dels nostres serveis, la capacitat d&apos;innovació i
              la personalització de cada projecte, construint una relació de
              confiança amb els nostres clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 text-[#f8f5ef]">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
          <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
            Els nostres valors
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-14">
            {values.map((v) => (
              <div key={v.title} className="w-full sm:w-64">
                <span className="mx-auto block h-1.5 w-1.5 rotate-45 bg-champagne" />
                <h3 className="mt-4 font-serif text-lg">{v.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-[#f8f5ef]/70">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
