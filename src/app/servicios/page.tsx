import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Arrow } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Servicios de software, cloud y ciberseguridad",
  description:
    "Desarrollo de software a medida, aplicaciones web y móviles, gestión cloud, ciberseguridad, consultoría TI e infraestructura para empresas e instituciones en Chile.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={
          <>
            Un solo equipo para construir, operar <em>y proteger tu tecnología.</em>
          </>
        }
        description="Seis líneas de servicio que se combinan según lo que necesitas. Todas incluyen seguridad y protección de datos desde el diseño, porque así lo exige la Ley 21.719 y porque es la forma correcta de hacerlo."
      />
      <section className="border-b border-ink/15">
        <ul className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
          {services.map(({ slug, name, tagline, intro, includes }, i) => (
            <li key={slug} className="border-b border-ink/15 last:border-b-0">
              <Link
                href={`/servicios/${slug}`}
                className="group grid gap-6 px-5 py-10 transition-colors hover:bg-ink hover:text-cream sm:px-10 lg:grid-cols-[4rem_1fr_1fr_auto] lg:gap-10"
              >
                <span className="label-mono pt-3 opacity-50">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-display-lg">{name}</h2>
                  <p className="mt-3 text-base opacity-75">{tagline}</p>
                </div>
                <div>
                  <p className="leading-relaxed opacity-70">{intro}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {includes.map((item) => (
                      <li key={item.title} className="label-mono px-2 py-1 ring-1 ring-current/30">
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <Arrow className="hidden pt-2 text-3xl lg:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
