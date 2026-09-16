"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Inici" },
  { href: "/nosaltres", label: "Nosaltres" },
  { href: "/serveis", label: "Serveis" },
  { href: "/casament-demo", label: "Casament demo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-champagne/60 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <Logo />

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-light uppercase tracking-[0.25em] transition-colors hover:text-champagne-light hover:text-opacity-100 ${
                  active ? "text-navy" : "text-navy/60"
                } relative pb-1`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-px bg-champagne" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contacte"
            className="rounded-full border border-navy px-5 py-2 text-xs font-light uppercase tracking-[0.25em] text-navy transition-colors hover:bg-navy hover:text-background"
          >
            Contacte
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Obrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-navy transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-navy transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-navy transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-champagne/60 bg-background px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-sm font-light uppercase tracking-[0.2em] ${
                pathname === link.href ? "text-navy" : "text-navy/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacte"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-navy px-5 py-2 text-center text-xs font-light uppercase tracking-[0.25em] text-navy"
          >
            Contacte
          </Link>
        </nav>
      )}
    </header>
  );
}
