"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { playHover, playClick } from "@/lib/audio";
import { ReactNode } from "react";

interface ChromeButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "pill" | "rect";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

export function ChromeButton({
  children,
  href,
  onClick,
  variant = "pill",
  size = "md",
  className,
  external = false,
  type = "button",
}: ChromeButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 font-mono tracking-widest uppercase",
    "border border-[#C9CDD2]/30 bg-[#0A0A0B]/60 backdrop-blur-sm",
    "transition-colors duration-200",
    "text-[#EAEAEA] hover:text-white",
    variant === "pill" ? "rounded-full" : "rounded-sm",
    size === "sm" && "text-[10px] px-4 py-2",
    size === "md" && "text-xs px-6 py-3",
    size === "lg" && "text-sm px-8 py-4",
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    onHoverStart: () => playHover(),
    onClick: () => {
      playClick();
      onClick?.();
    },
  };

  const inner = (
    <>
      {/* Chrome bevel highlight */}
      <span
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,205,210,0.12) 0%, transparent 50%, rgba(201,205,210,0.04) 100%)",
        }}
      />
      {/* Red glow on hover — via CSS group */}
      <span
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: "0 0 20px rgba(179,0,27,0.5), inset 0 0 12px rgba(179,0,27,0.1)",
          border: "1px solid rgba(179,0,27,0.4)",
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(baseClasses, "group")}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={cn(baseClasses, "group cursor-pointer")}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
