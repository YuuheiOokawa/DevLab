export interface ProjectCategory {
  slug: string;
  title: string;
  description: string;
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: "ai-tools",
    title: "AI Tools",
    description: "日々の作業を効率化する小さなAIツール群。",
  },
  {
    slug: "ai-applications",
    title: "AI Applications",
    description: "AIを核にした個人開発アプリケーション。",
  },
  {
    slug: "experiments",
    title: "Experiments",
    description: "新しいAI技術を試す実験的なプロトタイプ。",
  },
  {
    slug: "open-source",
    title: "Open Source",
    description: "コミュニティに還元するオープンソースプロジェクト。",
  },
];
