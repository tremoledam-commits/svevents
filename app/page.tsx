import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Professionalitat",
    text: "Treballem de manera responsable, organitzada i rigorosa en totes les fases.",
  },
  {
    title: "Creativitat",
    text: "Idees originals i solucions que fan que cada celebració sigui única.",
  },
  {
    title: "Compromís",
    text: "Ens impliquem en cada projecte i complim els acords amb els clients.",
  },
  {
    title: "Qualitat",
    text: "Cura de tots els detalls per garantir la satisfacció del client.",
  },
];

const serviceCards = [
  {
    title: "Casaments",
    text: "Organització integral, des de la cerimònia fins a l'última cançó de la festa.",
  },
  {
    title: "Celebracions",
    text: "Aniversaris, comunions, graduacions i celebracions familiars a mida.",
  },
  {
    title: "Esdeveniments corporatius",
    text: "Actes d'empresa amb la mateixa cura pel detall que una gran celebració.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-ceremonia.jpg"
          alt="Cerimònia de casament davant el mar"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center text-[#f8f5ef]">
          <p className="text-xs font-light uppercase tracking-[0.5em] text-champagne">
            Girona &amp; Costa Brava
          </p>
          <h1 className="mt-6 font-serif text-5xl font-medium tracking-wide sm:text-7xl">
            S <span className="text-champagne">&amp;</span> V Events
          </h1>
          <p className="mt-6 max-w-lg font-serif text-lg italic text-[#f8f5ef]/90 sm:text-xl">
            &ldquo;Creem moments, organitzem experiències&rdquo;
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/casament-demo"
              className="rounded-full bg-champagne px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-navy transition-colors hover:bg-[#c9b691]"
            >
              Veure un casament
            </Link>
            <Link
              href="/serveis"
              className="rounded-full border border-[#f8f5ef]/70 px-8 py-3 text-xs font-light uppercase tracking-[0.25em] text-[#f8f5ef] transition-colors hover:bg-[#f8f5ef]/10"
            >
              Els nostres serveis
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
          Benvinguts
        </p>
        <h2 className="mt-6 font-serif text-3xl text-navy sm:text-4xl">
          Organitzem esdeveniments perquè tu només et preocupis de gaudir-los
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-navy/70">
          A S&amp;V Events planifiquem, coordinem i cuidem cada detall del teu
          casament o celebració. Un servei proper i personalitzat, pensat per
          transformar les teves idees en una experiència inoblidable, sense
          l&apos;estrès que suposa organitzar-ho tot pel teu compte.
        </p>
        <Link
          href="/nosaltres"
          className="mt-8 inline-block border-b border-champagne pb-1 text-xs font-light uppercase tracking-[0.3em] text-navy transition-colors hover:text-champagne"
        >
          Coneix-nos
        </Link>
      </section>

      {/* Values strip */}
      <section className="bg-champagne-light/60 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-4 sm:px-10">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <span className="mx-auto block h-1.5 w-1.5 rotate-45 bg-champagne" />
              <h3 className="mt-4 font-serif text-lg text-navy">{v.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-navy/60">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="text-center">
          <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
            Serveis
          </p>
          <h2 className="mt-4 font-serif text-3xl text-navy sm:text-4xl">
            Un servei a mida per a cada celebració
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {serviceCards.map((s) => (
            <div
              key={s.title}
              className="border border-champagne/60 p-8 text-center transition-colors hover:border-champagne"
            >
              <h3 className="font-serif text-xl text-navy">{s.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-navy/60">
                {s.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/serveis"
            className="inline-block rounded-full border border-navy px-8 py-3 text-xs font-light uppercase tracking-[0.25em] text-navy transition-colors hover:bg-navy hover:text-background"
          >
            Veure tots els serveis
          </Link>
        </div>
      </section>

      {/* Featured wedding */}
      <section className="relative overflow-hidden">
        <div className="grid sm:grid-cols-2">
          <div className="relative h-80 sm:h-auto">
            <Image
              src="/images/arco-floral.jpg"
              alt="Júlia i Josep sota un arc floral"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center bg-navy px-8 py-16 text-[#f8f5ef] sm:px-14">
            <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
              Cas real
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              El casament de Júlia i Josep
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-[#f8f5ef]/75">
              Un casament amb l&apos;essència de la Costa Brava: cerimònia a
              L&apos;Escala, 134 convidats i una decoració inspirada en els
              pobles de la costa gironina. Descobreix com el vam organitzar.
            </p>
            <Link
              href="/casament-demo"
              className="mt-8 rounded-full bg-champagne px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-navy transition-colors hover:bg-[#c9b691]"
            >
              Descobrir el casament
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-navy sm:text-4xl">
          Parlem del teu esdeveniment?
        </h2>
        <p className="mt-4 text-sm font-light leading-relaxed text-navy/60">
          Escriu-nos i concertem una primera reunió sense compromís al nostre
          espai de coworking a Girona.
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
