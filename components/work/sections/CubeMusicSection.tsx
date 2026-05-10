"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface CubeMusicSectionProps {
  odd?: boolean;
}

export function CubeMusicSection({ odd }: CubeMusicSectionProps) {
  return (
    <ProjectSection
      id="cube-music-agency"
      name="Cube Music Agency"
      slug="cube-music-agency"
      tagline="Release strategy, paid media, radio pitching, influencer campaigns."
      role="Co-founder & Marketing Lead · 2020–2024"
      heroImage="/images/cubemusicagency.webp"
      heroImageAlt="Cube Music Agency"
      imageObjectFit="contain"
      odd={odd}
      metrics={[
        { value: "10M+", label: "Total streams across clients" },
        { value: "~1.5M", label: "Maybe We Got It All Wrong" },
        { value: "7", label: "Spotify editorial placements" },
      ]}
      links={[
        { label: "Free E-Book (PDF) →", href: "https://static1.squarespace.com/static/62443764d2ac16128559be57/t/6246236016d9ba234e08695a/1648763755036/Cube+Music+Agency+Ebook.pdf" },
        { label: "Press Feature →", href: "https://www.sootoday.com/arts-culture/music-builds-a-sense-of-community-when-we-need-it-the-most-2363114" },
      ]}
      copy={
        <>
          <p>
            Cube Music started as a label-services division pitched at Vice Media.
            When Vice Canada shut down during COVID, we pivoted into a standalone
            music marketing and PR agency for indie artists. Over four years we drove
            10M+ streams across client releases, specializing in release planning,
            content strategy, paid media (Meta, Google), radio and blog pitching, and
            influencer campaigns.
          </p>
        </>
      }
    >
      <div className="mt-6 space-y-4">
        {[
          {
            title: "J-Minu$ — Day By Day",
            stats: "700K+ Spotify streams",
            href: "https://open.spotify.com/track/264yTPCCN9Bziak4mFi2Wo",
            desc: "Paid digital + micro-influencer + blog placements. Throttled ad spend to trigger algorithmic playlist boosts (Discover Weekly, Release Radar).",
          },
          {
            title: "J-Minu$ — Another Love",
            stats: "500K streams",
            href: "https://open.spotify.com/track/7yMKfwBM343d6bBI3rYXnF",
            desc: "Pivoted toward niche hyperpop blogs and socials to grow new-listener segments before the album.",
          },
          {
            title: "J-Minu$ — Maybe We Got It All Wrong (album)",
            stats: "~1.5M streams",
            href: "https://open.spotify.com/album/4oyXCzW6i8EMsGCF0R9hC6",
            desc: "Co-wrote the album. Coverage in Elevator Mag, Promoting Sounds, Uranium Waves, Havoc Underground.",
          },
          {
            title: "Ricky James — Pissed In The Morning",
            stats: "300K+ streams",
            href: "https://open.spotify.com/track/37MEdkEWiuRRxzKmzzgaHb",
            desc: "Pre-launch tastemaker servicing, content strategy, music video promotion. Landed 7 Spotify editorial playlists. Single carried into Save Your Apologies — cover of Fresh Finds Rock.",
          },
        ].map((c) => (
          <div key={c.title} className="border border-[#C9CDD2]/10 rounded-sm p-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <span className="font-mono text-xs text-[#B3001B] tracking-wide">
                {c.title}
              </span>
              <span className="font-mono text-[10px] text-[#7A7E85] shrink-0">
                {c.stats}
              </span>
            </div>
            <p className="text-sm text-[#9A9A9A] leading-relaxed mb-2">{c.desc}</p>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-[#7A7E85] hover:text-[#C9CDD2] tracking-widest transition-colors"
            >
              LISTEN →
            </a>
          </div>
        ))}
      </div>
    </ProjectSection>
  );
}
