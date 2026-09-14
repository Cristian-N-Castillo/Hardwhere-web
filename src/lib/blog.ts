import type { MDXContent } from "mdx/types";

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  tags: string[];
};

// Para publicar un artículo: crear src/content/blog/<slug>.mdx con `export const metadata` y agregar el slug aquí.
export const postSlugs = [
  "que-cambia-ley-21719-1-diciembre-2026",
  "evidencia-tecnica-fiscalizacion-datos-personales",
  "colegios-datos-estudiantes-ley-21719",
];

export async function getPost(slug: string) {
  if (!postSlugs.includes(slug)) return null;
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as { default: MDXContent; metadata: PostMeta };
  return { slug, ...mod.metadata, Content: mod.default };
}

export async function getPosts() {
  const posts = await Promise.all(postSlugs.map((slug) => getPost(slug)));
  return posts
    .filter((p): p is NonNullable<typeof p> => p !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Santiago" }).format(
    new Date(`${date}T12:00:00-03:00`),
  );
}
