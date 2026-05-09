"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ChromeCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function ChromeCard({
  children,
  className,
  hover = false,
  glow = false,
}: ChromeCardProps) {
  const card = (
    <div
      className={cn(
        "relative scanlines",
        "border border-[#C9CDD2]/15 rounded-sm",
        "bg-gradient-to-br from-[#111115] to-[#0A0A0B]",
        "overflow-hidden",
        className
      )}
    >
      {/* Inner chrome rim */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,205,210,0.08) 0%, transparent 40%)",
          boxShadow: "inset 0 1px 0 rgba(201,205,210,0.1)",
        }}
      />
      {glow && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            boxShadow: "0 0 40px rgba(179,0,27,0.12)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{
          y: -4,
          borderColor: "rgba(201,205,210,0.3)",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-sm"
        style={{
          ["--hover-glow" as string]: "rgba(179,0,27,0.25)",
        }}
      >
        {card}
      </motion.div>
    );
  }

  return card;
}
