"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SpotlightCard({
  children,
  className = "",
  tilt = true,
  lift = 0,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 260, damping: 22, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], tilt ? [7, -7] : [0, 0]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], tilt ? [-7, 7] : [0, 0]),
    springConfig
  );

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mouseX.set(px - 0.5);
    mouseY.set(py - 0.5);
    ref.current?.style.setProperty("--spot-x", `${px * 100}%`);
    ref.current?.style.setProperty("--spot-y", `${py * 100}%`);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={lift ? { y: -lift } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`spotlight-card group/spotlight relative ${className}`}
    >
      <div className="spotlight-glow pointer-events-none absolute inset-0 z-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100" />
      <div className="relative z-10 h-full" style={{ transform: "translateZ(24px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
