"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface LonelyListenersSectionProps {
  odd?: boolean;
}

export function LonelyListenersSection({ odd }: LonelyListenersSectionProps) {
  return (
    <ProjectSection
      id="lonely-listeners-club"
      name="Lonely Listeners Club"
      slug="lonely-listeners-club"
      tagline="A community of music fans with skin in the game."
      role="Founder · 2022–Present"
      heroImage="/images/llclogo.jpg"
      heroImageAlt="Lonely Listeners Club logo"
      imageObjectFit="contain"
      odd={odd}
      metrics={[
        { value: "~1,000", label: "Active members" },
        { value: "2,777", label: "Digital collectables minted" },
        { value: "4+ years", label: "Continuously running" },
      ]}
      links={[
        { label: "Community Story →", href: "https://youtu.be/eK2hEM6H9U8" },
      ]}
      copy={
        <p>
          The Lonely Listeners Club is a community I started in 2022 — a private,
          exclusive group of about 1,000 holders across 2,777 digital collectables.
          It grew out of Sol Music as a hub for music fans and indie artists who
          wanted to be more than a passive audience. Members get early access to
          projects I run, behind-the-scenes context on artists I'm working with, and
          a vested stake in the platforms I'm building. Four years in, it's still
          active — and it became the foundation for what eventually grew into Lisnin.
        </p>
      }
    >
      {/* Website launch note */}
      <div className="mt-4 px-4 py-3 border border-[#B3001B]/20 rounded-sm bg-[#B3001B]/05">
        <span className="font-mono text-[11px] text-[#B3001B] tracking-widest uppercase">
          New lonelylisteners.com launching Summer 2026
        </span>
      </div>

      {/* Logo evolution */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="border border-[#C9CDD2]/10 rounded-sm overflow-hidden aspect-square relative">
          <img
            src="/images/llcclub.png"
            alt="Lonely Listeners Club — original brand"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-[#0A0A0B]/80">
            <span className="font-mono text-[9px] text-[#7A7E85] tracking-widest">ORIGINAL</span>
          </div>
        </div>
        <div className="border border-[#C9CDD2]/10 rounded-sm overflow-hidden aspect-square relative">
          <img
            src="/images/llclogo.jpg"
            alt="Lonely Listeners Club — current brand"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-[#0A0A0B]/80">
            <span className="font-mono text-[9px] text-[#B3001B] tracking-widest">TODAY</span>
          </div>
        </div>
      </div>
      <p className="mt-2 font-mono text-[10px] text-[#7A7E85] text-center">
        From the original brand to today — four years in.
      </p>
    </ProjectSection>
  );
}
