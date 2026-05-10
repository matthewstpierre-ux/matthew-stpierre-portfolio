"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, viewportOptions } from "@/lib/motion";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface ProjectSectionProps {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  role: string;
  heroImage?: string;
  heroImageAlt?: string;
  imageObjectFit?: "cover" | "contain";
  copy: ReactNode;
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  children?: ReactNode;
  odd?: boolean;
}

export function MetricRow({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.min(metrics.length, 3)}, 1fr)`,
        gap: "12px",
        margin: "32px 0",
      }}
    >
      {metrics.map((m, i) => (
        <div
          key={i}
          style={{
            border: "1px solid rgba(201,205,210,0.1)",
            background: "rgba(10,10,11,0.4)",
            padding: "20px 16px",
            borderRadius: "2px",
            textAlign: "center",
          }}
        >
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", color: "var(--blood)", fontWeight: 700, marginBottom: "6px" }}>
            {m.value}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--steel)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectSection({
  id,
  name,
  slug,
  tagline,
  role,
  heroImage,
  heroImageAlt,
  imageObjectFit = "cover",
  copy,
  metrics,
  links,
  children,
  odd = false,
}: ProjectSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id={slug}
      style={{
        position: "relative",
        padding: "80px 0 96px",
        borderTop: "1px solid rgba(201,205,210,0.06)",
        width: "100%",
      }}
      aria-label={name}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: odd ? "auto" : 0,
          right: odd ? 0 : "auto",
          width: "300px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(179,0,27,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="project-grid"
        >
          {/* Content side */}
          <motion.div
            variants={odd ? slideInRight : slideInLeft}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            style={{ order: odd ? 2 : 1 }}
          >
            {/* Header */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ height: "2px", width: "32px", background: "var(--blood)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--blood)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                  {role}
                </span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--bone)", lineHeight: 1, marginBottom: "12px" }}>
                {name.toUpperCase()}
              </h2>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--steel)", letterSpacing: "0.05em" }}>
                {tagline}
              </p>
            </div>

            {/* Mobile hero image */}
            {heroImage && (
              <div
                className="mobile-hero-img"
                style={{
                  display: "none",
                  position: "relative",
                  aspectRatio: "16/9",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "2px",
                  border: "1px solid rgba(201,205,210,0.1)",
                  marginBottom: "24px",
                }}
              >
                <Image src={heroImage} alt={heroImageAlt ?? name} fill className="object-cover" sizes="100vw" />
              </div>
            )}

            {/* Copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--ash)", fontSize: "16px", lineHeight: 1.75 }}>
              {copy}
            </div>

            {/* Metrics */}
            {metrics && <MetricRow metrics={metrics} />}

            {/* Children */}
            {children}

            {/* Links */}
            {links && links.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "24px" }}>
                {links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: link.primary ? "12px 28px" : "10px 22px",
                      borderRadius: link.primary ? "100px" : "2px",
                      border: `1px solid ${link.primary ? "rgba(201,205,210,0.35)" : "rgba(201,205,210,0.15)"}`,
                      background: "rgba(10,10,11,0.6)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: link.primary ? "var(--bone)" : "var(--steel)",
                      textDecoration: "none",
                      transition: "border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(179,0,27,0.5)";
                      (e.currentTarget as HTMLElement).style.color = "var(--bone)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(179,0,27,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = link.primary ? "rgba(201,205,210,0.35)" : "rgba(201,205,210,0.15)";
                      (e.currentTarget as HTMLElement).style.color = link.primary ? "var(--bone)" : "var(--steel)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image side */}
          <motion.div
            variants={odd ? slideInLeft : slideInRight}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            style={{ order: odd ? 1 : 2 }}
            className="desktop-hero-img"
          >
            {heroImage ? (
              <motion.div
                whileHover={prefersReduced ? {} : { scale: 1.02 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  borderRadius: "2px",
                  border: "1px solid rgba(201,205,210,0.1)",
                  background: imageObjectFit === "contain" ? "rgba(10,10,11,0.8)" : undefined,
                  cursor: "default",
                }}
              >
                <Image
                  src={heroImage}
                  alt={heroImageAlt ?? name}
                  fill
                  className={imageObjectFit === "contain" ? "object-contain p-6" : "object-cover"}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={90}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, transparent 60%, rgba(179,0,27,0.15) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            ) : (
              <div
                style={{
                  aspectRatio: "4/3",
                  border: "1px solid rgba(201,205,210,0.08)",
                  borderRadius: "2px",
                  background: "rgba(10,10,11,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", color: "var(--gunmetal)", fontSize: "13px", letterSpacing: "0.2em" }}>
                  {name.toUpperCase()}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .project-grid > div {
            order: unset !important;
          }
          .desktop-hero-img {
            display: none !important;
          }
          .mobile-hero-img {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
