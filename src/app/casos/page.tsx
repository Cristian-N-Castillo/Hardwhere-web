import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Badge, Label, Pending, Section } from "@/components/ui";
import { cases, type CaseStudy } from "@/content/cases";

export const metadata: Metadata = {
  title: "Casos y portafolio",
  description:
    "Productos propios y trabajo previo del equipo de HardWhere, contados con contexto, problema, solución y resultado.",
  alternates: { canonical: "/casos" },
};

function CaseArticle({ c, n }: { c: CaseStudy; n: number }) {
  return (
    <article id={c.slug} className="scroll-mt-28 bg-white ring-1 ring-ink">
      <header className="border-b border-ink p-6 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Badge solid>{c.kind === "producto-propio" ? "Producto propio" : "Trabajo previo de nuestro equipo"}</Badge>
            {c.draft && <Pending>Texto por validar</Pending>}
          </div>
          <span className="label-mono text-ink/50">Caso {String(n).padStart(2, "0")}</span>
        </div>
        <h2 className="mt-6 font-display text-display-xl">{c.title}</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink/70">{c.summary}</p>
      </header>
      <div className="grid md:grid-cols-2">
        <section className="border-b border-ink/15 p-6 sm:p-10 md:border-r">
          <Label>A — Contexto</Label>
          <p className="mt-4 leading-relaxed text-ink/75">{c.context}</p>
        </section>
        <section className="border-b border-ink/15 p-6 sm:p-10">
          <Label>B — Problema</Label>
          <p className="mt-4 leading-relaxed text-ink/75">{c.problem}</p>
        </section>
        <section className="border-b border-ink/15 p-6 sm:p-10 md:border-r md:border-b-0">
          <Label>C — Qué construimos</Label>
          <ul className="mt-4 space-y-3">
            {c.built.map((b) => (
              <li key={b} className="flex gap-3 text-ink/75">
                <span aria-hidden className="text-ink/40">—</span>
                {b}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-ink p-6 text-cream sm:p-10">
          <Label dark>D — Resultado</Label>
          <p className="mt-4 font-display text-display-sm">
            {c.result ?? <Pending dark>Resultados y métricas reales por completar</Pending>}
          </p>
        </section>
      </div>
    </article>
  );
}

export default function CasosPage() {
  const own = cases.filter((c) => c.kind === "producto-propio");
  const previous = cases.filter((c) => c.kind === "trabajo-previo");

  return (
    <>
      <PageHero
        eyebrow="Casos"
        title={
          <>
            Un caso bien contado vale más <em>que seis logos sueltos.</em>
          </>
        }
        description="Somos una empresa nueva, con un equipo que no lo es. Aquí publicamos nuestros productos propios y el trabajo previo de los socios, siempre identificado como tal."
      />

      <Section index="01" label="Productos propios" tone="deep">
        <p className="max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          Lo que construimos y operamos nosotros mismos. Es la mejor prueba de cómo trabajamos, porque aquí el cliente
          somos nosotros.
        </p>
        <div className="mt-12 space-y-10">
          {own.map((c, i) => (
            <CaseArticle key={c.slug} c={c} n={i + 1} />
          ))}
        </div>
      </Section>

      <Section index="02" label="Trabajo previo de nuestro equipo">
        <p className="max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          Proyectos en los que participaron nuestros socios antes de fundar HardWhere. Los mostramos con permiso y sin
          atribuirnos lo que no hicimos como empresa.
        </p>
        {previous.length > 0 ? (
          <div className="mt-12 space-y-10">
            {previous.map((c, i) => (
              <CaseArticle key={c.slug} c={c} n={own.length + i + 1} />
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-ink/40 p-8 sm:p-10">
            <p className="font-display text-display-md">
              En preparación. <em>Preferimos contarlos bien.</em>
            </p>
            <p className="mt-4 max-w-2xl text-ink/65">
              Estamos documentando estos proyectos con el detalle que merecen. Si necesitas antecedentes para una
              licitación o una evaluación, te los enviamos directamente.
            </p>
          </div>
        )}
      </Section>

      <CtaBand title="¿Quieres ser nuestro próximo caso?" />
    </>
  );
}
