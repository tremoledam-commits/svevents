import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacte",
  description:
    "Contacta amb S&V Events per organitzar el teu casament o esdeveniment a Girona i la Costa Brava.",
};

export default function Contacte() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex h-[45vh] min-h-[300px] items-center justify-center overflow-hidden">
        <Image
          src="/images/novia-ramo.jpg"
          alt="Núvia amb el seu ram de flors"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative z-10 text-center text-[#f8f5ef]">
          <p className="text-xs font-light uppercase tracking-[0.5em] text-champagne">
            Contacte
          </p>
          <h1 className="mt-5 font-serif text-4xl sm:text-6xl">
            Parlem del teu esdeveniment
          </h1>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid gap-16 sm:grid-cols-5">
          {/* Info */}
          <div className="sm:col-span-2">
            <p className="text-xs font-light uppercase tracking-[0.4em] text-champagne">
              Informació de contacte
            </p>
            <h2 className="mt-4 font-serif text-2xl text-navy">
              Escriu-nos, truca&apos;ns o passa&apos;t pel coworking
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-navy/60">
              T&apos;expliquem com organitzem cada celebració i preparem un
              pressupost sense compromís.
            </p>

            <ul className="mt-10 space-y-6">
              <li>
                <p className="text-xs font-light uppercase tracking-[0.25em] text-navy/40">
                  Email
                </p>
                <a
                  href="mailto:siv.events26@gmail.com"
                  className="mt-1 block text-base text-navy hover:text-champagne"
                >
                  siv.events26@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs font-light uppercase tracking-[0.25em] text-navy/40">
                  Telèfon
                </p>
                <a
                  href="tel:+34615897496"
                  className="mt-1 block text-base text-navy hover:text-champagne"
                >
                  615 89 74 96
                </a>
              </li>
              <li>
                <p className="text-xs font-light uppercase tracking-[0.25em] text-navy/40">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/svevents.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base text-navy hover:text-champagne"
                >
                  @svevents.cat
                </a>
              </li>
              <li>
                <p className="text-xs font-light uppercase tracking-[0.25em] text-navy/40">
                  Espai de treball
                </p>
                <p className="mt-1 text-base text-navy">
                  Parc Central Business Center &amp; Coworking
                  <br />
                  Carrer del Mestre Francesc Civil, 8
                  <br />
                  Girona
                </p>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="sm:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
