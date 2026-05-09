"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { ChromeButton } from "@/components/ui/ChromeButton";
import { fadeUp, staggerContainer, viewportOptions, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const ChromeSigilHalo = dynamic(() => import("@/components/3d/ChromeSigilHalo"), {
  ssr: false,
});

export function Hero() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollY } = useScroll();
  const haloScale = useTransform(scrollY, [0, 600], [1, 1.3]);
  const haloOpacity = useTransform(scrollY, [0, 500], [0.7, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -80]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (prefersReduced || isMobile) return;
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setMouseX(nx);
      setMouseY(ny);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReduced, isMobile]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]"
      aria-label="Hero"
    >
      {/* Halo background */}
      {!isMobile && (
        <motion.div
          className="absolute inset-0 z-0"
          style={prefersReduced ? {} : { scale: haloScale, opacity: haloOpacity }}
        >
          <ChromeSigilHalo className="w-full h-full" />
        </motion.div>
      )}

      {/* CSS gradient fallback for mobile / reduced motion */}
      {(isMobile || prefersReduced) && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(179,0,27,0.15) 0%, rgba(10,10,11,0.9) 60%, #000 100%)",
          }}
        />
      )}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,205,210,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,205,210,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={prefersReduced ? {} : { y: textY }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Y2K decorative line */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B3001B]" />
            <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.3em] uppercase">
              Portfolio · 2026
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B3001B]" />
          </motion.div>

          {/* Main name */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-4"
            style={
              prefersReduced
                ? {}
                : {
                    transform: `translate(${mouseX * -8}px, ${mouseY * -4}px)`,
                    transition: "transform 0.1s ease-out",
                  }
            }
          >
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(180deg, #EAEAEA 0%, #9A9A9A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MATTHEW
            </span>
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(180deg, #EAEAEA 0%, #C9CDD2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ST PIERRE
            </span>
          </motion.h1>

          {/* Role tagline */}
          <motion.p
            variants={fadeUp}
            className="font-mono text-sm md:text-base text-[#7A7E85] tracking-[0.2em] uppercase mb-3"
            style={
              prefersReduced
                ? {}
                : {
                    transform: `translate(${mouseX * -4}px, ${mouseY * -2}px)`,
                    transition: "transform 0.15s ease-out",
                  }
            }
          >
            Music industry builder · Founder,{" "}
            <span className="text-[#C9CDD2]">Lisnin.io</span>
          </motion.p>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-[#9A9A9A] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Helping the next generation of independent artists make a living
            from their music.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <ChromeButton href="/work" variant="pill" size="lg">
              View Work
            </ChromeButton>
            <ChromeButton href="/#contact" variant="rect" size="lg">
              Get In Touch
            </ChromeButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-mono text-[9px] text-[#3A3D42] tracking-widest">
          SCROLL
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#3A3D42] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
