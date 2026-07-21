"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCanHover } from "@/lib/useCanHover";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
  block?: boolean;
};

function MagneticInner({
  children,
  strength = 0.35,
  className = "",
  block = false,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`${block ? "block" : "inline-block"} ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * On touch devices this skips the spring/mouse-tracking setup entirely
 * (not just visually inert) since a magnetic pull only makes sense
 * with a real cursor.
 */
export default function Magnetic(props: MagneticProps) {
  const canHover = useCanHover();

  if (!canHover) {
    return (
      <div className={`${props.block ? "block" : "inline-block"} ${props.className ?? ""}`}>
        {props.children}
      </div>
    );
  }

  return <MagneticInner {...props} />;
}
