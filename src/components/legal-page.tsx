import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export function LegalPage({
  eyebrow,
  title,
  updated,
  version,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  version: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={
          <span className="label-mono">
            Versión {version} · Última actualización: {updated}
          </span>
        }
      />
      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-10 lg:border-x lg:border-ink/15">
          <article className="prose max-w-3xl sm:prose-lg prose-stone prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-h2:text-2xl prose-a:text-ink prose-a:underline-offset-2 prose-strong:text-ink prose-li:marker:text-ink/40 prose-table:text-sm">
            {children}
          </article>
        </div>
      </section>
    </>
  );
}
