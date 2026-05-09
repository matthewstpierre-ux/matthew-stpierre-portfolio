"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportOptions } from "@/lib/motion";

const subProjects = [
  { name: "Black On Both Sides Music", type: "Music brand website" },
  { name: "Yellow Tape Universe", type: "Shopify streetwear store" },
  { name: "Lucky Duck Thrift", type: "Mobile-first resale app" },
  { name: "Flux Gigs", type: "Map-based gig discovery" },
];

export function CurtainCallCard() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="curtain-call-digital"
      className="relative py-20 md:py-28 border-t border-[#C9CDD2]/06"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="border border-[#C9CDD2]/15 rounded-sm overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-[#C9CDD2]/10 bg-[#111115]/60">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-[#B3001B]" />
                <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.25em] uppercase">
                  Co-founder · 2026–Present
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#EAEAEA] leading-none mb-2">
                CURTAIN CALL DIGITAL
              </h2>
              <p className="font-mono text-sm text-[#7A7E85]">
                Side projects, friends' projects, and the things I build when
                I'm not in music.
              </p>
            </div>

            {/* Body */}
            <div className="p-8">
              <p className="text-[#9A9A9A] mb-8 max-w-xl">
                Curtain Call Digital is the small agency I run with a friend on
                the side. It's where I take work outside the music industry —
                friends, passion projects, and clients in spaces I'm curious
                about. Streetwear, resale tools, gig-economy apps. Sites and
                software for people I want to build with.
              </p>

              {/* Sub-project preview grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {subProjects.map((p) => (
                  <div
                    key={p.name}
                    className="border border-[#C9CDD2]/08 rounded-sm p-4 bg-[#0A0A0B]/40"
                  >
                    <div className="font-mono text-xs text-[#C9CDD2] mb-1">
                      {p.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#3A3D42] tracking-widest">
                      {p.type}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/work/curtain-call-digital"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#B3001B] hover:text-[#E10A1F] transition-colors border border-[#B3001B]/30 hover:border-[#B3001B] rounded-sm px-5 py-2.5"
              >
                SEE ALL 4 PROJECTS →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
