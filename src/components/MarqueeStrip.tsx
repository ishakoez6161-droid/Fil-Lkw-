const items = [
  "24/7 NOTDIENST",
  "LKW-ABSCHLEPPDIENST",
  "BERGUNG & UNFALLHILFE",
  "PANNENHILFE",
  "MOTORREPARATUR",
  "ACHSVERMESSUNG",
  "HAMM & UMGEBUNG",
];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 animate-marquee items-center"
    >
      {items.map((item, i) => (
        <span
          key={i}
          className="mx-4 flex items-center gap-4 text-sm font-extrabold uppercase tracking-wider text-ink-950 sm:text-base"
        >
          {item}
          <span className="h-1.5 w-1.5 rounded-full bg-ink-950/50" />
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-10">
      <div className="-ml-[6%] w-[112%] -rotate-2 border-y-2 border-ink-950/80 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 py-4 shadow-brand">
        <div className="flex whitespace-nowrap">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>
    </section>
  );
}
