"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface SolMusicSectionProps {
  odd?: boolean;
}

export function SolMusicSection({ odd }: SolMusicSectionProps) {
  return (
    <ProjectSection
      id="sol-music-ltd"
      name="Sol Music Ltd"
      slug="sol-music-ltd"
      tagline="Web3 launchpad and community for independent artists."
      role="Founder · 2021–2024"
      heroImage="/images/solmusicltd.webp"
      heroImageAlt="Sol Music Ltd"
      odd={odd}
      metrics={[
        { value: "$120K+", label: "Raised for artists" },
        { value: "78K", label: "TikTok community" },
        { value: "13K / 19K", label: "Twitter / Discord" },
      ]}
      links={[
        {
          label: "J-Minu$ Project Teaser →",
          href: "https://youtu.be/cUHwB58nLL0",
        },
        {
          label: "Earkitz Pitch Deck",
          href: "/pdfs/EarkitzPitchDeck.pdf",
        },
      ]}
      copy={
        <p>
          Sol Music Ltd was a crowdfunding and investment platform connecting indie
          musicians with retail investors via web3. I led three major projects from
          end to end, raising close to six figures for independent artists. We grew
          the community to ~78K on TikTok, 19K on Discord, and 13K on Twitter,
          working with developers, community managers, and creative teams as a unit.
        </p>
      }
    >
      {/* Sub-projects */}
      <div className="mt-6 space-y-4">
        <div className="border border-[#C9CDD2]/10 rounded-sm overflow-hidden">
          <div className="px-4 py-2 bg-[#111115] border-b border-[#C9CDD2]/08 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#B3001B] tracking-widest">J-MINU$ COLLECTION</span>
          </div>
          <div className="p-4 text-sm text-[#9A9A9A] leading-relaxed">
            First Sol Music release, November 2021. Goal: $30K to fractionalize 50%
            of the album's royalties. We grossed $45K on initial sale and another
            $6K on $60K of secondary trading volume. Floor price held above 3x
            mint. The artist's monthly listeners went from 8K to 30K.
          </div>
        </div>

        <div className="border border-[#C9CDD2]/10 rounded-sm overflow-hidden">
          <div className="px-4 py-2 bg-[#111115] border-b border-[#C9CDD2]/08 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#B3001B] tracking-widest">ANDY POLK COLLECTION</span>
          </div>
          <div className="p-4 text-sm text-[#9A9A9A] leading-relaxed">
            Hyperpop artist with 5M+ streams. Goal: $25K to fractionalize 50% of
            the{" "}
            <em>Phantom</em> album. We invented the "virtual global street team" —
            holders collected QR-code stickers and canvassed cities to grow Andy's
            reach. Initial sale grossed $53K, secondary volume hit $22.5K.
          </div>
        </div>

        <div className="border border-[#C9CDD2]/10 rounded-sm overflow-hidden">
          <div className="px-4 py-2 bg-[#111115] border-b border-[#C9CDD2]/08 flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#B3001B] tracking-widest">EARKITZ</span>
          </div>
          <div className="p-4 text-sm text-[#9A9A9A] leading-relaxed">
            Web-based press kits for indie artists. Originally an internal Sol Music
            tool, Earkitz became the standard format I used for press contacts and
            is now a feature inside Lisnin.
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-[#7A7E85]">
        The LLC community became its own project →{" "}
        <a href="#lonely-listeners-club" className="chrome-link text-[#C9CDD2]">
          See Lonely Listeners Club
        </a>
      </p>
    </ProjectSection>
  );
}
