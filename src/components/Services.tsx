"use client";

import { motion } from "framer-motion";
import {
  Cog,
  Gauge,
  LifeBuoy,
  Radar,
  Ruler,
  Siren,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Siren,
    title: "LKW-Abschleppdienst",
    description:
      "Schneller, sicherer Transport Ihres Nutzfahrzeugs bei Panne oder Unfall – bundesweit rund um die Uhr.",
  },
  {
    icon: LifeBuoy,
    title: "Bergung & Unfallhilfe",
    description:
      "Professionelle Bergung von LKW, Sattelzügen und Baumaschinen mit modernster Bergungstechnik.",
  },
  {
    icon: Radar,
    title: "Pannenhilfe vor Ort",
    description:
      "Schnelle Diagnose und Sofortmaßnahmen direkt an der Straße – damit es für Sie zügig weitergeht.",
  },
  {
    icon: Cog,
    title: "Motorreparatur & Antriebsdiagnose",
    description:
      "Präzise Diagnose und Instandsetzung moderner LKW-Motoren und Antriebssysteme.",
  },
  {
    icon: Wrench,
    title: "Getriebeinstandsetzung & Kupplungsservice",
    description:
      "Fachgerechte Reparatur und Wartung von Getrieben und Kupplungen für Nutzfahrzeuge aller Marken.",
  },
  {
    icon: Gauge,
    title: "Bremsenwartung & Bremssystem-Reparatur",
    description:
      "Sicherheit hat Priorität: professionelle Prüfung und Instandsetzung Ihrer Bremsanlage.",
  },
  {
    icon: Zap,
    title: "Elektrik & Fahrzeugelektronik",
    description:
      "Diagnose und Reparatur komplexer elektrischer und elektronischer Systeme in Nutzfahrzeugen.",
  },
  {
    icon: Ruler,
    title: "Achsvermessung & Fahrwerksreparatur",
    description:
      "Exakte Achsvermessung und Fahrwerksinstandsetzung für optimale Fahrsicherheit und Reifenschonung.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="relative bg-ink-950 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Unsere Leistungen
          </span>
          <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Von der Straße bis zur Werkstatt – alles aus einer Hand
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-300">
            Ein eingespieltes Team, moderne Technik und kurze Wege: FIL
            Truck-Center bringt Ihr Nutzfahrzeug zuverlässig zurück auf die
            Straße.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-500/40 hover:bg-white/[0.06]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/0 blur-2xl transition-all duration-500 group-hover:bg-brand-500/20"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-ink-950">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
