import Image from "next/image";

const images = [
  {
    src: "/images/truck-hero.jpg",
    alt: "Volvo FH 500 Bergefahrzeug von FIL Truck-Center",
    caption: "Unser Schwerlast-Bergefahrzeug",
    span: "sm:col-span-2 sm:row-span-2",
    sizes: "(min-width: 640px) 540px, 100vw",
  },
  {
    src: "/images/truck-recovery.jpg",
    alt: "LKW-Bergung eines liegengebliebenen Sattelzugs",
    caption: "Bergung im Einsatz",
    span: "",
    sizes: "(min-width: 640px) 270px, 100vw",
  },
  {
    src: "/images/truck-night.jpg",
    alt: "Nächtlicher Pannenhilfe-Einsatz von FIL Truck-Center",
    caption: "Rund um die Uhr im Einsatz",
    span: "",
    sizes: "(min-width: 640px) 270px, 100vw",
  },
  {
    src: "/images/truck-highway-front.jpg",
    alt: "FIL Truck-Center Volvo FH 500 auf dem Weg zum Einsatz",
    caption: "Auf dem Weg zu Ihnen",
    span: "",
    sizes: "(min-width: 640px) 270px, 100vw",
  },
  {
    src: "/images/truck-loading-dusk.jpg",
    alt: "FIL Truck-Center Bergefahrzeug bei der Abschleppung eines Sattelzugs in der Abenddämmerung",
    caption: "Abschleppung im Einsatz",
    span: "",
    sizes: "(min-width: 640px) 270px, 100vw",
  },
  {
    src: "/images/truck-night-recovery.jpg",
    alt: "FIL Truck-Center Bergefahrzeug bei nächtlicher Pannenhilfe für einen MAN-Sattelzug",
    caption: "Pannenhilfe bei Nacht",
    span: "",
    sizes: "(min-width: 640px) 270px, 100vw",
  },
  {
    src: "/images/workshop.jpg",
    alt: "Moderne Werkstatthalle von FIL Truck-Center",
    caption: "Unsere Werkstatt in Hamm",
    span: "sm:col-span-2",
    sizes: "(min-width: 640px) 540px, 100vw",
  },
  {
    src: "/images/truck-highway-side.jpg",
    alt: "FIL Truck-Center Volvo FH 500 zieht liegengebliebenen Sattelzug von der Autobahn",
    caption: "Autobahn-Bergung",
    span: "",
    sizes: "(min-width: 640px) 270px, 100vw",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Galerie
          </span>
          <h2 className="text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Einblicke in unsere Einsätze
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-4 sm:auto-rows-[9.5rem]">
          {images.map((image, i) => (
            <div
              key={image.src}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className={`group relative h-64 overflow-hidden rounded-2xl shadow-soft ring-1 ring-white/10 sm:h-auto ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                sizes={image.sizes}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-bold text-white">{image.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
