import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} — ${site.taglineEn}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI",
    "生成AI",
    "ChatGPT",
    "Claude",
    "Claude Code",
    "AI開発",
    "プログラミング",
    "仕事効率化",
    "AI副業",
    "個人開発",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `https://${site.domain}`,
    siteName: site.name,
    title: `${site.name} — ${site.taglineEn}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.taglineEn}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `https://${site.domain}#organization`,
      name: site.name,
      url: `https://${site.domain}`,
      sameAs: [site.social.note, site.social.x, site.social.github],
    },
    {
      "@type": "WebSite",
      "@id": `https://${site.domain}#website`,
      name: site.name,
      url: `https://${site.domain}`,
      description: site.description,
      inLanguage: "ja",
      publisher: { "@id": `https://${site.domain}#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${spaceGrotesk.variable} ${inter.variable} ${notoSansJP.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
