import type { Metadata } from "next";
import Link from "next/link";
import { AuditLog } from "@/components/audit-log";
import { CtaBand } from "@/components/cta-band";
import { Marquee } from "@/components/marquee";
import { Arrow, Badge, Label, LinkButton, Pending, Section, SectionHeading, TextLink, Title } from "@/components/ui";
import { cases } from "@/content/cases";
import { services } from "@/content/services";
import { daysUntilLawDeadline, site } from "@/content/site";
import { initials, team } from "@/content/team";

export const revalidate = 21600;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const steps = [
  { title: "Diagnóstico", text: "Entendemos tu operación, tus datos y tus restricciones antes de proponer nada." },
  { title: "Propuesta clara", text: "Alcance, plazos y precio por escrito. Sin letra chica ni costos sorpresa." },
  { title: "Entregas cortas", text: "Avances funcionales cada dos semanas, que puedes probar y comentar." },
  { title: "Operación y soporte", text: "No desaparecemos al entregar: documentación, capacitación y mantención." },
];

const evidence = [
  { title: "Registros de acceso", text: "Quién vio, modificó o exportó cada dato personal, y cuándo." },
  { title: "Atención de titulares", text: "Solicitudes de acceso, rectificación o supresión, con plazos y respuesta registrada." },
  { title: "Reporte de vulneraciones", text: "Procedimiento probado para reportar a la Agencia sin dilaciones indebidas." },
];

