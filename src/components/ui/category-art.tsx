"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/data/types";

const artByCategory: Record<
  CategorySlug,
  { bg: string; stops: [string, string]; shape: (gradientId: string) => React.ReactNode }
> = {
  ai: {
    bg: "bg-[radial-gradient(120%_120%_at_0%_0%,rgba(108,99,255,0.35),transparent_60%),linear-gradient(160deg,#0d0e10,#08090a)]",
    stops: ["#6C63FF", "#06B6D4"],
    shape: (id) => (
      <svg viewBox="0 0 200 200" className="absolute -right-6 -top-6 h-40 w-40 opacity-70">
        <circle cx="100" cy="100" r="70" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="46" fill="none" stroke={`url(#${id})`} strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
  chatgpt: {
    bg: "bg-[radial-gradient(110%_110%_at_100%_0%,rgba(6,182,212,0.3),transparent_60%),linear-gradient(160deg,#0d0e10,#08090a)]",
    stops: ["#06B6D4", "#3B82F6"],
    shape: (id) => (
      <svg viewBox="0 0 200 200" className="absolute -right-4 -bottom-8 h-44 w-44 opacity-60">
        <g stroke={`url(#${id})`} strokeWidth="1" fill="none">
          <path d="M20 140 C 70 100, 130 100, 180 60" />
          <path d="M20 160 C 70 120, 130 120, 180 80" opacity="0.6" />
        </g>
      </svg>
    ),
  },
  "claude-code": {
    bg: "bg-[radial-gradient(110%_110%_at_0%_100%,rgba(59,130,246,0.32),transparent_60%),linear-gradient(160deg,#0d0e10,#08090a)]",
    stops: ["#3B82F6", "#6C63FF"],
    shape: (id) => (
      <svg viewBox="0 0 200 200" className="absolute -left-6 -bottom-6 h-40 w-40 opacity-70">
        <g stroke={`url(#${id})`} strokeWidth="1">
          <rect x="40" y="40" width="120" height="120" rx="16" fill="none" />
          <path d="M70 100 L90 100 M90 80 L90 120 M110 90 L130 90 M110 110 L130 110" strokeLinecap="round" />
        </g>
      </svg>
    ),
  },
  development: {
    bg: "bg-[radial-gradient(120%_120%_at_100%_100%,rgba(108,99,255,0.28),transparent_60%),linear-gradient(160deg,#0d0e10,#08090a)]",
    stops: ["#6C63FF", "#3B82F6"],
    shape: (id) => (
      <svg viewBox="0 0 200 200" className="absolute -right-8 -top-4 h-44 w-44 opacity-60">
        <g stroke={`url(#${id})`} strokeWidth="1" fill="none">
          <polyline points="40,60 80,60 80,140 160,140" />
          <polyline points="60,40 60,100 140,100 140,160" opacity="0.5" />
        </g>
      </svg>
    ),
  },
  productivity: {
    bg: "bg-[radial-gradient(110%_110%_at_0%_0%,rgba(6,182,212,0.28),transparent_60%),linear-gradient(160deg,#0d0e10,#08090a)]",
    stops: ["#06B6D4", "#3B82F6"],
    shape: (id) => (
      <svg viewBox="0 0 200 200" className="absolute -left-4 -top-8 h-40 w-40 opacity-70">
        <g stroke={`url(#${id})`} strokeWidth="1" fill="none">
          <line x1="40" y1="160" x2="40" y2="60" />
          <line x1="80" y1="160" x2="80" y2="90" />
          <line x1="120" y1="160" x2="120" y2="50" />
          <line x1="160" y1="160" x2="160" y2="110" />
        </g>
      </svg>
    ),
  },
  business: {
    bg: "bg-[radial-gradient(120%_120%_at_100%_0%,rgba(59,130,246,0.3),transparent_60%),linear-gradient(160deg,#0d0e10,#08090a)]",
    stops: ["#3B82F6", "#6C63FF"],
    shape: (id) => (
      <svg viewBox="0 0 200 200" className="absolute -right-6 -bottom-4 h-44 w-44 opacity-60">
        <g stroke={`url(#${id})`} strokeWidth="1" fill="none">
          <path d="M30 150 L80 100 L110 130 L170 60" />
          <circle cx="170" cy="60" r="4" fill="#6C63FF" stroke="none" />
        </g>
      </svg>
    ),
  },
};

export function CategoryArt({
  category,
  className,
}: {
  category: CategorySlug;
  className?: string;
}) {
  const art = artByCategory[category];
  const gradientId = `category-art-${category}-${useId()}`;

  return (
    <div className={cn("noise relative overflow-hidden", art.bg, className)}>
      <div className="grid-overlay absolute inset-0 opacity-30" aria-hidden />
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={art.stops[0]} />
            <stop offset="100%" stopColor={art.stops[1]} />
          </linearGradient>
        </defs>
      </svg>
      {art.shape(gradientId)}
    </div>
  );
}
