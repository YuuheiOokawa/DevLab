export const site = {
  name: "DevLab",
  domain: "devlab.media",
  tagline: "AIを、知るだけで終わらせない。",
  taglineEn: "Don't just know AI. Build with it.",
  description:
    "生成AIからAI開発まで。AIを「知る」から「使う」「作る」へ。DevLabは、AI時代を生きるための実践的な知識と体験を届けるメディアです。",
  noteUrl: "https://note.com/official_devlab",
  social: {
    note: "https://note.com/official_devlab",
    x: "https://x.com/",
    github: "https://github.com/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Series", href: "/series" },
    { label: "Topics", href: "/#topics" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/about" },
  ],
  footerExplore: [
    { label: "Articles", href: "/articles" },
    { label: "Series", href: "/series" },
    { label: "Topics", href: "/#topics" },
    { label: "Projects", href: "/#projects" },
  ],
} as const;
