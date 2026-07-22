import { Award, Users, Wrench } from "lucide-react";

const stats = [
  {
    icon: Award,
    display: "25+",
    label: "Jahre Erfahrung",
    description: "im Nutzfahrzeug- und Bergungsgeschäft",
  },
  {
    icon: Wrench,
    display: "8.400+",
    label: "Abgeschlossene Reparaturen",
    description: "zuverlässig instand gesetzt",
  },
  {
    icon: Users,
    display: "8",
    label: "Team-Mitglieder",
    description: "erfahrene Techniker & Fahrer",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-900 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,201,0,0.07),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              className="group flex flex-col items-center gap-3 px-6 py-8 text-center transition-colors duration-300 sm:py-0"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-ink-950">
                <stat.icon size={22} />
              </div>
              <div className="text-shimmer text-4xl font-extrabold sm:text-5xl">
                {stat.display}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{stat.label}</div>
                <div className="mt-1 text-xs text-ink-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
