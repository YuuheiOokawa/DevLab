import type { SeriesItem } from "./types";

export const seriesList: SeriesItem[] = [
  {
    slug: "claude-code-series",
    title: "MASTER CLAUDE CODE",
    titleJa: "Claude Codeシリーズ",
    description:
      "AIに質問する時代から、AIと一緒に開発する時代へ。導入からプロンプト設計、Webアプリ開発、既存システム改善、GitHub連携、本番デプロイ、AIエージェント開発、そして副業活用まで。Claude Codeを実務で使い倒すための連載。",
    articleSlugs: [
      "claude-code-first-step",
      "claude-code-setup-guide",
      "prompt-design-for-agents",
      "build-webapp-with-claude-code",
      "improve-legacy-with-ai",
      "github-integration-workflow",
      "personal-dev-with-ai-agent",
      "deploy-to-production",
    ],
    totalPlanned: 12,
  },
  {
    slug: "ai-beginner-series",
    title: "AI FOR EVERYONE",
    titleJa: "AI初心者シリーズ",
    description:
      "『AIって結局なに？』から始める人のための連載。生成AIの全体像、ChatGPTの基本、日常での使い方までをやさしく整理する。",
    articleSlugs: [
      "chatgpt-daily-workflow",
      "generative-ai-landscape-2026",
      "ai-for-beginners-mindset",
    ],
    totalPlanned: 8,
  },
  {
    slug: "ai-business-series",
    title: "AI TO INCOME",
    titleJa: "AI副業シリーズ",
    description:
      "AIスキルを個人の収益につなげるための実践連載。稼げる領域の見極め方から、最初の一歩の踏み出し方まで。",
    articleSlugs: ["ai-side-income-map", "monetize-ai-skill"],
    totalPlanned: 6,
  },
];

export function getSeries(slug: string): SeriesItem | undefined {
  return seriesList.find((s) => s.slug === slug);
}
