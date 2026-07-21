import Image from "next/image";
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
    <section id="warum-wir" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div data-reveal className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10">
              <Image
                src="/images/workshop.jpg"
                alt="Moderne Nutzfahrzeug-Werkstatt von FIL Truck-Center"
                width={947}
                height={661}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-[24rem] w-full object-cover sm:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            </div>

            <div className="glass shadow-soft absolute -bottom-8 right-4 max-w-[15rem] rounded-2xl p-5 sm:right-8">
              <div className="text-3xl font-extrabold text-brand-400">Made</div>
              <div className="text-sm font-semibold text-ink-200">
                in Hamm – für den gesamten Fuhrpark Ihres Vertrauens.
              </div>
            </div>
          </div>

          <div>
            <div data-reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                Warum FIL Truck-Center?
              </span>
              <h2 className="text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Zuverlässigkeit trifft auf moderne Technik
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Als Inhaber-geführtes Unternehmen unter der Leitung von Ali
                Yalcinkaya setzen wir auf kurze Entscheidungswege, ehrliche
                Beratung und Technik auf höchstem Niveau – damit Ihr Fuhrpark
                so wenig Stillstand wie möglich hat.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {points.map((point, i) => (
                <div
                  key={point.title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                  className="hover-lift group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-brand-500/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-ink-950">
                    <point.icon size={18} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
