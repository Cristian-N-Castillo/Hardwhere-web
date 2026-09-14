import Link from "next/link";
import type { ReactNode } from "react";
import { Title } from "@/components/ui";
import { cx } from "@/lib/cx";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={cx("border-b", dark ? "border-cream/15 bg-ink text-cream" : "border-ink/15 bg-cream text-ink")}>
      <div className={cx("mx-auto max-w-[1280px] lg:border-x", dark ? "lg:border-cream/15" : "lg:border-ink/15")}>
        <div
          className={cx(
            "flex items-center gap-2 border-b px-5 py-3 sm:px-10",
            dark ? "border-cream/15 text-cream/55" : "border-ink/15 text-ink/55",
          )}
        >
          <Link href="/" className="label-mono hover:underline hover:underline-offset-4">
            HardWhere
          </Link>
          <span className="label-mono" aria-hidden>
            /
          </span>
          <span className="label-mono">{eyebrow}</span>
        </div>
        <div className={cx("grid gap-12 px-5 pt-12 pb-14 sm:px-10 sm:pt-16 sm:pb-16", aside ? "lg:grid-cols-[1fr_auto] lg:items-end" : null)}>
          <div className="max-w-4xl animate-fade-up">
            <Title as="h1" size="xl">
              {title}
            </Title>
            {description && (
              <p className={cx("mt-6 max-w-2xl text-base leading-relaxed sm:text-lg", dark ? "text-cream/70" : "text-ink/65")}>
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
