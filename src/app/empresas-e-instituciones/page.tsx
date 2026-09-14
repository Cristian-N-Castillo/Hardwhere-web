import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Arrow, LinkButton, Section, SectionHeading, TextLink } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Empresas e instituciones: licitaciones, UTP y proyectos TI",
  description:
    "Capacidades, metodología y documentación de HardWhere para licitaciones públicas y privadas, sostenedores y proyectos institucionales. Disposición a UTP y consorcios.",
  alternates: { canonical: "/empresas-e-instituciones" },
};

const method = [
  { phase: "Diagnóstico", text: "Levantamiento de requerimientos, sistemas actuales, datos involucrados y restricciones normativas." },
  { phase: "Propuesta técnica y económica", text: "Alcance, cronograma, equipo asignado, entregables verificables y precio cerrado por etapa." },
  { phase: "Ejecución por etapas", text: "Entregas funcionales con actas de recepción, informes de avance y gestión formal de cambios." },
  { phase: "Puesta en marcha", text: "Pruebas de aceptación, capacitación, documentación técnica y traspaso ordenado." },
  { phase: "Operación y garantía", text: "Período de garantía, soporte con niveles de servicio acordados y mantención evolutiva." },
];

const formats = [
  {
    title: "Licitaciones públicas y privadas",
    text: "Preparamos ofertas técnicas y económicas ajustadas a las bases, respondemos consultas en los plazos del proceso y cumplimos los requisitos formales de principio a fin.",
  },
  {
    title: "UTP y consorcios",
    text: "Estamos disponibles para conformar uniones temporales de proveedores y consorcios, aportando la capacidad de desarrollo, ciberseguridad o cumplimiento de la Ley 21.719 que su oferta necesite.",
  },
  {
    title: "Sostenedores y colegios",
    text: "Entendemos el calendario escolar, los procesos de compra con rendición de recursos y la sensibilidad de los datos de estudiantes. Planificamos las intervenciones para no interrumpir las clases.",
  },
];

const documents = [
  "Escritura de constitución y certificado de vigencia de la sociedad",
  "Certificados tributarios, laborales y previsionales al día",
  "Boletas de garantía de seriedad de la oferta y de fiel cumplimiento",
  "Antecedentes y trayectoria de cada socio",
  "Declaraciones juradas requeridas por las bases",
  "Metodología, plan de trabajo y carta Gantt del proyecto",
];

const providerControls = [
  "Contrato de encargo de tratamiento con obligaciones de seguridad y confidencialidad",
  "Registro de auditoría en todos los sistemas que desarrollamos u operamos",
  "Procedimiento de reporte de incidentes coordinado con su institución",
  "Información clara sobre dónde se almacenan los datos",
];

export default function InstitucionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresas e instituciones"
        title={
          <>
            Un proveedor tecnológico formal, <em>que entiende cómo compra su institución.</em>
          </>
        }
        description="Trabajamos con empresas, organismos públicos, sostenedores y colegios. Conocemos los procesos de licitación, la documentación que se exige y los plazos que no se mueven."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contacto?tipo=institucion">Solicitar una reunión</LinkButton>
          <LinkButton href="/nosotros" variant="secondary">
            Conocer al equipo
          </LinkButton>
        </div>
      </PageHero>

      <Section index="01" label="Capacidades" innerClassName="pb-0 sm:pb-0">
        <SectionHeading
          title={
            <>
              Seis líneas de servicio, <em>un solo responsable.</em>
            </>
          }
          description="Podemos hacernos cargo de un proyecto completo o de una parte específica dentro de un proyecto mayor."
        />
        <ul className="-mx-5 mt-14 grid border-t border-ink/15 sm:-mx-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, name, seoDescription }, i) => (
            <li
              key={slug}
              className="border-b border-ink/15 last:border-b-0 md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <Link href={`/servicios/${slug}`} className="group flex h-full flex-col px-5 py-10 transition-colors hover:bg-ink hover:text-cream sm:px-10">
                <span className="label-mono opacity-50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-display-sm">{name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed opacity-65">{seoDescription}</p>
                <Arrow className="mt-6 text-xl" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="02" label="Metodología" tone="deep">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            title={
              <>
                Etapas verificables, <em>entregables con acta de recepción.</em>
              </>
            }
            description="Cada etapa termina con un entregable concreto que su equipo puede revisar y aprobar. Así el avance se mide con hechos, no con porcentajes."
          />
          <ol className="border-t border-ink">
            {method.map((m, i) => (
              <li key={m.phase} className="grid gap-2 border-b border-ink/15 py-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-display-md font-light leading-none">{i + 1}</span>
                <div>
                  <h3 className="font-medium">{m.phase}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <section className="border-b border-ink/15">
        <ul className="mx-auto grid max-w-[1280px] lg:grid-cols-3 lg:border-x lg:border-ink/15">
          {formats.map((f, i) => (
            <li key={f.title} className="border-b border-ink/15 px-5 py-14 last:border-b-0 sm:px-10 lg:border-r lg:border-b-0 lg:last:border-r-0">
              <span className="label-mono text-ink/50">(03.{i + 1})</span>
              <h2 className="mt-4 font-display text-display-md">{f.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">{f.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <Section index="04" label="Documentación" tone="ink">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              title={
                <>
                  Documentación disponible <em>para procesos de compra.</em>
                </>
              }
              description="Preparamos y mantenemos al día los antecedentes que habitualmente exigen las bases. Si su proceso requiere algo adicional, lo gestionamos."
            />
            <TextLink href="/contacto?tipo=institucion" className="mt-10">
              Solicitar antecedentes
            </TextLink>
          </div>
          <ol className="border-t border-cream/30">
            {documents.map((d, i) => (
              <li key={d} className="flex gap-5 border-b border-cream/15 py-4 text-cream/85">
                <span className="label-mono pt-1 text-cream/40">{String(i + 1).padStart(2, "0")}</span>
                {d}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section index="05" label="Ley 21.719">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            title={
              <>
                Su proveedor también es <em>parte de su cumplimiento.</em>
              </>
            }
            description="Cuando un proveedor trata datos por encargo de su institución, sus controles son parte de su responsabilidad. Nosotros los documentamos y los ponemos a disposición."
          />
          <ul className="bg-white ring-1 ring-ink">
            {providerControls.map((item, i) => (
              <li key={item} className={"flex gap-4 px-6 py-5 " + (i > 0 ? "border-t border-ink/15" : "")}>
                <span aria-hidden>✳</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand
        title="Conversemos sobre su próximo proyecto o licitación."
        description="Agende una reunión con los socios. Le respondemos con una propuesta formal."
      />
    </>
  );
}
