"use client";

import Link from "next/link";

const socials = [
  { label: "Instagram", handle: "@lonelymatts", href: "https://www.instagram.com/lonelymatts/" },
  { label: "Twitter", handle: "@lonelymatts", href: "https://x.com/lonelymatts" },
  { label: "LinkedIn", handle: "matthew-stpierre", href: "https://www.linkedin.com/in/matthew-stpierre/" },
];

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(201,205,210,0.08)",
        padding: "56px 0",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(179,0,27,0.04) 0%, transparent 30%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ width: "100%", maxWidth: "1280px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 1 }}>
        {/* Social row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {socials.map(({ label, handle, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).querySelectorAll("span").forEach((s: HTMLElement) => {
                  s.style.color = "var(--chrome)";
                });
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).querySelectorAll("span").forEach((s: HTMLElement, i) => {
                  s.style.color = i === 0 ? "var(--gunmetal)" : "var(--steel)";
                });
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--gunmetal)", letterSpacing: "0.3em", textTransform: "uppercase", transition: "color 0.2s" }}>
                {label}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--steel)", transition: "color 0.2s" }}>
                {handle}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(201,205,210,0.06)",
            paddingTop: "32px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gunmetal)", letterSpacing: "0.1em" }}>
            — made with chrome and red glow · matthew st pierre · 2026
          </p>
          <nav aria-label="Footer navigation" style={{ display: "flex", gap: "32px" }}>
            {[
              { label: "Work", href: "/work" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--gunmetal)", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--steel)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gunmetal)")}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
