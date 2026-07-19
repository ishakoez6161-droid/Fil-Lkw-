"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Clock, ShieldCheck, Wrench } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

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
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="warum-wir" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <SpotlightCard
              tilt
              className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10"
            >
              <motion.div style={{ y: imageY }} className="h-[24rem] sm:h-[32rem]">
                <Image
                  src="/images/workshop.jpg"
                  alt="Moderne Nutzfahrzeug-Werkstatt von FIL Truck-Center"
                  width={947}
                  height={661}
                  className="h-full w-full scale-110 object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </SpotlightCard>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass shadow-soft absolute -bottom-8 right-4 max-w-[15rem] rounded-2xl p-5 sm:right-8"
            >
              <div className="font-display text-3xl font-extrabold text-brand-400">
                Made
              </div>
              <div className="text-sm font-semibold text-ink-200">
                in Hamm – für den gesamten Fuhrpark Ihres Vertrauens.
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                Warum FIL Truck-Center?
              </span>
              <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Zuverlässigkeit trifft auf moderne Technik
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
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
                  initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <SpotlightCard
                    lift={4}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-500/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 transition-colors duration-300 group-hover/spotlight:bg-brand-500 group-hover/spotlight:text-ink-950">
                      <point.icon size={18} />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">
                      {point.description}
                    </p>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
