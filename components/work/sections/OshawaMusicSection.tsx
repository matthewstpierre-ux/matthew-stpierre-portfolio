"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface OshawaMusicSectionProps {
  odd?: boolean;
}

export function OshawaMusicSection({ odd }: OshawaMusicSectionProps) {
  return (
    <ProjectSection
      id="oshawa-music-week"
      name="Oshawa Music Week"
      slug="oshawa-music-week"
      tagline="Event marketing and production — Music 411 livestream showcase."
      role="Event Marketing & Production"
      heroImage="/images/oshawamusicweek.webp"
      heroImageAlt="Oshawa Music Week"
      odd={odd}
      metrics={[
        { value: "200", label: "Concurrent viewers (peak)" },
        { value: "1,000+", label: "Total stream views" },
        { value: "#1", label: "Highest-performing event of the week" },
      ]}
      links={[
        { label: "Oshawa Music Week →", href: "https://www.oshawamusicweek.ca/" },
      ]}
      copy={
        <p>
          I led marketing and production for{" "}
          <em>Music 411</em>, a livestream showcase of interviews and performances
          by artists in the Oshawa region during Oshawa Music Week. I built the
          creative assets, ran conversion ads to drive signups, and set up an
          automated reminder email sequence that fired the day of the event. The
          3-hour Twitch livestream peaked at nearly 200 concurrent viewers and
          1,000+ total views — the highest-performing event of that year's program.
        </p>
      }
    />
  );
}
