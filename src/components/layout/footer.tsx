import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-alt">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-display block text-[clamp(40px,6vw,72px)] font-semibold leading-none tracking-tight text-ink">
              DEVLAB
            </span>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
              AIを知る。
              <br />
              AIを使う。
              <br />
              AIで作る。
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {site.footerExplore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ink-soft">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.social.note}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  note
                </a>
              </li>
              <li>
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ink-soft">© 2026 {site.name}</p>
          <p className="text-xs text-ink-soft">Make AI Practical.</p>
        </div>
      </Container>
    </footer>
  );
}
