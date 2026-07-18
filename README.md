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
- `src/app/impressum`, `src/app/datenschutz` – Rechtstexte
- `src/app/api/contact` – Route Handler für das Kontaktformular (Versand per SMTP)
- `src/components` – Alle Seitenabschnitte (Navbar, Hero, Services, Kontakt, ...)
- `src/lib/site.ts` – Zentrale Kontaktdaten und Navigationslinks
- `public/images` – Logo und Fahrzeug-/Werkstattfotos

## Kontaktformular (E-Mail-Versand)

Das Kontaktformular sendet Anfragen per SMTP. Damit der Versand funktioniert,
müssen folgende Umgebungsvariablen gesetzt werden (siehe `.env.example`):

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_TO_EMAIL=
```

Ohne diese Variablen antwortet das Formular mit einer Fehlermeldung und
verweist auf die Telefon-Hotline. Die Werte bei eurem E-Mail-/Hosting-
Provider erfragen und in der Produktivumgebung (z. B. Vercel Project
Settings) hinterlegen – niemals im Repository committen.

## Rechtstexte

Impressum und Datenschutzerklärung sind als Vorlage auf Basis der bekannten
Firmendaten hinterlegt. Bitte vor Live-Schaltung prüfen (lassen), insbesondere:

- Umsatzsteuer-ID / Handelsregistereintrag im Impressum ergänzen, falls vorhanden
- Rechtstexte im Zweifel von einem Anwalt oder Dienst wie eRecht24 prüfen lassen
