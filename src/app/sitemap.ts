import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { getPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const url = (path: string) => `${site.url}${path}`;

  const pages: Array<[string, number]> = [
    ["/", 1],
    ["/cumplimiento-ley-21719", 0.95],
    ["/servicios", 0.9],
    ["/empresas-e-instituciones", 0.85],
    ["/pymes", 0.85],
    ["/casos", 0.7],
    ["/nosotros", 0.7],
    ["/blog", 0.7],
    ["/contacto", 0.6],
    ["/privacidad", 0.3],
    ["/terminos", 0.3],
  ];

  return [
    ...pages.map(([path, priority]) => ({ url: url(path), priority })),
    ...services.map((s) => ({ url: url(`/servicios/${s.slug}`), priority: 0.8 })),
    ...posts.map((p) => ({ url: url(`/blog/${p.slug}`), lastModified: p.date, priority: 0.6 })),
  ];
}
