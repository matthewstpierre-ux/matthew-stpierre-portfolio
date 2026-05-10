"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { fadeUp, staggerContainer, ease } from "@/lib/motion";

const ChromeSigilHalo = dynamic(() => import("@/components/3d/ChromeSigilHalo"), {
  ssr: false,
});

export function Hero() {
  const prefersReduced = useReducedMotion();
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
      setMouseX((e.clientX / window.innerWidth) * 2 - 1);
      setMouseY((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefersReduced, isMobile]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#000000" }}
      aria-label="Hero"
    >
      {/* Halo background — desktop gets scroll parallax, mobile gets static */}
      {!prefersReduced && !isMobile && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: haloScale, opacity: haloOpacity }}
        >
          <ChromeSigilHalo className="w-full h-full" />
        </motion.div>
      )}
      {!prefersReduced && isMobile && (
        <div className="absolute inset-0 z-0" style={{ opacity: 0.5 }}>
          <ChromeSigilHalo className="w-full h-full" />
        </div>
      )}

      {/* Reduced-motion fallback gradient */}
      {prefersReduced && (
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(179,0,27,0.18) 0%, rgba(10,10,11,0.9) 60%, #000 100%)",
          }}
        />
      )}

      {/* Grid overlay */}
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
        className="relative z-10 text-center px-6 w-full"
        style={prefersReduced ? {} : { y: textY }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative label */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center"
              style={{ gap: "20px", marginBottom: "28px" }}
            >
              <div style={{ height: "2px", width: "80px", background: "linear-gradient(90deg, transparent, var(--blood))" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--blood)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                Portfolio · 2026
              </span>
              <div style={{ height: "2px", width: "80px", background: "linear-gradient(90deg, var(--blood), transparent)" }} />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 12vw, 140px)",
                lineHeight: 0.88,
                marginBottom: "28px",
                transform: prefersReduced
                  ? undefined
                  : `translate(${mouseX * -8}px, ${mouseY * -4}px)`,
                transition: prefersReduced ? undefined : "transform 0.1s ease-out",
              }}
            >
              <span
                className="hero-name-glitch"
                data-text="MATTHEW"
                style={{
                  display: "block",
                  background: "linear-gradient(180deg, #EAEAEA 0%, #9A9A9A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MATTHEW
              </span>
              <span
                className="hero-name-glitch"
                data-text="ST PIERRE"
                style={{
                  display: "block",
                  background: "linear-gradient(180deg, #EAEAEA 0%, #C9CDD2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ST PIERRE
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "18px",
                color: "var(--steel)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "20px",
                transform: prefersReduced
                  ? undefined
                  : `translate(${mouseX * -4}px, ${mouseY * -2}px)`,
                transition: prefersReduced ? undefined : "transform 0.15s ease-out",
              }}
            >
              Music industry builder ·{" "}
              <span style={{ color: "var(--chrome)" }}>Founder, Lisnin.io</span>
            </motion.p>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              style={{
                color: "var(--ash)",
                fontSize: "20px",
                maxWidth: "600px",
                margin: "0 auto 48px",
                lineHeight: 1.6,
              }}
            >
              Helping the next generation of independent artists make a living
              from their music.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center"
              style={{ gap: "20px" }}
            >
              <a
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px 48px",
                  borderRadius: "100px",
                  border: "1px solid rgba(201,205,210,0.35)",
                  background: "rgba(10,10,11,0.7)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--bone)",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.6)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(179,0,27,0.35)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,205,210,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                }}
              >
                View Work
              </a>
              <a
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px 48px",
                  borderRadius: "4px",
                  border: "1px solid rgba(201,205,210,0.2)",
                  background: "transparent",
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--steel)",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,205,210,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,205,210,0.2)";
                  (e.currentTarget as HTMLElement).style.color = "var(--steel)";
                }}
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex flex-col items-center"
        style={{ transform: "translateX(-50%)", zIndex: 10, gap: "8px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gunmetal)", letterSpacing: "0.3em" }}>
          SCROLL
        </span>
        <motion.div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, var(--gunmetal), transparent)",
          }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
