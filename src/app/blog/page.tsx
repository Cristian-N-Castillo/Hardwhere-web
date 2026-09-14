import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Arrow } from "@/components/ui";
import { formatDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog: Ley 21.719, protección de datos y digitalización",
  description:
    "Artículos prácticos sobre la Ley 21.719, ciberseguridad y digitalización para empresas, instituciones y colegios en Chile.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Protección de datos y tecnología, <em>explicadas en simple.</em>
          </>
        }
        description="Artículos prácticos sobre la Ley 21.719, ciberseguridad y digitalización, escritos por el equipo que implementa."
      />
      <section className="border-b border-ink/15">
        <ol className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
          {posts.map((post, i) => (
            <li key={post.slug} className="border-b border-ink/15 last:border-b-0">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-4 px-5 py-10 transition-colors hover:bg-ink hover:text-cream sm:px-10 lg:grid-cols-[10rem_1fr_16rem_auto] lg:gap-10"
              >
                <div className="label-mono space-y-1 opacity-60">
                  <p>N.º {String(posts.length - i).padStart(3, "0")}</p>
                  <time dateTime={post.date} className="block">
                    {formatDate(post.date)}
                  </time>
                </div>
                <div>
                  <h2 className="font-display text-display-md">{post.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-65">{post.description}</p>
                </div>
                <div className="label-mono flex flex-wrap content-start gap-2 opacity-70">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 ring-1 ring-current/30">
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-1">{post.readingMinutes} min</span>
                </div>
                <Arrow className="hidden text-3xl lg:block" />
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
