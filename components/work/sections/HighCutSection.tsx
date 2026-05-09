"use client";

import { ProjectSection } from "@/components/work/ProjectSection";

interface HighCutSectionProps {
  odd?: boolean;
}

export function HighCutSection({ odd }: HighCutSectionProps) {
  return (
    <ProjectSection
      id="high-cut-records"
      name="High Cut Records"
      slug="high-cut-records"
      tagline="Durham College student-led non-profit label."
      role="Marketing → Co-Manager · 2020–2022"
      heroImage="/images/highcutrecords.webp"
      heroImageAlt="High Cut Records"
      odd={odd}
      metrics={[
        { value: "2 years", label: "Marketing then Co-Manager" },
        { value: "Multi-artist", label: "Roster distributed + marketed" },
      ]}
      links={[
        { label: "@highcutrecords →", href: "https://www.instagram.com/highcutrecords/" },
        { label: "YouTube →", href: "https://www.youtube.com/user/HighCutRecords/videos" },
        { label: "Business Plan →", href: "https://docs.google.com/document/d/1K9MKzQkMUrQnF1Fceq4wKpMGlUwMN7PXluG8VAmd4v0/edit?usp=sharing" },
      ]}
      copy={
        <p>
          High Cut Records is the student-led non-profit label run by Durham
          College's Music Business Management program. I joined the marketing team
          in year one — running social, advising on artist branding and DSP
          optimization. In year two I was promoted to Co-Manager, where I handled
          hiring, A&R coordination, and ensuring the contracts and admin that keep a
          label functional were actually getting done. We set personal-growth goals
          each semester (leadership, networking, creative process) and reflected on
          the obstacles in hitting them. It was the first time I taught what I knew
          while still actively learning.
        </p>
      }
    />
  );
}
