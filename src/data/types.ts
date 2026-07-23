export type CategorySlug =
  | "ai"
  | "chatgpt"
  | "claude-code"
  | "development"
  | "productivity"
  | "business";

export interface Category {
  slug: CategorySlug;
  label: string;
  labelJa: string;
}

export interface Article {
  slug: string;
  vol: number;
  category: CategorySlug;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  featured?: boolean;
  seriesSlug?: string;
  noteUrl: string;
}

export interface SeriesItem {
  slug: string;
  title: string;
  titleJa: string;
  description: string;
  articleSlugs: string[];
  totalPlanned: number;
}
