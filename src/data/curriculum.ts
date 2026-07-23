export interface CurriculumItem {
  step: number;
  title: string;
  articleSlug?: string;
}

export const claudeCodeCurriculum: CurriculumItem[] = [
  { step: 1, title: "Claude Codeとは", articleSlug: "claude-code-first-step" },
  { step: 2, title: "インストール・初期設定", articleSlug: "claude-code-setup-guide" },
  { step: 3, title: "プロンプト設計", articleSlug: "prompt-design-for-agents" },
  { step: 4, title: "Webアプリ開発", articleSlug: "build-webapp-with-claude-code" },
  { step: 5, title: "既存システム改善", articleSlug: "improve-legacy-with-ai" },
  { step: 6, title: "GitHub連携", articleSlug: "github-integration-workflow" },
  { step: 7, title: "AIエージェント開発", articleSlug: "personal-dev-with-ai-agent" },
  { step: 8, title: "本番環境へのデプロイ", articleSlug: "deploy-to-production" },
  { step: 9, title: "副業・仕事活用" },
];
