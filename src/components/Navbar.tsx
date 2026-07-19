"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "glass shadow-soft py-2"
              : "border border-transparent py-2.5"
          }`}
        >
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-semibold text-ink-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Magnetic strength={0.3}>
              <a
                href={site.phoneHref}
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-brand transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-950" />
                </span>
                24/7 Notruf
                <Phone
                  size={15}
                  className="transition-transform group-hover:rotate-12"
                />
              </a>
            </Magnetic>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-white/10 bg-ink-900 shadow-soft lg:hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
