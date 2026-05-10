"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";

interface SubProjectProps {
  title: string;
  type: string;
  url?: string;
  description: string;
  features?: string[];
  image?: string;
  comingSoon?: boolean;
}

function SubProjectCard({ title, type, url, description, features, image, comingSoon }: SubProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.4)" }}
      transition={{ type: "spring", duration: 0.3, bounce: 0 }}
      style={{
        border: "1px solid rgba(201,205,210,0.12)",
        borderRadius: "2px",
        overflow: "hidden",
        background: "rgba(10,10,11,0.4)",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          padding: "10px 16px",
          background: "#0d0d12",
          borderBottom: "1px solid rgba(201,205,210,0.08)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(179,0,27,0.5)" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(58,61,66,0.8)" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(58,61,66,0.8)" }} />
        </div>
        <div
          style={{
            flex: 1,
            background: "rgba(10,10,11,0.6)",
            borderRadius: "3px",
            padding: "4px 12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gunmetal)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--gunmetal)", letterSpacing: "0.15em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {url ?? "— coming soon —"}
          </span>
        </div>
      </div>

      {/* Preview area */}
      <div style={{ position: "relative", aspectRatio: "16/9", background: "#050508", overflow: "hidden" }}>
        {image ? (
          <>
            <Image src={image} alt={title} fill className="object-cover" sizes="640px" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, transparent 50%, rgba(179,0,27,0.15) 100%)" }} />
          </>
        ) : comingSoon ? (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                border: "1px solid rgba(201,205,210,0.1)",
                borderRadius: "16px",
                width: "80px",
                height: "148px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: "10px", left: "50%", transform: "translateX(-50%)", width: "20px", height: "3px", borderRadius: "2px", background: "var(--gunmetal)" }} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--gunmetal)" }}>
                {title.split(" ")[0][0]}{title.split(" ")[1]?.[0]}
              </span>
              <div style={{ position: "absolute", bottom: "8px", left: "50%", transform: "translateX(-50%)", width: "12px", height: "12px", borderRadius: "50%", border: "1px solid var(--gunmetal)" }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--gunmetal)", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              COMING SOON
            </span>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--gunmetal)" }}>
              {title.split(" ").map(w => w[0]).join("").slice(0, 3)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--chrome)", fontWeight: 600 }}>
            {title}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--gunmetal)",
              border: "1px solid rgba(58,61,66,0.5)",
              padding: "2px 10px",
              borderRadius: "100px",
              letterSpacing: "0.15em",
            }}
          >
            {type}
          </span>
        </div>
        <p style={{ fontSize: "14px", color: "var(--ash)", lineHeight: 1.65, marginBottom: features ? "16px" : "0" }}>
          {description}
        </p>
        {features && (
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
            {features.map((f) => (
              <li key={f} style={{ display: "flex", gap: "8px", fontSize: "13px", color: "var(--steel)" }}>
                <span style={{ color: "var(--blood)", flexShrink: 0 }}>▸</span>
                {f}
              </li>
            ))}
          </ul>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--blood)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--hot)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--blood)")}
          >
            VISIT SITE →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function CurtainCallInline() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="curtain-call-digital"
      style={{ position: "relative", padding: "80px 0 96px", borderTop: "1px solid rgba(201,205,210,0.06)", width: "100%" }}
    >
      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
          style={{ marginBottom: "56px" }}
        >
          <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ height: "2px", width: "32px", background: "var(--blood)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--blood)", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              Co-founder · 2026–Present
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--bone)", lineHeight: 1, marginBottom: "16px" }}
          >
            CURTAIN CALL DIGITAL
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: "var(--ash)", fontSize: "16px", maxWidth: "640px", lineHeight: 1.7 }}>
            The small agency I run with a friend on the side. Work outside the music industry — friends, passion projects, and clients in spaces I'm curious about. Streetwear, resale tools, gig-economy apps.
          </motion.p>
        </motion.div>

        {/* 2×2 grid */}
        <motion.div
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}
          className="curtain-call-grid"
          variants={staggerContainer}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div variants={fadeUp}>
            <SubProjectCard
              title="Black On Both Sides Music"
              type="Music brand website"
              url="https://www.blackonbothsidesmusic.com"
              image="/work/curtain-call/blackonbothsides.png"
              description="A custom website built for the Black On Both Sides Music brand. Atmospheric front end, smooth user flow, and a design that matches the project's identity."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SubProjectCard
              title="Yellow Tape Universe"
              type="Shopify streetwear store"
              url="https://yellowtapestore.com/"
              image="/work/curtain-call/yellowtape.png"
              description="A Shopify-based clothing and merch store for streetwear brand Yellow Tape Universe. Custom theme, product photography integration, optimized checkout flow."
              features={[
                "Custom Shopify theme",
                "Product photography integration",
                "Checkout flow optimization",
              ]}
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SubProjectCard
              title="Lucky Duck Thrift"
              type="Mobile-first resale app"
              description="A mobile-first web app for thrift store resale. Scan clothing tags via OCR, auto-format for Square POS, export to Google Sheets, and check resale prices across eBay, Mercari, and Poshmark."
              features={[
                "OCR tag scanning via mobile camera",
                "Auto-format for Square POS",
                "One-click export to Google Sheets",
                "Real-time pricing: eBay, Mercari, Poshmark",
              ]}
              comingSoon
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SubProjectCard
              title="Flux Gigs"
              type="Map-based gig discovery"
              description="A mobile-first, map-based job discovery platform. Workers find and claim local shifts visually by area and vibe — no resume needed. Real-time aggregation across gig APIs."
              features={[
                "Map-based shift discovery",
                "Vibe-first filtering",
                "Real-time aggregation across APIs",
                "One-tap claim flow",
              ]}
              comingSoon
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .curtain-call-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
