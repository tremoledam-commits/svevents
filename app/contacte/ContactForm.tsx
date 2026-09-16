"use client";

import { useState, type FormEvent } from "react";

const eventTypes = [
  "Casament",
  "Aniversari",
  "Comunió",
  "Graduació",
  "Esdeveniment corporatiu",
  "Altres",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nom = String(data.get("nom") || "");
    const email = String(data.get("email") || "");
    const telefon = String(data.get("telefon") || "");
    const tipus = String(data.get("tipus") || "");
    const data_aprox = String(data.get("data") || "");
    const missatge = String(data.get("missatge") || "");

    const subject = `Nova consulta · ${tipus || "Esdeveniment"} · ${nom}`;
    const body = [
      `Nom: ${nom}`,
      `Email: ${email}`,
      telefon && `Telèfon: ${telefon}`,
      tipus && `Tipus de celebració: ${tipus}`,
      data_aprox && `Data aproximada: ${data_aprox}`,
      "",
      "Missatge:",
      missatge,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:siv.events26@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nom"
            className="text-xs font-light uppercase tracking-[0.2em] text-navy/60"
          >
            Nom complet *
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            className="mt-2 w-full border-b border-navy/25 bg-transparent py-2 text-sm text-navy outline-none focus:border-champagne"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs font-light uppercase tracking-[0.2em] text-navy/60"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border-b border-navy/25 bg-transparent py-2 text-sm text-navy outline-none focus:border-champagne"
          />
        </div>
        <div>
          <label
            htmlFor="telefon"
            className="text-xs font-light uppercase tracking-[0.2em] text-navy/60"
          >
            Telèfon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            className="mt-2 w-full border-b border-navy/25 bg-transparent py-2 text-sm text-navy outline-none focus:border-champagne"
          />
        </div>
        <div>
          <label
            htmlFor="tipus"
            className="text-xs font-light uppercase tracking-[0.2em] text-navy/60"
          >
            Tipus de celebració
          </label>
          <select
            id="tipus"
            name="tipus"
            defaultValue=""
            className="mt-2 w-full border-b border-navy/25 bg-transparent py-2 text-sm text-navy outline-none focus:border-champagne"
          >
            <option value="" disabled>
              Selecciona&apos;n una
            </option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="data"
            className="text-xs font-light uppercase tracking-[0.2em] text-navy/60"
          >
            Data aproximada
          </label>
          <input
            id="data"
            name="data"
            type="text"
            placeholder="Ex. primavera 2027"
            className="mt-2 w-full border-b border-navy/25 bg-transparent py-2 text-sm text-navy placeholder:text-navy/30 outline-none focus:border-champagne"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="missatge"
          className="text-xs font-light uppercase tracking-[0.2em] text-navy/60"
        >
          Missatge *
        </label>
        <textarea
          id="missatge"
          name="missatge"
          required
          rows={5}
          className="mt-2 w-full resize-none border-b border-navy/25 bg-transparent py-2 text-sm text-navy outline-none focus:border-champagne"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-navy px-10 py-3 text-xs font-light uppercase tracking-[0.25em] text-background transition-colors hover:bg-navy-light"
      >
        Enviar missatge
      </button>

      <p className="text-xs font-light text-navy/50">
        En enviar el formulari s&apos;obrirà el teu gestor de correu (Outlook,
        Gmail...) amb el missatge ja preparat perquè només l&apos;hagis de
        confirmar.
      </p>

      {sent && (
        <p className="text-xs font-light uppercase tracking-[0.2em] text-champagne">
          S&apos;ha obert el teu gestor de correu ✓
        </p>
      )}
    </form>
  );
}
