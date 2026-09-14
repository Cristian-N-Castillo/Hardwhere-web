import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Arrow, Label, LinkButton, Section, TextLink, Title } from "@/components/ui";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: { title: service.seoTitle, description: service.seoDescription },
  };
}

export default async function ServicePage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow={`Servicios / ${String(index + 1).padStart(2, "0")}`} title={service.name} description={service.intro}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contacto">Cotizar este servicio</LinkButton>
          <LinkButton href="/casos" variant="secondary">
            Ver casos
          </LinkButton>
        </div>
      </PageHero>

      <Section label="Qué incluye" index="01" innerClassName="pb-0 sm:pb-0">
        <Title>
          {service.tagline}
        </Title>
        <ol className="-mx-5 mt-14 grid border-t border-ink/15 sm:-mx-10 md:grid-cols-2">
          {service.includes.map((item, i) => (
            <li
              key={item.title}
              className="border-b border-ink/15 px-5 py-10 last:border-b-0 sm:px-10 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="label-mono text-ink/50">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-display-sm">{item.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-ink/65">{item.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-b border-ink/15">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-[1.3fr_1fr] lg:border-x lg:border-ink/15">
          <div className="border-b border-ink/15 px-5 py-16 sm:px-10 lg:border-r lg:border-b-0">
            <Label>(02) Para quién es</Label>
            <ul className="mt-8 space-y-5">
              {service.forWhom.map((item) => (
                <li key={item} className="flex gap-4 text-lg">
                  <span aria-hidden className="text-ink/40">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <Label className="mt-16">(03) Preguntas frecuentes</Label>
            <div className="mt-6 border-t border-ink/15">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-ink/15 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                    {faq.q}
                    <span className="text-2xl font-light leading-none transition-transform group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink/65">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="flex flex-col">
            <div className="flex-1 bg-white px-5 py-16 sm:px-10">
              <Label>Entregables</Label>
              <ul className="mt-6 divide-y divide-ink/10">
                {service.deliverables.map((d, i) => (
                  <li key={d} className="flex gap-4 py-3.5 text-sm">
                    <span className="label-mono pt-0.5 text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink px-5 py-12 text-cream sm:px-10">
              <Label dark>Ley 21.719, incluida</Label>
              <p className="mt-5 text-lg leading-relaxed">{service.compliance}</p>
              <TextLink href="/cumplimiento-ley-21719" className="mt-8">
                Leer la guía
              </TextLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
          <div className="border-b border-ink/15 px-5 py-3 sm:px-10">
            <Label>Otros servicios</Label>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5">
            {others.map(({ slug: s, name }) => (
              <li key={s} className="border-b border-ink/15 sm:border-r lg:border-b-0 lg:last:border-r-0">
                <Link
                  href={`/servicios/${s}`}
                  className="group flex h-full items-end justify-between gap-4 px-5 py-8 font-display text-display-sm transition-colors hover:bg-ink hover:text-cream sm:px-8"
                >
                  {name}
                  <Arrow className="text-xl" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.seoDescription,
          serviceType: service.name,
          areaServed: { "@type": "Country", name: "Chile" },
          provider: { "@type": "Organization", name: site.name, legalName: site.legalName, url: site.url },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
