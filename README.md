# DevLab

DevLab公式Webサイト。「AIを、知るだけで終わらせない。」をコンセプトに、生成AI・Claude Code・AI開発・AI副業に関するナレッジを届けるメディアのブランドサイトです。

## Getting Started

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いてください。

## Tech Stack

- Next.js (App Router, TypeScript, React Server Components)
- Tailwind CSS v4 (CSS-first theme in `src/app/globals.css`)
- Framer Motion（スクロールリビール、ページ内インタラクション）
- Lucide Icons

## Project Structure

```
src/
  app/            # ルーティング（/, /articles, /series, /about, sitemap, robots, OG画像）
  components/
    layout/       # Header, Footer
    sections/     # トップページの各セクション
    articles/     # 記事カード・一覧の検索/絞り込みUI
    series/       # シリーズカード
    ui/           # 共通UIプリミティブ（Button, Reveal, CategoryArtなど）
  data/           # 記事・シリーズ・カテゴリー等の静的データ（将来的にCMS化を想定した形）
  lib/            # 共通ユーティリティ
```

## Content

記事・シリーズのデータは `src/data/*.ts` の静的データです。現状すべての「読む」リンクは note の公式アカウント（https://note.com/official_devlab）に遷移します。個別記事のnote URLが判明次第、`src/data/articles.ts` の `noteUrl` を記事ごとのパーマリンクに差し替えてください。

## Notes

- ダークモード基調のデザインシステム（背景・アクセント・タイポグラフィ）は `src/app/globals.css` と `src/app/layout.tsx` のフォント設定に集約しています。
- `prefers-reduced-motion` に対応済みです。
- OGP画像・favicon は `src/app/opengraph-image.tsx` / `src/app/icon.tsx` で動的生成しています。
