"use client";

import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    handle: "@lonelymatts",
    href: "https://www.instagram.com/lonelymatts/",
  },
  {
    label: "Twitter",
    handle: "@lonelymatts",
    href: "https://x.com/lonelymatts",
  },
  {
    label: "LinkedIn",
    handle: "matthew-stpierre",
    href: "https://www.linkedin.com/in/matthew-stpierre/",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#C9CDD2]/[0.08] py-12 px-6">
      {/* Scanline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(179,0,27,0.04) 0%, transparent 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {socials.map(({ label, handle, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
            >
              <span className="font-mono text-[10px] text-[#3A3D42] tracking-[0.3em] uppercase group-hover:text-[#7A7E85] transition-colors">
                {label}
              </span>
              <span className="font-mono text-sm text-[#7A7E85] group-hover:text-[#C9CDD2] transition-colors">
                {handle}
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-[#C9CDD2]/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#3A3D42] tracking-widest">
            — made with chrome and red glow · matthew st pierre · 2026
          </p>
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {[
              { label: "Work", href: "/work" },
              { label: "About", href: "/#about" },
              { label: "Contact", href: "/#contact" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[10px] text-[#3A3D42] hover:text-[#7A7E85] tracking-widest uppercase transition-colors"
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
