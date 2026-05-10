"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";

const HaloBackground = dynamic(() => import("@/components/3d/HaloBackground"), {
  ssr: false,
});
import { ease, fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";
import { LisninSection } from "./sections/LisninSection";
import { SolMusicSection } from "./sections/SolMusicSection";
import { WracketSection } from "./sections/WracketSection";
import { CubeMusicSection } from "./sections/CubeMusicSection";
import { LonelyListenersSection } from "./sections/LonelyListenersSection";
import { GetRektSection } from "./sections/GetRektSection";
import { HighCutSection } from "./sections/HighCutSection";
import { OshawaMusicSection } from "./sections/OshawaMusicSection";
import { CanadianMusicWeekSection } from "./sections/CanadianMusicWeekSection";
import { CurtainCallInline } from "./CurtainCallInline";

const workNav = [
  { label: "Lisnin", href: "#lisnin" },
  { label: "Sol Music", href: "#sol-music-ltd" },
  { label: "Wracket", href: "#wracket-music" },
  { label: "Cube Music", href: "#cube-music-agency" },
  { label: "Lonely Listeners", href: "#lonely-listeners-club" },
  { label: "Get Rekt", href: "#get-rekt-records" },
  { label: "High Cut", href: "#high-cut-records" },
  { label: "Oshawa", href: "#oshawa-music-week" },
  { label: "CMW", href: "#canadian-music-week" },
  { label: "Curtain Call", href: "#curtain-call-digital" },
];

export function WorkIndex() {
  const prefersReduced = useReducedMotion();

  return (
    <div style={{ background: "var(--jet)", minHeight: "100vh", width: "100%" }}>
      {/* Work header */}
      <div
        style={{
          position: "relative",
          padding: "96px 0 80px",
          borderBottom: "1px solid rgba(201,205,210,0.06)",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Animated halo behind header */}
        {!prefersReduced && <HaloBackground opacity={0.3} />}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at top center, rgba(179,0,27,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(201,205,210,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,205,210,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
          <motion.div
            variants={staggerContainer}
            initial={prefersReduced ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}
            >
              <div style={{ height: "2px", width: "60px", background: "linear-gradient(90deg, transparent, var(--blood))" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--blood)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                The portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(80px, 14vw, 160px)",
                color: "var(--bone)",
                lineHeight: 1,
                marginBottom: "24px",
              }}
            >
              WORK
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{ color: "var(--ash)", fontSize: "18px", maxWidth: "560px", lineHeight: 1.6, marginBottom: "40px" }}
            >
              10 years in the music industry. A handful of companies. Millions of streams.
              A few things that didn't work, and a few that did.
            </motion.p>

            {/* Quick nav */}
            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {workNav.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "8px 16px",
                    border: "1px solid rgba(201,205,210,0.1)",
                    borderRadius: "100px",
                    color: "var(--steel)",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "var(--chrome)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,205,210,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "var(--steel)";
                  }}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section A divider */}
      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "48px 40px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <motion.div
            initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, ease }}
            style={{ height: "1px", flex: 1, background: "rgba(201,205,210,0.06)", transformOrigin: "left center" }}
          />
          <motion.span
            variants={fadeUp}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gunmetal)", letterSpacing: "0.3em", textTransform: "uppercase", whiteSpace: "nowrap" }}
          >
            Section A — Music Industry
          </motion.span>
          <motion.div
            initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, ease }}
            style={{ height: "1px", flex: 1, background: "rgba(201,205,210,0.06)", transformOrigin: "right center" }}
          />
        </div>
      </div>

      {/* Music project sections */}
      <LisninSection />
      <SolMusicSection odd />
      <WracketSection />
      <CubeMusicSection odd />
      <LonelyListenersSection />
      <GetRektSection odd />
      <HighCutSection />
      <OshawaMusicSection odd />
      <CanadianMusicWeekSection />

      {/* Section B divider */}
      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "48px 40px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <motion.div
            initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, ease }}
            style={{ height: "1px", flex: 1, background: "rgba(201,205,210,0.06)", transformOrigin: "left center" }}
          />
          <motion.span
            variants={fadeUp}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gunmetal)", letterSpacing: "0.3em", textTransform: "uppercase", whiteSpace: "nowrap" }}
          >
            Section B — Curtain Call Digital
          </motion.span>
          <motion.div
            initial={prefersReduced ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, ease }}
            style={{ height: "1px", flex: 1, background: "rgba(201,205,210,0.06)", transformOrigin: "right center" }}
          />
        </div>
      </div>

      {/* Curtain Call inline (no separate page) */}
      <CurtainCallInline />
    </div>
  );
}
