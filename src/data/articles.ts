import type { Article } from "./types";
import { site } from "./site";

// Editorial content model. `noteUrl` currently points to the DevLab note
// profile for every entry — swap in per-article note permalinks (or a CMS
// query) once individual posts are wired up, no shape changes required.
export const articles: Article[] = [
  {
    slug: "claude-code-first-step",
    vol: 1,
    category: "claude-code",
    title: "Claude Codeとは何か。AIと共に開発する時代の入り口",
    description:
      "ターミナルで動くAIエージェント「Claude Code」の全体像と、従来のAIチャット活用との決定的な違いを解説する。",
    date: "2026-06-02",
    readMinutes: 7,
    featured: true,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "claude-code-setup-guide",
    vol: 2,
    category: "claude-code",
    title: "Claude Code 導入・初期設定完全ガイド",
    description:
      "インストールから認証、プロジェクト設定まで。つまずきやすいポイントを整理した実践セットアップ手順。",
    date: "2026-06-05",
    readMinutes: 6,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "prompt-design-for-agents",
    vol: 3,
    category: "claude-code",
    title: "AIエージェントに伝わるプロンプト設計術",
    description:
      "指示があいまいなほどAIは迷走する。開発タスクを的確に伝えるための構造化プロンプトの考え方。",
    date: "2026-06-10",
    readMinutes: 8,
    featured: true,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "build-webapp-with-claude-code",
    vol: 4,
    category: "development",
    title: "Claude CodeでWebアプリを1日で形にする",
    description:
      "要件定義からデプロイ直前まで、AIと並走しながらプロダクトを作るワークフローを公開する。",
    date: "2026-06-14",
    readMinutes: 9,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "improve-legacy-with-ai",
    vol: 5,
    category: "development",
    title: "既存システムをAIと一緒に改善する現実的な進め方",
    description:
      "触るのが怖いレガシーコードこそAIの出番。安全にリファクタリングを進めるための段取りを解説。",
    date: "2026-06-18",
    readMinutes: 7,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "github-integration-workflow",
    vol: 6,
    category: "development",
    title: "GitHub連携で加速するAI開発フロー",
    description:
      "Issue起票からPRレビューまで。AIとGitHubを繋いで開発サイクルを高速化する実践知。",
    date: "2026-06-21",
    readMinutes: 6,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "chatgpt-daily-workflow",
    vol: 7,
    category: "chatgpt",
    title: "ChatGPTを『毎日使えるツール』に変える設定術",
    description:
      "カスタム指示、プロジェクト機能、記憶の使い分け。明日から効く実務ワークフローをまとめた。",
    date: "2026-06-24",
    readMinutes: 5,
    featured: true,
    seriesSlug: "ai-beginner-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "generative-ai-landscape-2026",
    vol: 8,
    category: "ai",
    title: "2026年、生成AI地図を1本で理解する",
    description:
      "乱立するモデルとサービスを整理し、今どこに注目すべきかを俯瞰する年央アップデート。",
    date: "2026-06-27",
    readMinutes: 8,
    seriesSlug: "ai-beginner-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "ai-productivity-toolkit",
    vol: 9,
    category: "productivity",
    title: "AIで仕事時間を半分にする7つの型",
    description:
      "資料作成・議事録・調査・メール。日々の業務をAIに任せるための具体的なテンプレート集。",
    date: "2026-06-30",
    readMinutes: 6,
    noteUrl: site.noteUrl,
  },
  {
    slug: "ai-side-income-map",
    vol: 10,
    category: "business",
    title: "AI副業のリアル。稼げる領域と稼げない領域",
    description:
      "『AIで稼ぐ』という言葉の中身を分解し、個人が着手しやすい領域を具体的に示す。",
    date: "2026-07-03",
    readMinutes: 9,
    featured: true,
    seriesSlug: "ai-business-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "personal-dev-with-ai-agent",
    vol: 11,
    category: "development",
    title: "AIエージェント開発、個人でどこまで作れるか",
    description:
      "自律的に動くAIエージェントを個人開発するための設計思想とつまずきポイントを共有する。",
    date: "2026-07-08",
    readMinutes: 8,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "deploy-to-production",
    vol: 12,
    category: "development",
    title: "本番環境へのデプロイ、AIと進める安全な手順",
    description:
      "動くものを壊れないまま届ける。AI開発時代のデプロイフローとチェックリスト。",
    date: "2026-07-11",
    readMinutes: 7,
    seriesSlug: "claude-code-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "monetize-ai-skill",
    vol: 13,
    category: "business",
    title: "AIスキルを収益に変える、最初の一歩の踏み方",
    description:
      "スキルはあるのに動けない人へ。小さく検証し、継続可能な形で収益化するための手順。",
    date: "2026-07-15",
    readMinutes: 6,
    seriesSlug: "ai-business-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "ai-for-beginners-mindset",
    vol: 14,
    category: "ai",
    title: "AI初心者がまず捨てるべき3つの思い込み",
    description:
      "『難しそう』が学びを止める最大の壁。最初の一歩を軽くするための考え方の転換。",
    date: "2026-07-18",
    readMinutes: 5,
    seriesSlug: "ai-beginner-series",
    noteUrl: site.noteUrl,
  },
  {
    slug: "claude-vs-chatgpt-workflow",
    vol: 15,
    category: "chatgpt",
    title: "Claude と ChatGPT、実務ではどう使い分けるか",
    description:
      "似ているようで得意分野が違う二つのAI。タスク別の使い分け基準を実体験ベースで整理する。",
    date: "2026-07-21",
    readMinutes: 6,
    noteUrl: site.noteUrl,
  },
];

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getArticlesBySeries(seriesSlug: string): Article[] {
  return articles
    .filter((a) => a.seriesSlug === seriesSlug)
    .sort((a, b) => a.vol - b.vol);
}

export function getLatestArticles(limit?: number): Article[] {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
