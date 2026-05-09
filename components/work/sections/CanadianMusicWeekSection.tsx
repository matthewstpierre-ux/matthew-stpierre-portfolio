"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface CanadianMusicWeekSectionProps {
  odd?: boolean;
}

export function CanadianMusicWeekSection({ odd }: CanadianMusicWeekSectionProps) {
  return (
    <ProjectSection
      id="canadian-music-week"
      name="Canadian Music Week"
      slug="canadian-music-week"
      tagline="Speaker & Mentor's Café Lead · Now Departure Festival"
      role="Speaker & Lead — Mentor's Café"
      heroImage="/images/canadianmusicweek.webp"
      heroImageAlt="Canadian Music Week"
      odd={odd}
      metrics={[
        { value: "Speaker", label: "Credit on the official program" },
      ]}
      links={[
        { label: "CMW Speaker Page →", href: "https://cmw.net/speakers/matt-st-pierre/", primary: true },
      ]}
      copy={
        <p>
          Canadian Music Week is a week-long industry conference, festival, and
          networking event. I led the Mentor's Café — the matchmaking program
          connecting registered mentees with industry mentors. I worked the floor
          making intros, managing the schedule, and ensuring the right pairings
          happened.
        </p>
      }
    />
  );
}
