"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = navLinks.map((link) => link.href.replace("/#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass shadow-soft flex items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-dark.png"
              alt="FIL Truck-Center Logo"
              width={150}
              height={70}
              priority
              className="h-9 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === "/" && activeId === link.href.replace("/#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-semibold transition-colors ${
                    isActive ? "nav-link-active text-brand-400" : "text-ink-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-brand transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-950" />
              </span>
              24/7 Notruf
              <Phone size={15} className="transition-transform group-hover:rotate-12" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-menu-enter mx-4 mt-2 rounded-2xl border border-white/10 bg-ink-900 shadow-soft lg:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-ink-100 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-ink-950"
            >
              <Phone size={15} /> 24/7 Notruf: {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
