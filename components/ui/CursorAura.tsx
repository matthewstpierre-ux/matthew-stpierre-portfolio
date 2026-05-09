"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorAura() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  const trailX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    setIsMobile(false);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (
        t.matches("a, button, [role=button], input, textarea, select, [tabindex]")
      ) {
        setHovered(true);
      }
    };
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Trail dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="w-8 h-8 rounded-full transition-all duration-150"
          style={{
            border: `1px solid ${hovered ? "rgba(179,0,27,0.6)" : "rgba(201,205,210,0.25)"}`,
            transform: hovered ? "scale(1.8)" : "scale(1)",
          }}
        />
      </motion.div>

      {/* Main dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <div
          className="w-2 h-2 rounded-full transition-all duration-150"
          style={{
            background: hovered ? "#E10A1F" : "#C9CDD2",
            boxShadow: hovered
              ? "0 0 8px rgba(225,10,31,0.8)"
              : "0 0 4px rgba(201,205,210,0.5)",
            transform: hovered ? "scale(0.5)" : "scale(1)",
          }}
        />
      </motion.div>
    </>
  );
}
