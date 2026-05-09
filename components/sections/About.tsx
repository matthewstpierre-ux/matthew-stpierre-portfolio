"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";

const bio = [
  {
    id: "p1",
    text: `I grew up in a small town in Northern Ontario and built my career in the music business from the ground up. I started my first company at 18, running a recording studio out of my hometown. By 19, I'd reconnected with my estranged brother and discovered he was a serious talent. We started Get Rekt Records together, learning the business in real time — releases, marketing, merch drops, live events. In 2018, we put on an all-local hip-hop showcase in Sault Ste. Marie that sold over 200 tickets, one of the most successful indie shows in the town's history.`,
  },
  {
    id: "p2",
    text: `While studying Marketing & Advertising at Canadore College, I started landing sync placements for artists with channels like Patrick CC, No Jumper, and GaryVee. In 2019 I met Everton Lewis Jr., then lead music supervisor at Vice Canada. We hit it off immediately, and he took me on as his mentee. We pitched a label services division for Vice called Cube Music Agency, but Vice Canada shut its doors during the pandemic. Cube Music kept going. Over the next four years we released dozens of indie albums, racking up millions of streams.`,
  },
  {
    id: "p3",
    links: [
      { text: "Andy Polk", href: "https://open.spotify.com/artist/0pjzVvlSShyf6ZiWa7ICzw" },
      { text: "Ricky James", href: "https://open.spotify.com/artist/2mddthoxlzJ8mx06iAENrC" },
      { text: "J-Minu$", href: "https://open.spotify.com/artist/6CHWldbFpG94AkEQTavyx1" },
    ],
    text: `While running Cube Music, I went back to school for Music Business Management at Durham College. I got to develop artists like @@Andy Polk@@, @@Ricky James@@, and @@J-Minu$@@. I co-wrote J-Minu$'s debut album, Maybe We Got It All Wrong — it crossed two million streams.`,
  },
  {
    id: "p4",
    links: [
      { text: "Lonely Listeners Club", href: "https://www.lonelylisteners.com/" },
    ],
    text: `In late 2021, I jumped into web3 just as music NFTs were heating up. A J-Minu$ collection went viral on TikTok (2M+ views) and raised tens of thousands for the artist. I founded Sol Music Ltd, a web3 music launchpad, and ran collections for three more artists. The community I built around it became the @@Lonely Listeners Club@@ — about 1,000 holders across 2,777 collectables, still active today.`,
  },
  {
    id: "p5",
    links: [
      { text: "Wracket Music", href: "https://www.wracketmusic.com/" },
      { text: "Thanksgiving", href: "https://youtu.be/KbU50SdL8zA" },
    ],
    text: `I also help drive business development at @@Wracket Music@@ alongside Everton, where I've contributed to projects including Apple's 2022 product launch, the Eli Roth film @@Thanksgiving@@, and various spots on Prime Video and MTV.`,
  },
  {
    id: "p6",
    links: [
      { text: "Canadian Music Week", href: "https://cmw.net/speakers/matt-st-pierre/" },
      { text: "Oshawa Music Week", href: "https://www.oshawamusicweek.ca/" },
      { text: "High Cut Records", href: "https://www.instagram.com/highcutrecords/" },
    ],
    text: `I graduated Durham in 2022 and worked on volunteer and non-profit projects along the way: @@Canadian Music Week@@ (now Departure Festival), @@Oshawa Music Week@@, and @@High Cut Records@@.`,
  },
  {
    id: "p7",
    text: `In 2023 I built a music marketing tool called Lisnin that placed top 10 in the Solana Grizzlython hackathon out of 10,000 entrants. The product sat on the shelf while I worked on Earkitz — web-based press kits that became a quiet standard in my network.`,
  },
  {
    id: "p8",
    text: `Then 2025 came, and I took a step back. Talking to thousands of artists over the years, I'd noticed they all had the same problem: reaching and monetizing fans is hard, and most just want to make a living from their music. I knew Lisnin could solve part of that. Earkitz solved another part. None of them was a complete answer. So I rebuilt the whole thing.`,
  },
  {
    id: "p9",
    links: [
      { text: "Lisnin Music Inc.", href: "https://www.lisnin.io" },
    ],
    text: `Today I'm CEO of @@Lisnin Music Inc.@@ — an end-to-end career platform for independent artists, covering distribution, publishing, websites, pitching, promotion, and monetization. We launched in closed beta in 2026 with co-founders Vinay Singh (CTO) and Everton Lewis Jr. (Partnerships).`,
  },
  {
    id: "p10",
    text: `Outside the music industry, I co-run Curtain Call Digital, a small agency for friends, passion projects, and clients in spaces I'm curious about — streetwear, resale tools, gig-economy apps.`,
  },
  {
    id: "p11",
    text: `I'm building Lisnin to incubate the next generation of artists. If that sounds like your world, let's talk.`,
  },
];

function renderParagraph(p: (typeof bio)[0]) {
  if (!p.links || p.links.length === 0) return <>{p.text}</>;

  let result = p.text;
  const parts: (string | ReactNode)[] = [];
  let remaining = result;

  p.links.forEach((link, i) => {
    const marker = `@@${link.text}@@`;
    const idx = remaining.indexOf(marker);
    if (idx === -1) return;
    parts.push(remaining.slice(0, idx));
    parts.push(
      <a
        key={i}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="chrome-link text-[#C9CDD2] hover:text-[#EAEAEA] transition-colors"
      >
        {link.text}
      </a>
    );
    remaining = remaining.slice(idx + marker.length);
  });
  parts.push(remaining);
  return <>{parts}</>;
}

export function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Red glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(179,0,27,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial={prefersReduced ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#B3001B]" />
            <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.3em] uppercase">
              The story
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-6xl md:text-7xl lg:text-8xl text-[#EAEAEA] leading-none"
          >
            ABOUT
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-start">
          {/* Left: headshot */}
          <motion.div
            variants={slideInLeft}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:sticky lg:top-24"
          >
            <div className="relative">
              {/* Chrome frame effect */}
              <div
                className="absolute -inset-[3px] rounded-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #C9CDD2 0%, #3A3D42 50%, #B3001B 100%)",
                  padding: "2px",
                }}
              >
                <div className="absolute inset-0 bg-[#0A0A0B] rounded-sm" />
              </div>
              <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                <Image
                  src="/images/matthew-headshot.png"
                  alt="Matthew St Pierre"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                {/* Red rim overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 60%, rgba(179,0,27,0.2) 100%)",
                  }}
                />
              </div>

              {/* Name card below photo */}
              <div className="mt-4 border border-[#C9CDD2]/15 bg-[#0A0A0B]/80 p-4 rounded-sm">
                <div className="font-mono text-[10px] text-[#7A7E85] tracking-[0.2em] mb-1">
                  MATTHEW ST PIERRE
                </div>
                <div className="font-mono text-[10px] text-[#B3001B] tracking-[0.15em]">
                  CEO, Lisnin.io
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: bio */}
          <div className="space-y-6">
            {bio.map((p, i) => (
              <motion.p
                key={p.id}
                variants={fadeUp}
                initial={prefersReduced ? "visible" : "hidden"}
                whileInView="visible"
                viewport={viewportOptions}
                className={`text-base md:text-lg leading-relaxed ${
                  i === bio.length - 1
                    ? "text-[#EAEAEA] font-medium"
                    : "text-[#9A9A9A]"
                }`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                {renderParagraph(p)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
