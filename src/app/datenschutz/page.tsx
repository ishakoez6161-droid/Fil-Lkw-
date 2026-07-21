import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | FIL Truck-Center",
  description: "Datenschutzerklärung von FIL Truck-Center.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-ink-950 pt-36 pb-24 sm:pt-44">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Rechtliches
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-ink-300">
            <section>
              <h2 className="text-base font-bold text-white">
                1. Verantwortlicher
              </h2>
              <p className="mt-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website
                ist:
              </p>
              <p className="mt-3">
                {site.name}
                <br />
                Inhaber: {site.owner}
                <br />
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
                <br />
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

            <section>
              <h2 className="text-base font-bold text-white">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="mt-3">
                Wir verarbeiten personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur mit
                Einwilligung des Nutzers oder auf Grundlage einer anderen
                gesetzlichen Erlaubnis, insbesondere Art. 6 Abs. 1 lit. a, b
                und f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                3. Bereitstellung der Website und Server-Logfiles
              </h2>
              <p className="mt-3">
                Beim Aufrufen unserer Website erhebt unser Hosting-Provider
                automatisch Informationen in sogenannten Server-Logfiles, die
                Ihr Browser übermittelt. Dies sind u. a. IP-Adresse,
                Datum und Uhrzeit der Anfrage, Browsertyp und -version,
                verwendetes Betriebssystem sowie die zuvor besuchte Seite.
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
                Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Die Erhebung erfolgt auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO aus unserem berechtigten Interesse
                an einer technisch fehlerfreien Darstellung und der
                Sicherheit unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                4. Kontaktformular
              </h2>
              <p className="mt-3">
                Wenn Sie uns über unser Kontaktformular Anfragen zukommen
                lassen, werden Ihre Angaben (Name, Telefonnummer, E-Mail-
                Adresse und Nachricht) zum Zwecke der Bearbeitung der Anfrage
                und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
                b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen
                übrigen Fällen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung von
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese
                abgefragt wurde. Die Daten werden gelöscht, sobald sie für
                die Erreichung des Zwecks ihrer Erhebung nicht mehr
                erforderlich sind, spätestens nach abschließender
                Bearbeitung Ihrer Anfrage, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                5. Google Maps
              </h2>
              <p className="mt-3">
                Auf unserer Website binden wir im Bereich „Einsatzgebiet“
                eine Karte des Kartendienstes Google Maps ein. Anbieter ist
                Google Ireland Limited, Gordon House, Barrow Street, Dublin
                4, Irland. Die Karte wird erst geladen, wenn Sie aktiv auf
                „Karte laden“ klicken. Erst dann wird eine Verbindung zu den
                Servern von Google hergestellt und Ihre IP-Adresse sowie
                weitere technische Daten an Google übertragen. Die Nutzung
                erfolgt im Interesse einer ansprechenden Darstellung unseres
                Standorts und einer leichten Auffindbarkeit auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO bzw., soweit Sie durch Klick
                auf „Karte laden“ eingewilligt haben, auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen zum Umgang
                mit Nutzerdaten finden Sie in der Datenschutzerklärung von
                Google:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-200 underline underline-offset-4 hover:text-brand-400"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">6. Cookies</h2>
              <p className="mt-3">
                Diese Website verwendet ausschließlich technisch notwendige
                Cookies bzw. vergleichbare Speichertechnologien, die für den
                Betrieb der Seite erforderlich sind. Sofern durch eingebette
                Dienste Dritter (z. B. Google Maps nach aktivem Laden)
                Cookies gesetzt werden, gelten die Datenschutzhinweise des
                jeweiligen Anbieters.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                7. Ihre Rechte als betroffene Person
              </h2>
              <p className="mt-3">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft
                über Ihre gespeicherten personenbezogenen Daten, deren
                Herkunft und Empfänger sowie den Zweck der Datenverarbeitung
                und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung
                dieser Daten. Ebenso steht Ihnen ein Recht auf Einschränkung
                der Verarbeitung, ein Recht auf Datenübertragbarkeit sowie
                ein Widerspruchsrecht gegen die Verarbeitung Ihrer Daten aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben, zu.
                Sofern die Verarbeitung auf einer Einwilligung beruht, können
                Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                Daten können Sie sich jederzeit über die im Impressum
                angegebenen Kontaktdaten an uns wenden. Ihnen steht zudem ein
                Beschwerderecht bei der zuständigen Datenschutz-
                Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                8. SSL-/TLS-Verschlüsselung
              </h2>
              <p className="mt-3">
                Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-
                Verschlüsselung, um die Übertragung vertraulicher Inhalte,
                wie zum Beispiel Anfragen über das Kontaktformular, zu
                schützen. Eine verschlüsselte Verbindung erkennen Sie an der
                Adresszeile Ihres Browsers, wenn diese von „http://“ auf
                „https://“ wechselt.
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-white">
                9. Aktualität dieser Datenschutzerklärung
              </h2>
              <p className="mt-3">
                Diese Datenschutzerklärung ist aktuell gültig. Durch die
                Weiterentwicklung unserer Website und Angebote oder aufgrund
                geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
                erforderlich werden, diese Datenschutzerklärung anzupassen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
