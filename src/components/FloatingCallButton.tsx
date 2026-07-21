import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCallButton() {
  return (
    <a
      href={site.phoneHref}
      className="animate-float-in fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand-500 px-5 py-4 text-sm font-bold text-ink-950 shadow-brand sm:hidden"
      aria-label="24/7 Notruf anrufen"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950 opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ink-950" />
      </span>
      <Phone size={16} />
      Notruf
    </a>
  );
}
