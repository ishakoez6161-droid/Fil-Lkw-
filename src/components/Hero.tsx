"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin, Phone, ShieldCheck, Timer } from "lucide-react";
import { site } from "@/lib/site";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";

const stats = [
  { label: "Einsatzbereit", value: "24/7" },
  { label: "Durchschnittliche Anfahrt", value: "< 45 Min." },
  { label: "Bundesweit im Einsatz", value: "100%" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const springGlowX = useSpring(glowX, { stiffness: 60, damping: 22 });
  const springGlowY = useSpring(glowY, { stiffness: 60, damping: 22 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-500/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 left-[-10%] h-[30rem] w-[30rem] rounded-full bg-azure-500/10 blur-[120px]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full bg-brand-400/[0.07] blur-[90px]"
        style={{
          left: springGlowX,
          top: springGlowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <motion.div style={{ y: contentY, opacity: contentOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-200 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              24/7 Notdienst für Nutzfahrzeuge · Hamm &amp; Umgebung
            </motion.div>

            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              <SplitText text="Wenn Ihr LKW steht," delay={0.1} />
              <br />
              <SplitText
                text="stehen wir bereit."
                delay={0.35}
                className="text-gradient-brand"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
            >
              FIL Truck-Center ist Ihr Premium-Partner für LKW-Abschleppdienst,
              Bergung, Pannenhilfe und professionelle Nutzfahrzeug-Werkstatt in
              Hamm. Schnell, zuverlässig, technisch auf höchstem Niveau –
              rund um die Uhr.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Magnetic>
                <a
                  href={site.phoneHref}
                  className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-ink-950 shadow-brand transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Phone
                    size={18}
                    className="transition-transform group-hover:rotate-12"
                  />
                  24/7 Notruf: {site.phone}
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a
                  href="#leistungen"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition-all hover:border-brand-400 hover:bg-white/10"
                >
                  Unsere Leistungen
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </Magnetic>
            </motion.div>

            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1, ease: "easeOut" }}
                >
                  <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-ink-400 sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <motion.div
              ref={imageWrapRef}
              style={{ y: imageY }}
              className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10"
            >
              <Image
                src="/images/truck-hero.jpg"
                alt="FIL Truck-Center Abschlepp-LKW Volvo FH 500"
                width={1558}
                height={1000}
                priority
                className="h-[26rem] w-full scale-110 object-cover sm:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 },
                y: {
                  duration: 4,
                  delay: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="glass shadow-soft absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 sm:-left-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500">
                <Timer size={20} className="text-ink-950" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Schnelle Anfahrt
                </div>
                <div className="text-xs text-ink-300">Ø unter 45 Minuten</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: [0, 7, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.75 },
                y: {
                  duration: 4.5,
                  delay: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="glass shadow-soft absolute -top-6 -right-4 hidden items-center gap-3 rounded-2xl px-5 py-4 sm:-right-8 sm:flex"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <ShieldCheck size={20} className="text-brand-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Geprüfte Technik
                </div>
                <div className="text-xs text-ink-300">Moderner Fuhrpark</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#einsatzgebiet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 hidden items-center gap-2 text-sm font-semibold text-ink-400 hover:text-white lg:inline-flex"
        >
          <MapPin size={16} />
          Steigering 4a, 59077 Hamm — unser Einsatzgebiet ansehen
        </motion.a>
      </div>
    </section>
  );
}