export default function Home() {
  const days = daysUntilLawDeadline();
  const featured = cases[0];

  return (
    <>
      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
          <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3 text-ink/55 sm:px-10">
            <span className="label-mono">Software · Cloud · Ciberseguridad</span>
            <span className="label-mono hidden sm:inline">Hecho en Chile</span>
          </div>
          <div className="px-5 pt-14 pb-12 sm:px-10 sm:pt-20 lg:pb-16">
            <Title as="h1" size="xl" className="max-w-6xl animate-fade-up">
              Construimos el software que tu organización necesita, <em>y lo dejamos listo para la Ley 21.719.</em>
            </Title>
          </div>
          <div className="grid border-t border-ink/15 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-10 border-b border-ink/15 px-5 py-10 sm:px-10 lg:border-r lg:border-b-0 lg:py-12">
              <p className="max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
                Desarrollo a medida, aplicaciones, cloud, ciberseguridad e infraestructura para empresas, instituciones
                y colegios. Implementamos la protección de datos con evidencia técnica, no solo con documentos.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <LinkButton href="/empresas-e-instituciones">Soy una empresa o institución</LinkButton>
                <LinkButton href="/pymes" variant="secondary">
                  Necesito un sistema para mi negocio
                </LinkButton>
              </div>
            </div>
            <div className="bg-cream-deep px-5 py-10 sm:px-10 lg:py-12">
              <AuditLog className="animate-fade-up [animation-delay:200ms]" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Datos de la empresa" className="border-b border-ink/15 bg-white">
        <dl className="mx-auto grid max-w-[1280px] grid-cols-2 lg:grid-cols-4 lg:border-x lg:border-ink/15">
          {[
            { k: "Razón social", v: site.legalName },
            { k: "RUT", v: site.rut },
            { k: "Ubicación", v: site.comuna ? `${site.comuna}, ${site.region}` : <Pending>Por confirmar</Pending> },
            { k: "Equipo", v: "6 socios fundadores" },
          ].map((item, i) => (
            <div
              key={item.k}
              className={
                "border-ink/15 px-5 py-6 sm:px-10 " +
                (i % 2 === 0 ? "border-r " : "lg:border-r ") +
                (i < 2 ? "border-b lg:border-b-0" : "") +
                (i === 3 ? " lg:border-r-0" : "")
              }
            >
              <dt className="label-mono text-ink/50">{item.k}</dt>
              <dd className="mt-2 text-sm font-medium">{item.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Marquee items={services.map((s) => s.name)} />

      <Section index="01" label="Servicios">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            title={
              <>
                Todo lo que tu tecnología necesita, <em>con un solo equipo responsable.</em>
              </>
            }
            description="Desde el primer diagnóstico hasta la operación diaria. Cada servicio incluye seguridad y protección de datos desde el diseño."
          />
          <TextLink href="/servicios" className="shrink-0">
            Ver todos los servicios
          </TextLink>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, name, tagline, icon: Icon }, i) => (
            <li key={slug}>
              <Link
                href={`/servicios/${slug}`}
                className="group flex h-full flex-col bg-white p-7 ring-1 ring-ink/15 transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-ink)] hover:ring-ink sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center ring-1 ring-ink/20 transition-colors duration-300 group-hover:bg-ink group-hover:text-cream group-hover:ring-ink">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="label-mono text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-10 font-display text-display-sm">{name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{tagline}</p>
                <span className="mt-8 inline-flex items-center gap-2 border-t border-ink/10 pt-5 text-sm font-medium">
                  Conocer más <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ink" index="02" label="Nuestro diferenciador" innerClassName="pb-0 sm:pb-0">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <SectionHeading
              dark
              title={
                <>
                  La Ley 21.719 se fiscaliza con evidencia, <em>no con políticas.</em>
                </>
              }
              description="Desde el 1 de diciembre de 2026, la Agencia de Protección de Datos Personales puede fiscalizar y sancionar. Una política bien redactada es necesaria, pero lo que se revisa es si tu operación la cumple."
            />
            <LinkButton href="/cumplimiento-ley-21719" variant="light" className="mt-10">
              Leer la guía práctica
            </LinkButton>
          </div>
          <div className="lg:text-right">
            <p className="font-display text-display-num tabular-nums">{days}</p>
            <p className="label-mono mt-4 text-cream/60">días para la vigencia plena · 01.12.2026</p>
          </div>
        </div>
        <ol className="-mx-5 mt-16 grid border-t border-cream/15 sm:-mx-10 md:grid-cols-3">
          {evidence.map((e, i) => (
            <li key={e.title} className="border-b border-cream/15 px-5 py-8 last:border-b-0 sm:px-10 md:border-r md:border-b-0 md:last:border-r-0">
              <span className="label-mono text-cream/50">Evidencia {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-display-sm">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{e.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index="03" label="Cómo trabajamos" innerClassName="pb-0 sm:pb-0">
        <SectionHeading
          title={
            <>
              Un proceso simple, <em>predecible y a la vista.</em>
            </>
          }
          description="Sabes en qué estamos, qué viene y cuánto cuesta en cada momento del proyecto."
        />
        <ol className="-mx-5 mt-16 grid border-t border-ink/15 sm:-mx-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="border-b border-ink/15 px-5 py-10 last:border-b-0 sm:px-10 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <span className="font-display text-display-md font-light leading-none">{i + 1}</span>
              <h3 className="mt-6 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep" index="04" label="Casos">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title={
                <>
                  Lo que hemos construido, <em>contado con honestidad.</em>
                </>
              }
              description="Somos una empresa nueva con un equipo con experiencia. Publicamos nuestros productos propios y el trabajo previo de los socios, identificado como tal."
            />
            <TextLink href="/casos" className="mt-10">
              Ver casos
            </TextLink>
          </div>
          <Link href={`/casos#${featured.slug}`} className="group block bg-white ring-1 ring-ink transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between border-b border-ink px-6 py-3">
              <Badge solid>Producto propio</Badge>
              <span className="label-mono text-ink/50">Caso 01</span>
            </div>
            <div className="p-6 sm:p-10">
              <p className="font-display text-display-lg">{featured.title}</p>
              <p className="mt-4 text-base leading-relaxed text-ink/75">{featured.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/55">{featured.problem}</p>
              <span className="mt-8 inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm font-medium">
                Leer el caso <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </Section>

      <Section index="05" label="Equipo" innerClassName="pb-0 sm:pb-0">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            title={
              <>
                Seis socios fundadores. <em>Igual voz en cada decisión.</em>
              </>
            }
            description="Detrás de HardWhere hay personas reales, con nombre y rol. Los seis socios son desarrolladores full stack: quien te atiende entiende cómo se construye lo que te propone."
          />
          <TextLink href="/nosotros" className="shrink-0">
            Conocer al equipo
          </TextLink>
        </div>
        <ul className="-mx-5 mt-16 grid border-t border-ink/15 sm:-mx-10 md:grid-cols-2">
          {team.map((p) => (
            <li
              key={p.name}
              className="flex items-center gap-5 border-b border-ink/15 px-5 py-5 last:border-b-0 sm:px-10 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="flex size-11 shrink-0 items-center justify-center bg-ink text-sm font-medium text-cream">
                {initials(p.name)}
              </span>
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-display text-display-sm">{p.name}</p>
                <Label>{p.role}</Label>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="¿Cuál es tu caso?" />
    </>
  );
}
