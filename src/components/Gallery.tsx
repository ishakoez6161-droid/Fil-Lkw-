"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/truck-hero.jpg",
    alt: "Volvo FH 500 Bergefahrzeug von FIL Truck-Center",
    caption: "Unser Schwerlast-Bergefahrzeug",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/truck-recovery.jpg",
    alt: "LKW-Bergung eines liegengebliebenen Sattelzugs",
    caption: "Bergung im Einsatz",
    span: "",
  },
  {
    src: "/images/truck-night.jpg",
    alt: "Nächtlicher Pannenhilfe-Einsatz von FIL Truck-Center",
    caption: "Rund um die Uhr im Einsatz",
    span: "",
  },
  {
    src: "/images/workshop.jpg",
    alt: "Moderne Werkstatthalle von FIL Truck-Center",
    caption: "Unsere Werkstatt in Hamm",
    span: "sm:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galerie" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Galerie
          </span>
          <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
            Einblicke in unsere Einsätze
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:grid-rows-2">
          {images.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink-100 ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-sm font-bold text-white">
                  {image.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
