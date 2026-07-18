"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/lib/site";

const regions = [
  "Hamm",
  "Dortmund",
  "Münster",
  "Bielefeld",
  "Soest",
  "Unna",
  "Bundesweit auf Anfrage",
];

export default function ServiceArea() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="einsatzgebiet" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Einsatzgebiet
          </span>
          <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Schnell vor Ort – in ganz Hamm und darüber hinaus
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-300">
            Unser Standort im Herzen von Hamm ermöglicht kurze Anfahrtswege in
            der gesamten Region. Für größere Einsätze sind wir bundesweit
            erreichbar.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10 lg:col-span-3"
          >
            {mapLoaded ? (
              <iframe
                title="FIL Truck-Center Standort Karte"
                src={site.mapsEmbedSrc}
                className="h-[24rem] w-full invert-[0.92] contrast-[0.85] hue-rotate-180 grayscale-[10%] sm:h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[24rem] flex-col items-center justify-center gap-4 bg-ink-900 px-6 text-center sm:h-[28rem]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400">
                  <MapPin size={26} />
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-ink-300">
                  Beim Laden der Karte wird eine Verbindung zu Google Maps
                  hergestellt und Ihre IP-Adresse übertragen.
                </p>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03]"
                >
                  <MapPin size={16} />
                  Karte laden
                </button>
                <Link
                  href="/datenschutz"
                  className="text-xs font-semibold text-ink-400 underline-offset-4 hover:text-brand-400 hover:underline"
                >
                  Mehr in unserer Datenschutzerklärung
                </Link>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-ink-900 p-8 shadow-soft lg:col-span-2"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500">
                <MapPin size={22} className="text-ink-950" />
              </div>
              <h3 className="font-display mt-5 text-xl font-bold text-white">
                Unser Standort
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-ink-200"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  site.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/20"
              >
                <Navigation size={16} />
                Route berechnen
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                <Phone size={16} />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
