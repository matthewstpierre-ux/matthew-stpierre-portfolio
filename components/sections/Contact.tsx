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
  { label: "Instagram", handle: "@lonelymatts", href: "https://www.instagram.com/lonelymatts/" },
  { label: "Twitter / X", handle: "@lonelymatts", href: "https://x.com/lonelymatts" },
  { label: "LinkedIn", handle: "matthew-stpierre", href: "https://www.linkedin.com/in/matthew-stpierre/" },
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
      style={{ position: "relative", padding: "96px 0 128px", width: "100%" }}
      aria-label="Contact"
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center bottom, rgba(179,0,27,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered container */}
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <motion.div
          variants={staggerContainer}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Label */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginBottom: "32px" }}
          >
            <div style={{ height: "2px", width: "80px", background: "linear-gradient(90deg, transparent, var(--blood))" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "var(--blood)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              Get in touch
            </span>
            <div style={{ height: "2px", width: "80px", background: "linear-gradient(90deg, var(--blood), transparent)" }} />
          </motion.div>

          {/* Heart */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}
            onHoverStart={() => setHeartHovered(true)}
            onHoverEnd={() => setHeartHovered(false)}
          >
            <div style={{ width: "180px", height: "180px" }}>
              <OrganicMetalHeart hovered={heartHovered} className="w-full h-full" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 8vw, 96px)",
              color: "var(--bone)",
              lineHeight: 1,
              marginBottom: "48px",
            }}
          >
            LET'S TALK
          </motion.h2>

          {/* Email card */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                display: "inline-block",
                border: "1px solid rgba(201,205,210,0.15)",
                background: "rgba(10,10,11,0.6)",
                backdropFilter: "blur(8px)",
                borderRadius: "4px",
                padding: "32px 40px",
              }}
            >
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--steel)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>
                Email
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="chrome-link"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(14px, 2.5vw, 22px)", color: "var(--bone)", textDecoration: "none", transition: "color 0.2s" }}
                >
                  {EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    border: "1px solid rgba(201,205,210,0.2)",
                    borderRadius: "2px",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.5)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(201,205,210,0.2)")}
                >
                  {copied ? (
                    <Check size={14} color="var(--blood)" />
                  ) : (
                    <Copy size={14} color="var(--steel)" />
                  )}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--steel)", letterSpacing: "0.2em" }}>
                    {copied ? "COPIED" : "COPY"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Socials — hidden on mobile (footer handles it there) */}
          <motion.div
            variants={fadeUp}
            className="contact-socials"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "48px", marginTop: "56px" }}
          >
            {socials.map(({ label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}: ${handle}`}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", textDecoration: "none" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).querySelectorAll("span").forEach((s: HTMLElement) => {
                    if (s.dataset.role === "label") s.style.color = "var(--steel)";
                    if (s.dataset.role === "handle") s.style.color = "var(--chrome)";
                  });
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).querySelectorAll("span").forEach((s: HTMLElement) => {
                    if (s.dataset.role === "label") s.style.color = "var(--gunmetal)";
                    if (s.dataset.role === "handle") s.style.color = "var(--steel)";
                  });
                }}
              >
                <span data-role="label" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gunmetal)", letterSpacing: "0.3em", textTransform: "uppercase", transition: "color 0.2s" }}>
                  {label}
                </span>
                <span data-role="handle" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--steel)", transition: "color 0.2s" }}>
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
