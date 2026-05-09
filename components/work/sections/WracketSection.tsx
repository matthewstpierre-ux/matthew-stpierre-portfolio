"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface WracketSectionProps {
  odd?: boolean;
}

export function WracketSection({ odd }: WracketSectionProps) {
  return (
    <ProjectSection
      id="wracket-music"
      name="Wracket Music"
      slug="wracket-music"
      tagline="Music supervision · film, TV, advertising, gaming."
      role="Business Development · 2022–Present"
      odd={odd}
      metrics={[
        { value: "Apple", label: "2022 product launch" },
        { value: "Eli Roth", label: "Thanksgiving (2023)" },
        { value: "Prime Video · MTV", label: "Multiple placements" },
      ]}
      links={[
        { label: "Wracket Music →", href: "https://www.wracketmusic.com/", primary: true },
        { label: "Thanksgiving Trailer →", href: "https://youtu.be/KbU50SdL8zA" },
      ]}
      copy={
        <p>
          Since 2022 I've supported Everton Lewis Jr. with business development at
          Wracket Music, a music supervision company placing songs in film, TV,
          advertising, and gaming. I've contributed to campaigns including Apple's
          2022 product launch, Eli Roth's{" "}
          <em>Thanksgiving</em>, and various Prime Video and MTV projects.
        </p>
      }
    />
  );
}
