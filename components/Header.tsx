"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/viziune", label: "Viziune" },
  { href: "/#educatie-clasica", label: "Educație Clasică" },
  { href: "/#programe", label: "Programe" },
  { href: "/despre", label: "Despre Noi" },
  { href: "/#faq", label: "Întrebări" },
  { href: "/#donatii", label: "Donații" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-parchment/85 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Edictum — acasă" className="block">
          <Logo variant="color" height={56} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-[0.72rem] tracking-[0.22em] uppercase text-ink/80 hover:text-gold-deep transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link href="/#programe" className="btn btn-primary">
            Înscrieri
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M4 7H20 M4 12H20 M4 17H20" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-parchment">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm tracking-[0.2em] uppercase text-ink hover:text-gold-deep"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#programe"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              Înscrieri
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
