"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Single shared IntersectionObserver for every [data-reveal] element on
 * the page, instead of one observer per component. Elements are visible
 * by default (SSR/no-JS baseline); this only adds the pending/hidden
 * state once JS has confirmed it can animate them back in.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    elements.forEach((el) => el.classList.add("reveal-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("reveal-pending"));
    };
  }, [pathname]);

  return null;
}
