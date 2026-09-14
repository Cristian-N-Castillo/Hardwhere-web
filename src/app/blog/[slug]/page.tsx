import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { Label, LinkButton } from "@/components/ui";
import { site } from "@/content/site";
import { formatDate, getPost, postSlugs } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { Content } = post;

  return (
    <>
      <header className="border-b border-ink/15">
        <div className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
          <div className="flex items-center gap-2 border-b border-ink/15 px-5 py-3 text-ink/55 sm:px-10">
            <Link href="/blog" className="label-mono hover:underline hover:underline-offset-4">
              ← Blog
            </Link>
            <span className="label-mono" aria-hidden>
              /
            </span>
            <span className="label-mono">{post.tags.join(" · ")}</span>
          </div>
          <div className="mx-auto max-w-4xl px-5 pt-16 pb-14 text-center sm:px-10 sm:pt-24">
            <h1 className="font-display text-display-xl">{post.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-ink/65">{post.description}</p>
            <p className="label-mono mt-10 text-ink/50">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min de lectura · Equipo {site.name}
            </p>
          </div>
        </div>
      </header>

      <section className="border-b border-ink/15 bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-10 lg:border-x lg:border-ink/15">
          <article className="prose mx-auto sm:prose-lg prose-stone prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-h2:text-2xl prose-a:text-ink prose-a:underline-offset-2 prose-strong:text-ink prose-li:marker:text-ink/40 prose-table:text-base prose-th:font-medium">
            <Content />
          </article>
        </div>
      </section>

      <section className="border-b border-cream/15 bg-ink text-cream">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:border-x lg:border-cream/15">
          <div>
            <Label dark>Recurso gratuito</Label>
            <h2 className="mt-5 font-display text-display-lg">
              ¿Dónde está tu organización hoy <em>frente a la Ley 21.719?</em>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <LinkButton href="/cumplimiento-ley-21719#checklist" variant="light">
              Descargar la checklist
            </LinkButton>
            <LinkButton href="/contacto" variant="outlineLight">
              Hablar con el equipo
            </LinkButton>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          inLanguage: "es-CL",
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name, legalName: site.legalName },
          mainEntityOfPage: `${site.url}/blog/${slug}`,
        }}
      />
    </>
  );
}
