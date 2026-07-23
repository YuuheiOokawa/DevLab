import { Hero } from "@/components/sections/hero";
import { FeaturedArticles } from "@/components/sections/featured-articles";
import { LearningJourney } from "@/components/sections/learning-journey";
import { Topics } from "@/components/sections/topics";
import { ClaudeCodeSeries } from "@/components/sections/claude-code-series";
import { LatestArticles } from "@/components/sections/latest-articles";
import { Projects } from "@/components/sections/projects";
import { NewsletterCta } from "@/components/sections/newsletter-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <LearningJourney />
      <Topics />
      <ClaudeCodeSeries />
      <LatestArticles />
      <Projects />
      <NewsletterCta />
    </>
  );
}
