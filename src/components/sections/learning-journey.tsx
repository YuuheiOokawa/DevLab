"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { journeySteps } from "@/data/journey";
import { cn } from "@/lib/utils";

export function LearningJourney() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / journeySteps.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActive(Math.min(journeySteps.length - 1, Math.max(0, idx)));
  };

  return (
    <section className="relative overflow-hidden bg-bg-alt py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Growth Path"
          title="YOUR AI JOURNEY"
          description="DevLabは、知るだけで終わらせないための5段階の成長ロードマップを提供します。"
        />

        <div className="mt-6 hidden items-center gap-2 md:flex">
          {journeySteps.map((s, i) => (
            <div
              key={s.step}
              className={cn(
                "h-1 flex-1 rounded-full bg-line transition-colors duration-500",
                i <= active && "bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
              )}
            />
          ))}
        </div>
      </Container>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:px-10 lg:px-14"
      >
        {journeySteps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={reduced ? undefined : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative flex min-w-[80%] snap-start flex-col justify-between rounded-3xl border p-8 transition-colors duration-500 sm:min-w-[46%] lg:min-w-[19%]",
              i === active
                ? "border-line-strong bg-bg-raised"
                : "border-line bg-bg-raised/40"
            )}
            style={{ aspectRatio: "3/4" }}
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-sm font-semibold tracking-widest text-ink-soft">
                {s.step}
              </span>
              <span
                className={cn(
                  "size-2 rounded-full transition-colors duration-500",
                  i === active ? "bg-accent-cyan" : "bg-line-strong"
                )}
              />
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">
                {s.key}
              </h3>
              <p className="mt-1 text-base font-medium text-ink-soft">{s.ja}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft/80">
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
