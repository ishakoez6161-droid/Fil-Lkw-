"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Wrench } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "24/7 Erreichbarkeit",
    description:
      "Ein Anruf genügt – Tag und Nacht, an jedem Wochentag stehen wir für Sie bereit.",
  },
  {
    icon: Wrench,
    title: "Moderne Bergungstechnik",
    description:
      "Unser Volvo FH 500 Schwerlast-Bergefahrzeug mit TEVOR-Kransystem meistert jeden Einsatz.",
  },
  {
    icon: Award,
    title: "Erfahrenes Team",
    description:
      "Qualifizierte Techniker mit langjähriger Erfahrung in Nutzfahrzeugtechnik und Bergung.",
  },
  {
    icon: ShieldCheck,
    title: "Volles Vertrauen",
    description:
      "Transparente Abwicklung, faire Preise und direkte Abstimmung mit Fuhrpark und Versicherung.",
  },
];

export default function WhyUs() {
  return (
    <section id="warum-wir" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink-100">
              <Image
                src="/images/workshop.jpg"
                alt="Moderne Nutzfahrzeug-Werkstatt von FIL Truck-Center"
                width={947}
                height={661}
                className="h-[22rem] w-full object-cover sm:h-[30rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass shadow-soft absolute -bottom-8 right-4 max-w-[15rem] rounded-2xl p-5 sm:right-8"
            >
              <div className="font-display text-3xl font-extrabold text-ink-950">
                Made
              </div>
              <div className="text-sm font-semibold text-ink-500">
                in Hamm – für den gesamten Fuhrpark Ihres Vertrauens.
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Warum FIL Truck-Center?
              </span>
              <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
                Zuverlässigkeit trifft auf moderne Technik
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                Als Inhaber-geführtes Unternehmen unter der Leitung von Ali
                Yalcinkaya setzen wir auf kurze Entscheidungswege, ehrliche
                Beratung und Technik auf höchstem Niveau – damit Ihr Fuhrpark
                so wenig Stillstand wie möglich hat.
              </p>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5 transition-colors hover:border-brand-300 hover:bg-brand-50/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-950 text-brand-400">
                    <point.icon size={18} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-ink-950">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
