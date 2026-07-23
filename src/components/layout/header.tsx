"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function isActive(pathname: string, href: string) {
  const [path] = href.split("#");
  if (path === "/") return pathname === "/";
  return pathname === path;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 transition-all duration-500 ease-out md:px-4",
          scrolled
            ? "glass mx-4 border border-line py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] md:mx-10"
            : "border border-transparent py-2 md:mx-10"
        )}
      >
        <Link
          href="/"
          className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight text-ink"
        >
          <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan text-xs font-bold text-white">
            D
          </span>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-200",
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.noteUrl} external size="sm" variant="secondary">
            noteを読む
          </Button>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass fixed inset-x-4 top-[calc(env(safe-area-inset-top)+72px)] z-50 rounded-3xl border border-line p-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="モバイルナビゲーション">
              {site.nav.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-colors hover:bg-white/5",
                        active ? "text-ink" : "text-ink-soft"
                      )}
                    >
                      {item.label}
                      {active && <span className="size-1.5 rounded-full bg-accent-cyan" />}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <div className="mt-4 border-t border-line pt-4">
              <Button href={site.noteUrl} external className="w-full" variant="primary">
                noteを読む
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
