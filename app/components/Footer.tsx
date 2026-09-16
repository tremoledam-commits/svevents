import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-[#f8f5ef]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs font-serif text-sm italic text-champagne-light/90">
              &ldquo;Creem moments, organitzem experiències&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-xs font-light uppercase tracking-[0.3em] text-champagne">
              Contacte
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-light text-[#f8f5ef]/80">
              <li>
                <a
                  href="mailto:siv.events26@gmail.com"
                  className="hover:text-champagne-light"
                >
                  siv.events26@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+34615897496" className="hover:text-champagne-light">
                  615 89 74 96
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/svevents.cat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne-light"
                >
                  @svevents.cat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-light uppercase tracking-[0.3em] text-champagne">
              Espai de treball
            </h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-[#f8f5ef]/80">
              Parc Central Business Center &amp; Coworking
              <br />
              Carrer del Mestre Francesc Civil, 8
              <br />
              Girona
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[#f8f5ef]/15 pt-6 text-[0.65rem] font-light uppercase tracking-[0.2em] text-[#f8f5ef]/50 sm:flex-row">
          <span>© {new Date().getFullYear()} S&amp;V Events</span>
          <span>Organització de casaments i esdeveniments · Girona</span>
        </div>
      </div>
    </footer>
  );
}
