import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fil-truck-center.de"),
  title: "FIL Truck-Center | LKW-Abschleppdienst & Nutzfahrzeug-Werkstatt Hamm",
  description:
    "FIL Truck-Center in Hamm: 24/7 LKW-Pannenhilfe, Bergung und Abschleppdienst für Nutzfahrzeuge, sowie professionelle Werkstatt für Motor, Getriebe, Bremsen, Elektrik und Achsvermessung.",
  keywords: [
    "LKW Abschleppdienst Hamm",
    "LKW Pannenhilfe",
    "Nutzfahrzeug Werkstatt",
    "LKW Bergung",
    "Fil Truck Center",
    "24/7 LKW Notdienst",
  ],
  authors: [{ name: "FIL Truck-Center" }],
  openGraph: {
    title: "FIL Truck-Center | LKW-Abschleppdienst & Nutzfahrzeug-Werkstatt",
    description:
      "24/7 LKW-Pannenhilfe, Bergung, Abschleppdienst und professionelle Nutzfahrzeug-Werkstatt in Hamm.",
    locale: "de_DE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-ink-950 text-ink-100 antialiased font-sans">
        <div
          aria-hidden
          className="grain-overlay pointer-events-none fixed inset-0 z-40 hidden opacity-[0.035] mix-blend-overlay sm:block"
        />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
