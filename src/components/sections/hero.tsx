"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.94]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-bg pt-28 pb-10"
    >
      <div className="aurora noise absolute inset-0 -z-10" aria-hidden />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" aria-hidden />

      <motion.div style={{ y, opacity, scale }} className="flex-1">
        <Container className="flex h-full flex-col justify-center">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-xs font-medium tracking-wide text-ink-soft">
                <span className="size-1.5 rounded-full bg-accent-cyan" />
                AI MEDIA &amp; DEVELOPMENT LAB
              </p>
              <h1 className="font-display text-[clamp(52px,8vw,140px)] font-semibold leading-[0.98] tracking-tight text-ink">
                AIを、
                <br />
                知るだけで
                <br />
                <span className="text-gradient">終わらせない。</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                生成AIからAI開発まで。AIを「知る」から「使う」「作る」へ。
                <br />
                DevLabは、AI時代を生きるための実践的な知識と体験を届けるメディアです。
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/articles">記事を読む</Button>
                <Button href="/about" variant="secondary" showArrow={false}>
                  DevLabについて
                </Button>
              </div>
            </div>

            <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:items-end lg:gap-3 lg:text-right">
              {["KNOW", "LEARN", "USE", "BUILD", "EARN"].map((step, i) => (
                <span
                  key={step}
                  className="text-xs font-medium tracking-[0.3em] text-ink-soft/70"
                  style={{ opacity: 1 - i * 0.12 }}
                >
                  {String(i + 1).padStart(2, "0")} — {step}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </motion.div>

      <div className="pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={reduced ? undefined : { opacity: 0 }}
          animate={reduced ? undefined : { opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display block translate-y-[18%] text-center text-[clamp(90px,22vw,340px)] font-semibold leading-none tracking-tight text-white/[0.04]"
          aria-hidden
        >
          DEVLAB
        </motion.span>
      </div>
    </section>
  );
}
