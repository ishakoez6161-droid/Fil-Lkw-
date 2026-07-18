"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Markus R.",
    role: "Fuhrparkleiter, Speditionsunternehmen",
    text: "Nachts liegengeblieben auf der A2 – innerhalb von 40 Minuten war FIL Truck-Center vor Ort. Professionell, schnell und fair im Preis.",
  },
  {
    name: "Sabine K.",
    role: "Disponentin",
    text: "Die Werkstatt hat unsere komplette Flotte auf Vordermann gebracht. Transparente Kommunikation und wirklich kompetente Techniker.",
  },
  {
    name: "Yusuf T.",
    role: "Selbstständiger Fernfahrer",
    text: "Bergung nach einem Unfall reibungslos organisiert – inklusive Abstimmung mit der Versicherung. Absolute Empfehlung.",
  },
];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="relative bg-ink-50/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Kundenstimmen
          </span>
          <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
            Darauf vertrauen unsere Kunden
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-sm"
            >
              <div className="flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-ink-100 pt-4">
                <div className="text-sm font-bold text-ink-950">{t.name}</div>
                <div className="text-xs text-ink-400">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
