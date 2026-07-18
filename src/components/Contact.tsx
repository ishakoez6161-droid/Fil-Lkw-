"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) throw new Error("request_failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-ink-900 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
            Kontakt
          </span>
          <h2 className="font-display text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Jetzt Hilfe anfordern
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-300">
            Egal ob Notfall oder geplanter Werkstatttermin – wir sind für Sie
            da.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-8 lg:col-span-2"
          >
            <div className="rounded-[2rem] bg-brand-500 p-8 shadow-brand">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950">
                <Phone size={20} className="text-brand-400" />
              </div>
              <h3 className="font-display mt-5 text-xl font-bold text-ink-950">
                24/7 Notruf-Hotline
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-800">
                Bei einer Panne oder einem Unfall zählt jede Minute – rufen
                Sie uns direkt an.
              </p>
              <a
                href={site.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
              >
                <Phone size={16} />
                {site.phone}
              </a>
            </div>

            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Adresse</div>
                  <div className="mt-1 text-sm text-ink-300">
                    {site.address.street}, {site.address.zip}{" "}
                    {site.address.city}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-400">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">E-Mail</div>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-sm text-ink-300 hover:text-brand-400"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-400">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Telefon</div>
                  <a
                    href={site.phoneHref}
                    className="mt-1 block text-sm text-ink-300 hover:text-brand-400"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:col-span-3"
          >
            {status === "success" ? (
              <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-brand-400">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display mt-6 text-xl font-bold text-white">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-300">
                  Wir melden uns schnellstmöglich bei Ihnen. Bei einem
                  akuten Notfall rufen Sie uns bitte direkt an.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink-300">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Ihr Name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink-300">
                    Telefon
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Ihre Telefonnummer"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink-300">
                    E-Mail
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="ihre@email.de"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink-300">
                    Nachricht
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-400 outline-none transition-colors focus:border-brand-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-xs leading-relaxed text-ink-400">
                    <input
                      required
                      type="checkbox"
                      name="consent"
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-brand-500"
                    />
                    <span>
                      Ich habe die{" "}
                      <Link
                        href="/datenschutz"
                        className="font-semibold text-ink-200 underline-offset-4 hover:text-brand-400 hover:underline"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und bin mit der Verarbeitung meiner Daten zur
                      Bearbeitung meiner Anfrage einverstanden.
                    </span>
                  </label>
                </div>

                {status === "error" && (
                  <div className="sm:col-span-2 flex items-start gap-2 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    Ihre Anfrage konnte nicht gesendet werden. Bitte rufen Sie
                    uns direkt an: {site.phone}
                  </div>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-bold text-ink-950 shadow-brand transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Anfrage senden
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
