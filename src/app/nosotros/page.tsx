import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Label, Pending, Section, SectionHeading } from "@/components/ui";
import { site } from "@/content/site";
import { initials, team } from "@/content/team";

export const metadata: Metadata = {
  title: "Nosotros: el equipo detrás de HardWhere",
  description:
    "Seis socios fundadores con igual voz en cada decisión. Conoce a las personas, los roles y los datos legales de HardWhere.",
  alternates: { canonical: "/nosotros" },
};

const values = [
  {
    title: "Igual voz",
    text: "Los seis socios tienen el mismo peso en las decisiones de la empresa, independiente de su área. Así evitamos que una sola mirada domine los proyectos.",
  },
  {
    title: "Seguridad por defecto",
    text: "La protección de datos no es un servicio adicional: es parte de cómo construimos todo, desde la primera línea de código.",
  },
  {
    title: "Honestidad técnica",
    text: "Te decimos lo que vemos, aunque signifique un proyecto más chico o que no nos necesites.",
  },
  {
    title: "Cercanía",
    text: "Hablas con los socios, no con un intermediario. Quien te propone algo es quien responde por ello.",
  },
];

export default function NosotrosPage() {
  const legal = [
    { k: "Razón social", v: site.legalName },
    { k: "RUT", v: site.rut },
    { k: "Domicilio", v: site.address ?? <Pending>Dirección por confirmar</Pending> },
    {
      k: "Correo",
      v: (
        <a href={`mailto:${site.email}`} className="underline underline-offset-2">
          {site.email}
        </a>
      ),
    },
    { k: "Socios", v: "6 socios fundadores" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title={
          <>
            Seis socios fundadores. <em>Igual voz en cada decisión.</em>
          </>
        }
        description="HardWhere es una empresa chilena de software y tecnología. Detrás hay personas reales, con nombre, rol y responsabilidad sobre lo que entregamos. Los seis socios son desarrolladores full stack."
      />

      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
          <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3 sm:px-10">
            <Label>Equipo</Label>
            <Label>(01)</Label>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p, i) => (
              <li
                key={p.name}
                className="border-b border-ink/15 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
              >
                {p.photo ? (
                  <Image
                    src={p.photo}
                    alt={`Fotografía de ${p.name}`}
                    width={640}
                    height={720}
                    className="aspect-[5/4] w-full object-cover grayscale"
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Iniciales de ${p.name}`}
                    className="relative flex aspect-[5/4] w-full items-center justify-center bg-cream-deep bg-hatch"
                  >
                    <span className="font-display text-4xl font-light">{initials(p.name)}</span>
                    <span className="label-mono absolute bottom-4 left-5 text-ink/45">Foto por confirmar</span>
                  </div>
                )}
                <div className="border-t border-ink/15 p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-display-sm">{p.name}</h2>
                    <span className="label-mono text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="label-mono mt-2">{p.role}</p>
                  <p className="label-mono mt-1 text-ink/45">Socio fundador · Full stack</p>
                  <p className="mt-5 text-sm leading-relaxed text-ink/65">{p.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section index="02" label="Cómo pensamos" tone="ink" innerClassName="pb-0 sm:pb-0">
        <SectionHeading dark title={<>Lo que <em>no transamos.</em></>} />
        <ol className="-mx-5 mt-14 grid border-t border-cream/15 sm:-mx-10 md:grid-cols-2">
          {values.map((v, i) => (
            <li
              key={v.title}
              className="border-b border-cream/15 px-5 py-10 last:border-b-0 sm:px-10 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="label-mono text-cream/45">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-display-md">{v.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-cream/65">{v.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="03" label="Datos legales">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading
            title={
              <>
                Una empresa formal, <em>con antecedentes a la vista.</em>
              </>
            }
            description="Estos son nuestros datos de constitución. ¿Evalúas una propuesta o licitación? Te enviamos la documentación de respaldo y la trayectoria de cada socio."
          />
          <dl className="self-start bg-white ring-1 ring-ink">
            {legal.map((row, i) => (
              <div key={row.k} className={"grid grid-cols-[8.5rem_1fr] gap-4 px-6 py-5 " + (i > 0 ? "border-t border-ink/15" : "")}>
                <dt className="label-mono pt-1 text-ink/50">{row.k}</dt>
                <dd className="font-medium">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          legalName: site.legalName,
          url: site.url,
          founder: team.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
          numberOfEmployees: { "@type": "QuantitativeValue", value: team.length },
        }}
      />
    </>
  );
}
