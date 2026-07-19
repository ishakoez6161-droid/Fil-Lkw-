"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Wrench } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Jahre Erfahrung",
    description: "im Nutzfahrzeug- und Bergungsgeschäft",
  },
  {
    icon: Wrench,
    value: 8400,
    suffix: "+",
    label: "Abgeschlossene Reparaturen",
    description: "zuverlässig instand gesetzt",
  },
  {
    icon: Users,
    value: 8,
    suffix: "",
    label: "Team-Mitglieder",
    description: "erfahrene Techniker & Fahrer",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-ink-900 py-16 sm:py-20">
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 px-6 py-8 text-center transition-colors duration-300 sm:py-0"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-ink-950">
                <stat.icon size={22} />
              </div>
              <div className="font-display text-shimmer text-4xl font-extrabold sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{stat.label}</div>
                <div className="mt-1 text-xs text-ink-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
