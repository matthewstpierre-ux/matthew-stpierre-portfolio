"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportOptions } from "@/lib/motion";
import { ChromeButton } from "@/components/ui/ChromeButton";

interface SitePreviewCardProps {
  title: string;
  type: string;
  url?: string;
  description: string;
  features?: string[];
  comingSoon?: boolean;
  isMockup?: boolean;
}

function SitePreviewCard({
  title,
  type,
  url,
  description,
  features,
  comingSoon,
  isMockup,
}: SitePreviewCardProps) {
  return (
    <div className="border border-[#C9CDD2]/15 rounded-sm overflow-hidden">
      {/* Browser chrome bar */}
      <div className="px-4 py-2.5 bg-[#111115] border-b border-[#C9CDD2]/10 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#B3001B]/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3D42]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3D42]" />
        </div>
        <div className="flex-1 bg-[#0A0A0B] rounded-sm px-3 py-1 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#3A3D42]" />
          <span className="font-mono text-[10px] text-[#3A3D42] tracking-widest truncate">
            {url ?? "— coming soon —"}
          </span>
        </div>
      </div>

      {/* Preview area */}
      <div className="aspect-video bg-[#0A0A0B] flex items-center justify-center relative overflow-hidden">
        {comingSoon ? (
          <div className="text-center">
            <div className="font-mono text-[10px] text-[#3A3D42] tracking-widest mb-2">
              CONCEPT / COMING SOON
            </div>
            {/* Phone mockup for mobile apps */}
            <div className="border border-[#C9CDD2]/10 rounded-2xl w-24 h-44 mx-auto flex items-center justify-center">
              <div className="font-display text-[#3A3D42] text-xs">
                {title.split(" ")[0].toUpperCase()}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div
              className="font-display text-4xl"
              style={{
                background: "linear-gradient(180deg, #C9CDD2 0%, #7A7E85 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title.split(" ").map((w) => w[0]).join("")}
            </div>
            <div className="font-mono text-[10px] text-[#3A3D42] mt-2 tracking-widest">
              {type}
            </div>
          </div>
        )}
      </div>

      {/* Info footer */}
      <div className="p-5 border-t border-[#C9CDD2]/08">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-mono text-xs text-[#C9CDD2] font-medium">
            {title}
          </span>
          <span className="font-mono text-[10px] text-[#3A3D42] border border-[#3A3D42]/40 px-2 py-0.5 rounded-full">
            {type}
          </span>
        </div>
        <p className="text-sm text-[#9A9A9A] mb-4 leading-relaxed">{description}</p>
        {features && (
          <ul className="space-y-1 mb-4">
            {features.map((f) => (
              <li key={f} className="flex gap-2 text-xs text-[#7A7E85]">
                <span className="text-[#B3001B]">▸</span>
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
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#B3001B] hover:text-[#E10A1F] transition-colors"
          >
            VISIT SITE →
          </a>
        )}
      </div>
    </div>
  );
}

export function CurtainCallHub() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="bg-[#0A0A0B] min-h-screen">
      {/* Header */}
      <div className="relative py-24 md:py-32 border-b border-[#C9CDD2]/06 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top center, rgba(179,0,27,0.08) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial={prefersReduced ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <Link
                href="/work"
                className="font-mono text-[10px] text-[#7A7E85] hover:text-[#C9CDD2] tracking-widest transition-colors"
              >
                ← BACK TO WORK
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#B3001B]" />
              <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.3em] uppercase">
                Co-founder · 2026–Present
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-6xl md:text-8xl text-[#EAEAEA] leading-none mb-4"
            >
              CURTAIN CALL
              <br />
              DIGITAL
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#9A9A9A] text-lg max-w-xl mb-8"
            >
              Side projects, friends' projects, and the things I build when I'm not
              in music.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#7A7E85] max-w-2xl">
              Curtain Call Digital is the small agency I run with a friend on the
              side. It's where I take work outside the music industry — friends,
              passion projects, and clients in spaces I'm curious about. Streetwear,
              resale tools, gig-economy apps. Sites and software for people I want
              to build with.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div variants={fadeUp}>
            <SitePreviewCard
              title="Black On Both Sides Music"
              type="Music brand website"
              url="https://www.blackonbothsidesmusic.com"
              description="A custom website built for the Black On Both Sides Music brand. Designed to showcase the project's identity, content, and offerings with a clean, atmospheric front end and a smooth user flow."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SitePreviewCard
              title="Yellow Tape Universe"
              type="Shopify streetwear store"
              url="https://yellowtapestore.com/"
              description="A Shopify-based clothing and merchandise store for streetwear brand Yellow Tape Universe. Custom theme work, integrated product photography, and an optimized checkout flow built to keep cart abandonment low and brand identity high."
              features={[
                "Custom Shopify theme",
                "Product photography integration",
                "Checkout flow optimization",
              ]}
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SitePreviewCard
              title="Lucky Duck Thrift"
              type="Mobile-first resale app"
              description="A mobile-first web app for thrift store resale operations. Scan clothing tags via OCR, auto-format items for Square POS, copy directly to Google Sheets, and check resale prices across eBay, Mercari, and Poshmark."
              features={[
                "OCR tag scanning via mobile camera",
                "Auto-format for Square POS",
                "One-click export to Google Sheets",
                "Real-time resale prices: eBay, Mercari, Poshmark",
                "Optional Shopify upload pipeline",
              ]}
              comingSoon
              isMockup
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <SitePreviewCard
              title="Flux Gigs"
              type="Map-based gig discovery"
              description="A mobile-first, map-based job discovery platform for the gig economy. Workers find and claim local shifts visually by area and vibe — no resume needed. Dark-mode glassmorphic UI with real-time job aggregation across multiple APIs."
              features={[
                "Map-based shift discovery",
                "Vibe-first filtering",
                "Real-time aggregation across gig APIs",
                "One-tap claim flow",
                "Dark-mode glassmorphic interface",
              ]}
              comingSoon
              isMockup
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
