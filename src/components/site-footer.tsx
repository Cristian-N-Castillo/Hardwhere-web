import Link from "next/link";
import { Logo } from "@/components/logo";
import { Pending } from "@/components/ui";
import { services } from "@/content/services";
import { site } from "@/content/site";

const columns = [
  {
    title: "Servicios",
    links: services.map((s) => ({ href: `/servicios/${s.slug}`, label: s.name })),
  },
  {
    title: "Empresa",
    links: [
      { href: "/nosotros", label: "Nosotros" },
      { href: "/casos", label: "Casos" },
      { href: "/empresas-e-instituciones", label: "Empresas e instituciones" },
      { href: "/pymes", label: "PyMEs" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/cumplimiento-ley-21719", label: "Guía Ley 21.719" },
      { href: "/cumplimiento-ley-21719#checklist", label: "Checklist de cumplimiento" },
      { href: "/blog", label: "Blog" },
      { href: "/privacidad", label: "Política de privacidad" },
      { href: "/terminos", label: "Términos de uso" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-ink text-cream print:hidden">
      <div className="mx-auto max-w-[1280px] lg:border-x lg:border-cream/15">
        <div className="grid border-b border-cream/15 lg:grid-cols-[1.2fr_2fr]">
          <div className="border-b border-cream/15 px-5 py-14 sm:px-10 lg:border-r lg:border-b-0">
            <p className="label-mono text-cream/50">Escríbenos</p>
            <p className="mt-4 font-display text-display-lg">
              ¿Conversamos<em> sobre tu proyecto?</em>
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block border-b border-cream/40 pb-1 text-base break-all hover:border-cream sm:text-lg"
            >
              {site.email}
            </a>
            <dl className="mt-8 space-y-2 text-sm text-cream/70">
              <div className="flex gap-3">
                <dt className="label-mono w-20 shrink-0 pt-0.5 text-cream/40">Teléfono</dt>
                <dd>{site.phone ?? <Pending dark>Por confirmar</Pending>}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="label-mono w-20 shrink-0 pt-0.5 text-cream/40">Oficina</dt>
                <dd>{site.comuna ? `${site.comuna}, ${site.region}` : <Pending dark>Por confirmar</Pending>}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-10 px-5 py-14 sm:grid-cols-3 sm:px-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="label-mono text-cream/50">{col.title}</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-cream/80 hover:text-cream hover:underline hover:underline-offset-4">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 px-5 py-6 text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <Logo dark />
          <p className="label-mono">Software · Cloud · Ciberseguridad · Chile</p>
        </div>

        <div className="flex flex-col gap-2 border-t border-cream/15 px-5 py-5 text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="label-mono">
            © {new Date().getFullYear()} {site.legalName} · RUT {site.rut}
          </p>
          <p className="label-mono">Sin cookies de seguimiento</p>
        </div>
      </div>
    </footer>
  );
}
