import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  showArrow?: boolean;
  external?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-accent-cyan disabled:opacity-50";

const variants = {
  primary:
    "bg-ink text-bg hover:bg-white shadow-[0_0_0_0_rgba(59,130,246,0)] hover:shadow-[0_0_24px_2px_rgba(59,130,246,0.35)]",
  secondary:
    "border border-line-strong text-ink hover:border-ink hover:bg-white/5",
  ghost: "text-ink-soft hover:text-ink",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-sm md:text-base",
};

type ButtonProps = ButtonBaseProps & {
  href?: string;
} & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
      React.ButtonHTMLAttributes<HTMLButtonElement>,
    "href" | "className" | "children"
  >;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
  external = false,
  ...rest
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="size-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
