import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer className="bg-ink-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo-dark.png"
              alt="FIL Truck-Center Logo"
              width={150}
              height={70}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              Ihr Premium-Partner für LKW-Abschleppdienst, Bergung und
              Nutzfahrzeug-Werkstatt in Hamm.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
              Kontakt
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.zip} {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-brand-400" />
                <a href={site.phoneHref} className="hover:text-brand-400">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-brand-400" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-400">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400">
              24/7 Notdienst
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-ink-300">
              Ob Tag oder Nacht – wir sind für Sie erreichbar.
            </p>
            <Magnetic strength={0.25} className="mt-5">
              <a
                href={site.phoneHref}
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03]"
              >
                <Phone size={15} />
                Jetzt anrufen
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-ink-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name} · Inhaber{" "}
            {site.owner}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-ink-300">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-ink-300">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
