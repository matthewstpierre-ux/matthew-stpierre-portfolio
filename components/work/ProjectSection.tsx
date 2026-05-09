"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOptions,
} from "@/lib/motion";
import { ChromeButton } from "@/components/ui/ChromeButton";
import { ChromeCard } from "@/components/ui/ChromeCard";
import { cn } from "@/lib/utils";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface ProjectSectionProps {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  role: string;
  heroImage?: string;
  heroImageAlt?: string;
  copy: ReactNode;
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  children?: ReactNode;
  className?: string;
  odd?: boolean;
}

export function MetricRow({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="border border-[#C9CDD2]/10 bg-[#0A0A0B]/40 p-4 rounded-sm text-center"
        >
          <div className="font-mono text-xl md:text-2xl text-[#B3001B] font-bold mb-1">
            {m.value}
          </div>
          <div className="font-mono text-[10px] text-[#7A7E85] tracking-widest uppercase">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectSection({
  id,
  name,
  slug,
  tagline,
  role,
  heroImage,
  heroImageAlt,
  copy,
  metrics,
  links,
  children,
  className,
  odd = false,
}: ProjectSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id={slug}
      className={cn("relative py-20 md:py-28 border-t border-[#C9CDD2]/06", className)}
      aria-label={name}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-0 w-[300px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(179,0,27,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-20 items-start")}>
          {/* Left side */}
          <motion.div
            variants={odd ? slideInRight : slideInLeft}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            className={cn(odd ? "lg:order-2" : "lg:order-1")}
          >
            {/* Project header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-[#B3001B]" />
                <span className="font-mono text-[10px] text-[#B3001B] tracking-[0.25em] uppercase">
                  {role}
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#EAEAEA] leading-none mb-3">
                {name.toUpperCase()}
              </h2>
              <p className="font-mono text-sm text-[#7A7E85] tracking-wide">
                {tagline}
              </p>
            </div>

            {/* Hero image (mobile: full width) */}
            {heroImage && (
              <div className="lg:hidden relative aspect-video w-full overflow-hidden rounded-sm mb-6 border border-[#C9CDD2]/10">
                <Image
                  src={heroImage}
                  alt={heroImageAlt ?? name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )}

            {/* Copy */}
            <div className="space-y-4 text-[#9A9A9A] leading-relaxed">
              {copy}
            </div>

            {/* Metrics */}
            {metrics && <MetricRow metrics={metrics} />}

            {/* Children (sub-projects, feature lists, etc.) */}
            {children}

            {/* Links */}
            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {links.map((link, i) => (
                  <ChromeButton
                    key={i}
                    href={link.href}
                    variant={link.primary ? "pill" : "rect"}
                    size="sm"
                    external
                  >
                    {link.label}
                  </ChromeButton>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right side: hero image (desktop) */}
          <motion.div
            variants={odd ? slideInLeft : slideInRight}
            initial={prefersReduced ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewportOptions}
            className={cn(
              "hidden lg:block",
              odd ? "lg:order-1" : "lg:order-2"
            )}
          >
            {heroImage ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#C9CDD2]/10">
                <Image
                  src={heroImage}
                  alt={heroImageAlt ?? name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 640px"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 60%, rgba(179,0,27,0.15) 100%)",
                  }}
                />
              </div>
            ) : (
              <div className="aspect-[4/3] border border-[#C9CDD2]/10 rounded-sm bg-[#0A0A0B]/60 flex items-center justify-center">
                <span className="font-mono text-[#3A3D42] text-sm tracking-widest">
                  {name.toUpperCase()}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
