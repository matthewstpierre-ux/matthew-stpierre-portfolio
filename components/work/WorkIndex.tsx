"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";
import { LisninSection } from "./sections/LisninSection";
import { SolMusicSection } from "./sections/SolMusicSection";
import { WracketSection } from "./sections/WracketSection";
import { CubeMusicSection } from "./sections/CubeMusicSection";
import { LonelyListenersSection } from "./sections/LonelyListenersSection";
import { GetRektSection } from "./sections/GetRektSection";
import { HighCutSection } from "./sections/HighCutSection";
import { OshawaMusicSection } from "./sections/OshawaMusicSection";
import { CanadianMusicWeekSection } from "./sections/CanadianMusicWeekSection";
import { CurtainCallCard } from "./CurtainCallCard";

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
    <div className="bg-[#0A0A0B] min-h-screen">
      {/* Work header */}
      <div className="relative overflow-hidden py-24 md:py-32 border-b border-[#C9CDD2]/06">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, rgba(179,0,27,0.1) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,205,210,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,205,210,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial={prefersReduced ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B3001B]" />
              <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.3em] uppercase">
                The portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-7xl md:text-9xl text-[#EAEAEA] leading-none mb-6"
            >
              WORK
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#9A9A9A] text-lg max-w-xl"
            >
              10 years in the music industry. A handful of companies. Millions
              of streams. A few things that didn't work, and a few that did.
            </motion.p>
          </motion.div>

          {/* Quick nav pills */}
          <motion.div
            variants={fadeUp}
            initial={prefersReduced ? "visible" : "hidden"}
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {workNav.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[10px] tracking-widest px-3 py-1.5 border border-[#C9CDD2]/10 rounded-full text-[#7A7E85] hover:border-[#B3001B]/40 hover:text-[#C9CDD2] transition-colors"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Music Industry label */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          variants={fadeUp}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px flex-1 bg-[#C9CDD2]/06" />
          <span className="font-mono text-[11px] text-[#3A3D42] tracking-[0.3em] uppercase">
            Section A — Music Industry
          </span>
          <div className="h-px flex-1 bg-[#C9CDD2]/06" />
        </motion.div>
      </div>

      {/* Music sections */}
      <LisninSection />
      <SolMusicSection odd />
      <WracketSection />
      <CubeMusicSection odd />
      <LonelyListenersSection />
      <GetRektSection odd />
      <HighCutSection />
      <OshawaMusicSection odd />
      <CanadianMusicWeekSection />

      {/* Curtain Call divider */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          variants={fadeUp}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px flex-1 bg-[#C9CDD2]/06" />
          <span className="font-mono text-[11px] text-[#3A3D42] tracking-[0.3em] uppercase">
            Section B — Curtain Call Digital
          </span>
          <div className="h-px flex-1 bg-[#C9CDD2]/06" />
        </motion.div>
      </div>

      <CurtainCallCard />
    </div>
  );
}
