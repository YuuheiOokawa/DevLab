import type { Category } from "./types";

export const categories: Category[] = [
  { slug: "ai", label: "AI", labelJa: "生成AI" },
  { slug: "chatgpt", label: "ChatGPT", labelJa: "ChatGPT活用" },
  { slug: "claude-code", label: "Claude Code", labelJa: "AI開発" },
  { slug: "development", label: "Development", labelJa: "AIアプリ開発" },
  { slug: "productivity", label: "Productivity", labelJa: "仕事効率化" },
  { slug: "business", label: "AI Business", labelJa: "副業・収益化" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
