"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

const features = [
  {
    name: "Distribution",
    desc: "0% commission, 150+ DSPs, $50/year flat",
  },
  {
    name: "Publishing Administration",
    desc: "US + Canadian PRO enrollment (ASCAP, MLC, SoundExchange, SOCAN, CMRRA, ACTRA RACS)",
  },
  {
    name: "Earkitz Website Generator",
    desc: "earkitz.com/artistname, included",
  },
  {
    name: "Industry Contact Directory",
    desc: "4,000+ curated contacts, $10/mo add-on",
  },
  {
    name: "Listening Party Bot",
    desc: "Discord-native fan engagement, $0.10 per listener token",
  },
  {
    name: "Music Rights Marketplace",
    desc: "Invite-only 2027, $200K+ already raised for artists",
  },
];

export function LisninSection() {
  return (
    <ProjectSection
      id="lisnin"
      name="Lisnin Music"
      slug="lisnin"
      tagline="Manage your entire music career, on one platform."
      role="Founder & CEO · 2023–Present"
      heroImage="/images/lisnin-logo-dark.png"
      heroImageAlt="Lisnin Music platform logo"
      metrics={[
        { value: "Top 10", label: "of 10,000 — Grizzlython 2023" },
        { value: "$200K+", label: "Raised for artists" },
        { value: "$250K", label: "Pre-seed in progress" },
      ]}
      links={[
        { label: "Visit Lisnin.io →", href: "https://www.lisnin.io", primary: true },
        { label: "One-Pager PDF", href: "/pdfs/lisninonepager.pdf" },
      ]}
      copy={
        <>
          <p>
            Lisnin started in 2023 as a Solana Grizzlython hackathon project — a
            music marketing tool that connected artists with new listeners through
            Discord communities. It placed in the top 10 out of 10,000 registrants.
            Two years later, after talking to hundreds more artists, I rebuilt it
            as something bigger.
          </p>
          <p>
            The 2026 Lisnin is an end-to-end artist career platform. Distribution,
            publishing administration, custom press-kit websites, an industry contact
            directory, fan engagement, and a music rights marketplace — all in one
            product. We're built for the artist who wants to actually run their
            career, not just upload songs and hope.
          </p>
          <p>
            Lisnin launched in closed beta in 2026 with co-founders Vinay Singh
            (CTO) and Everton Lewis Jr. (Partnerships). We're currently raising a
            $250K pre-seed round.
          </p>
        </>
      }
    >
      {/* Y2K dialog feature box */}
      <div className="mt-8 border border-[#C9CDD2]/10 rounded-sm overflow-hidden">
        <div className="px-4 py-2 bg-[#111115] border-b border-[#C9CDD2]/10 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#B3001B]" />
          <div className="w-2 h-2 rounded-full bg-[#3A3D42]" />
          <div className="w-2 h-2 rounded-full bg-[#3A3D42]" />
          <span className="ml-2 font-mono text-[10px] text-[#7A7E85] tracking-widest">
            LISNIN.SYS — Features
          </span>
        </div>
        <div className="p-4 space-y-2">
          {features.map((f) => (
            <div key={f.name} className="flex gap-3 text-sm">
              <span className="font-mono text-[#B3001B] shrink-0">▸</span>
              <div>
                <span className="text-[#C9CDD2] font-medium">{f.name}</span>
                <span className="text-[#7A7E85]"> — {f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
}
