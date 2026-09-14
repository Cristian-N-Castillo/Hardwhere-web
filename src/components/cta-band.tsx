import Link from "next/link";
import { Arrow, Title } from "@/components/ui";

const paths = [
  {
    href: "/empresas-e-instituciones",
    label: "Empresas, instituciones y colegios",
    title: "Soy una empresa o institución",
    text: "Licitaciones, sostenedores y proyectos con metodología formal y documentación al día.",
  },
  {
    href: "/pymes",
    label: "PyMEs y emprendimientos",
    title: "Necesito un sistema para mi negocio",
    text: "Precios desde, plazos claros y lenguaje simple. Sin letra chica.",
  },
];

export function AudienceCards() {
  return (
    <div className="grid border-t border-ink/15 md:grid-cols-2">
      {paths.map((p, i) => (
        <Link
          key={p.href}
          href={p.href}
          className={
            "group flex min-h-52 flex-col justify-between gap-10 border-b border-ink/15 px-5 py-10 transition-colors hover:bg-ink hover:text-cream sm:px-10 md:border-b-0" +
            (i === 0 ? " md:border-r" : "")
          }
        >
          <div className="flex items-center justify-between">
            <span className="label-mono opacity-60">{p.label}</span>
            <span className="label-mono opacity-60">(0{i + 1})</span>
          </div>
          <div>
            <p className="font-display text-display-md">{p.title}</p>
            <div className="mt-5 flex items-end justify-between gap-6">
              <p className="max-w-sm text-sm leading-relaxed opacity-70">{p.text}</p>
              <Arrow className="text-2xl" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "¿Conversamos sobre tu proyecto?",
  description = "Cuéntanos qué necesitas. Te respondemos con una propuesta clara, sin compromiso.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-b border-ink/15 bg-cream-deep">
      <div className="mx-auto max-w-[1280px] lg:border-x lg:border-ink/15">
        <div className="grid gap-6 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Title>{title}</Title>
          <p className="max-w-md text-base leading-relaxed sm:text-lg text-ink/65">{description}</p>
        </div>
        <AudienceCards />
      </div>
    </section>
  );
}
