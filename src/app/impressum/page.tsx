import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | FIL Truck-Center",
  description: "Impressum und rechtliche Angaben von FIL Truck-Center.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-950 pt-36 pb-24 sm:pt-44">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Rechtliches
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Impressum
          </h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-300">
            <section>
              <h2 className="text-base font-bold text-white">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-3">
                {site.name}
                <br />
                Inhaber: {site.owner}
                <br />
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">Kontakt</h2>
              <p className="mt-3">
                Telefon:{" "}
                <a href={site.phoneHref} className="hover:text-brand-400">
                  {site.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-brand-400"
                >
                  {site.email}
                </a>
              </p>
            </section>

            {/*
              TODO (Betreiber): Falls vorhanden, hier ergänzen:
              - Umsatzsteuer-Identifikationsnummer gemäß §27a UStG
              - Handelsregistereintrag (Registergericht, Registernummer)
              - Zuständige Aufsichtsbehörde / Handwerkskammer, falls einschlägig
            */}

            <section>
              <h2 className="text-base font-bold text-white">
                Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
              </h2>
              <p className="mt-3">
                {site.owner}
                <br />
                {site.address.street}, {site.address.zip} {site.address.city}
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                EU-Streitschlichtung
              </h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-200 underline underline-offset-4 hover:text-brand-400"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben unter „Kontakt“.
              </p>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                Haftung für Inhalte
              </h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mt-3">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                Haftung für Links
              </h2>
              <p className="mt-3">
                Unser Angebot enthält gegebenenfalls Links zu externen
                Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                haben. Deshalb können wir für diese fremden Inhalte auch
                keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">Urheberrecht</h2>
              <p className="mt-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke
                auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
