"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import { Copy, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";

const OrganicMetalHeart = dynamic(
  () => import("@/components/3d/OrganicMetalHeart"),
  { ssr: false }
);

const EMAIL = "matthew.stpierre@wracketmusic.com";

const socials = [
  {
    label: "Instagram",
    handle: "@lonelymatts",
    href: "https://www.instagram.com/lonelymatts/",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    handle: "@lonelymatts",
    href: "https://x.com/lonelymatts",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "matthew-stpierre",
    href: "https://www.linkedin.com/in/matthew-stpierre/",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  const prefersReduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [heartHovered, setHeartHovered] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="Contact"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(179,0,27,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Section label */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B3001B]" />
            <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.3em] uppercase">
              Get in touch
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#B3001B]" />
          </motion.div>

          {/* Heart 3D */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-6"
            onHoverStart={() => setHeartHovered(true)}
            onHoverEnd={() => setHeartHovered(false)}
          >
            <div className="w-32 h-32 md:w-40 md:h-40">
              <OrganicMetalHeart hovered={heartHovered} className="w-full h-full" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-display text-6xl md:text-7xl lg:text-8xl text-[#EAEAEA] leading-none mb-8"
          >
            LET'S TALK
          </motion.h2>

          {/* Email card */}
          <motion.div variants={fadeUp}>
            <div className="inline-block border border-[#C9CDD2]/15 bg-[#0A0A0B]/60 backdrop-blur-sm rounded-sm p-6 md:p-8">
              <p className="font-mono text-[10px] text-[#7A7E85] tracking-widest mb-3 uppercase">
                Email
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-mono text-lg md:text-2xl text-[#EAEAEA] hover:text-white transition-colors chrome-link"
                >
                  {EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="flex items-center gap-2 px-3 py-1.5 border border-[#C9CDD2]/20 rounded-sm hover:border-[#B3001B]/50 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check size={14} className="text-[#B3001B]" />
                  ) : (
                    <Copy size={14} className="text-[#7A7E85]" />
                  )}
                  <span className="font-mono text-[10px] text-[#7A7E85] tracking-widest">
                    {copied ? "COPIED" : "COPY"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-8 mt-12"
          >
            {socials.map(({ label, handle, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}: ${handle}`}
                className="group flex flex-col items-center gap-2"
              >
                <span className="text-[#7A7E85] group-hover:text-[#C9CDD2] transition-colors">
                  {svg}
                </span>
                <span className="font-mono text-[10px] text-[#3A3D42] group-hover:text-[#7A7E85] transition-colors tracking-widest">
                  {handle}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
