"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-950/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-paper">
          <span className="flex h-8 w-8 items-center justify-center border border-gold-400/60 text-gold-400">
            ED
          </span>
          <span className="hidden text-muted sm:inline">dajic.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-paper"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-gold-400/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-gold-300 transition-colors hover:bg-gold-400 hover:text-ink-950 md:inline-block"
        >
          Get in touch
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-[2px] w-6 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-6 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-ink-950 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-[0.14em] text-muted hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
