export default function Home() {
  return (
    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white px-6 text-center text-neutral-900">
      {/* Corner floral flourishes */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-6 h-28 w-28 text-neutral-200 sm:h-40 sm:w-40"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M10 10c40 0 60 20 60 60M10 10c0 40 20 60 60 60M10 10c20 8 30 22 30 40M10 10c8 20 22 30 40 30"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="10" cy="10" r="3" fill="currentColor" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rotate-180 text-neutral-200 sm:h-40 sm:w-40"
        viewBox="0 0 160 160"
        fill="none"
      >
        <path
          d="M10 10c40 0 60 20 60 60M10 10c0 40 20 60 60 60M10 10c20 8 30 22 30 40M10 10c8 20 22 30 40 30"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="10" cy="10" r="3" fill="currentColor" />
      </svg>

      <main className="flex flex-col items-center">
        <p className="text-[0.65rem] font-light uppercase tracking-[0.5em] text-neutral-400 sm:text-xs">
          Bodas &amp; Eventos
        </p>

        <h1 className="mt-6 font-serif text-6xl font-medium tracking-wide text-neutral-900 sm:text-8xl">
          S <span className="mx-2 italic text-rose-300">&amp;</span> V
        </h1>

        <p className="mt-3 text-xs font-light uppercase tracking-[0.6em] text-neutral-500 sm:text-sm">
          Events
        </p>

        {/* Divider with interlocking rings */}
        <div className="mt-10 flex items-center gap-4 sm:mt-12">
          <span className="h-px w-10 bg-neutral-300 sm:w-16" />
          <svg
            aria-hidden
            className="h-5 w-8 text-neutral-400"
            viewBox="0 0 40 24"
            fill="none"
          >
            <circle cx="15" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="25" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="h-px w-10 bg-neutral-300 sm:w-16" />
        </div>

        <h2 className="mt-10 font-serif text-xl font-normal text-neutral-800 sm:mt-12 sm:text-3xl">
          Muy pronto, algo especial
        </h2>

        <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-neutral-500 sm:max-w-md sm:text-base">
          Estamos preparando nuestra nueva web para acompañarte en cada
          detalle del día más importante de tu vida.
        </p>
      </main>

      <p className="absolute bottom-6 text-[0.6rem] font-light uppercase tracking-[0.35em] text-neutral-300 sm:bottom-8 sm:text-xs">
        S&amp;V Events — Próximamente
      </p>
    </div>
  );
}
