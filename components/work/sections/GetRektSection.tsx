"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface GetRektSectionProps {
  odd?: boolean;
}

export function GetRektSection({ odd }: GetRektSectionProps) {
  return (
    <ProjectSection
      id="get-rekt-records"
      name="Get Rekt Records"
      slug="get-rekt-records"
      tagline="The first label. Sault Ste. Marie, built from scratch."
      role="Co-founder · 2017–2020"
      heroImage="/images/getrektrecords.png"
      heroImageAlt="Get Rekt Records"
      odd={odd}
      metrics={[
        { value: "200+", label: "Tickets sold, 2018 showcase" },
        { value: "100%", label: "Local artists on the bill" },
      ]}
      links={[
        { label: "@getrektrecords →", href: "https://www.instagram.com/getrektrecords/" },
        { label: "Sault Star Feature →", href: "https://www.saultstar.com/entertainment/music/young-businessman-wants-sault-to-get-rekt" },
      ]}
      copy={
        <p>
          The first label. I started Get Rekt Records with my brother in our hometown
          of Sault Ste. Marie. We learned everything in real time — releases,
          marketing, merch, live events. In 2018 we put on an all-local hip-hop
          showcase that sold over 200 tickets, one of the most successful indie shows
          in the town's history at that scale. The Sault Star ran a feature on the
          label and what we were trying to build for the local scene.
        </p>
      }
    />
  );
}
