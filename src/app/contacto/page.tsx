import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Label, Pending, TextLink } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos para cotizar un proyecto, preparar una licitación o revisar tu cumplimiento de la Ley 21.719.",
  alternates: { canonical: "/contacto" },
};

const tipos = new Set(["institucion", "empresa", "pyme", "colegio", "otro"]);

export default async function ContactoPage({ searchParams }: PageProps<"/contacto">) {
  const { tipo } = await searchParams;
  const defaultTipo = typeof tipo === "string" && tipos.has(tipo) ? tipo : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Cuéntanos <em>qué necesitas.</em>
          </>
        }
        description="Te responde uno de los socios, normalmente dentro de un día hábil. Sin compromiso y sin llamadas de venta insistentes."
      />
      <section className="border-b border-ink/15">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-[1.5fr_1fr] lg:border-x lg:border-ink/15">
          <div className="border-b border-ink/15 bg-white px-5 py-14 sm:px-10 lg:border-r lg:border-b-0">
            <Label>(01) Formulario</Label>
            <div className="mt-10">
              <ContactForm defaultTipo={defaultTipo} />
            </div>
          </div>

          <aside className="flex flex-col">
            <div className="border-b border-ink/15 px-5 py-14 sm:px-10">
              <Label>(02) Directo</Label>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="label-mono text-ink/45">Correo</dt>
                  <dd className="mt-1.5">
                    <a href={`mailto:${site.email}`} className="text-lg font-medium break-all underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/45">Teléfono</dt>
                  <dd className="mt-1.5 text-lg font-medium">
                    {site.phone ? <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> : <Pending>Por confirmar</Pending>}
                  </dd>
                </div>
                <div>
                  <dt className="label-mono text-ink/45">Oficina</dt>
                  <dd className="mt-1.5 text-lg font-medium">
                    {site.comuna ? `${site.comuna}, ${site.region}, Chile` : <Pending>Por confirmar</Pending>}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex-1 bg-ink px-5 py-14 text-cream sm:px-10">
              <Label dark>(03) Qué hacemos con tus datos</Label>
              <ul className="mt-8 space-y-4 text-sm leading-relaxed text-cream/80">
                {[
                  "Los usamos solo para responder tu consulta y, si corresponde, preparar una propuesta.",
                  "No los vendemos ni los compartimos con fines publicitarios.",
                  "Registramos la fecha y la versión de la política que aceptaste.",
                  "Puedes pedir acceso, corrección o eliminación cuando quieras.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden>✳</span>
                    {t}
                  </li>
                ))}
              </ul>
              <TextLink href="/privacidad" className="mt-10">
                Leer la política de privacidad
              </TextLink>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
