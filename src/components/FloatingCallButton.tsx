"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCallButton() {
  return (
    <motion.a
      href={site.phoneHref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-500 px-5 py-4 text-sm font-bold text-ink-950 shadow-brand sm:hidden"
      aria-label="24/7 Notruf anrufen"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950 opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-950" />
      </span>
      <Phone size={16} />
      Notruf
    </motion.a>
  );
}
