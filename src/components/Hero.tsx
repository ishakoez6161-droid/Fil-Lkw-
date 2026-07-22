import Image from "next/image";
import { ArrowRight, MapPin, Phone, ShieldCheck, Timer } from "lucide-react";
import { site } from "@/lib/site";

const stats = [
  { label: "Einsatzbereit", value: "24/7" },
  { label: "Durchschnittliche Anfahrt", value: "< 45 Min." },
  { label: "Bundesweit im Einsatz", value: "100%" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(255,201,0,0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <span className="text-[13rem] leading-none font-extrabold tracking-tighter text-white/[0.035] sm:text-[20rem] lg:text-[26rem]">
          FIL
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-200 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              24/7 Notdienst für Nutzfahrzeuge · Hamm &amp; Umgebung
            </div>

            <h1
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
              className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
            >
              Wenn Ihr LKW steht,
              <br />
              <span className="text-gradient-brand">stehen wir bereit.</span>
            </h1>

            <p
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300"
            >
              FIL Truck-Center ist Ihr Premium-Partner für LKW-Abschleppdienst,
              Bergung, Pannenhilfe und professionelle Nutzfahrzeug-Werkstatt in
              Hamm. Schnell, zuverlässig, technisch auf höchstem Niveau –
              rund um die Uhr.
            </p>

            <div
              data-reveal
              style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={site.phoneHref}
                className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-ink-950 shadow-brand transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <Phone size={18} className="transition-transform group-hover:rotate-12" />
                24/7 Notruf: {site.phone}
              </a>
              <a
                href="#leistungen"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition-all hover:border-brand-400 hover:bg-white/10"
              >
                Unsere Leistungen
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div
              data-reveal
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-ink-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-white/10">
              <Image
                src="/images/truck-hero.jpg"
                alt="FIL Truck-Center Abschlepp-LKW Volvo FH 500"
                width={1558}
                height={1000}
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="h-[26rem] w-full object-cover sm:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
            </div>

            <div className="glass shadow-soft absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 sm:-left-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500">
                <Timer size={20} className="text-ink-950" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Schnelle Anfahrt</div>
                <div className="text-xs text-ink-300">Ø unter 45 Minuten</div>
              </div>
            </div>

            <div className="glass shadow-soft absolute -top-6 -right-4 hidden items-center gap-3 rounded-2xl px-5 py-4 sm:-right-8 sm:flex">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <ShieldCheck size={20} className="text-brand-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Geprüfte Technik</div>
                <div className="text-xs text-ink-300">Moderner Fuhrpark</div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#einsatzgebiet"
          className="mt-16 hidden items-center gap-2 text-sm font-semibold text-ink-400 transition-colors hover:text-white lg:inline-flex"
        >
          <MapPin size={16} />
          Steigering 4a, 59077 Hamm — unser Einsatzgebiet ansehen
        </a>
      </div>
    </section>
  );
}
