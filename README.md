# FIL Truck-Center

Premium-Website für FIL Truck-Center – LKW-Abschleppdienst, Bergung, Pannenhilfe
und Nutzfahrzeug-Werkstatt in Hamm.

Gebaut mit [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com)
und [Framer Motion](https://www.framer.com/motion/).

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite ist danach unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Build

```bash
npm run build
npm start
```

## Struktur

- `src/app` – Layout, globale Styles und die Startseite
- `src/components` – Alle Seitenabschnitte (Navbar, Hero, Services, Kontakt, ...)
- `src/lib/site.ts` – Zentrale Kontaktdaten und Navigationslinks
- `public/images` – Logo und Fahrzeug-/Werkstattfotos
