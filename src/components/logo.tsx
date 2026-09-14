import { cx } from "@/lib/cx";

export function LogoMark({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={cx("size-8", className)} aria-hidden>
      <rect width="32" height="32" className={dark ? "fill-cream" : "fill-ink"} />
      <path
        d="M9.5 8.5v15M9.5 16h9M18.5 8.5v15"
        strokeWidth="2.4"
        strokeLinecap="square"
        className={dark ? "stroke-ink" : "stroke-cream"}
      />
      <rect x="22" y="20.5" width="3" height="3" className={dark ? "fill-ink" : "fill-cream"} />
    </svg>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark dark={dark} />
      <span className={cx("text-lg leading-none font-semibold tracking-[-0.02em]", dark ? "text-cream" : "text-ink")}>
        Hard<span className="font-normal">Where</span>
      </span>
    </span>
  );
}
