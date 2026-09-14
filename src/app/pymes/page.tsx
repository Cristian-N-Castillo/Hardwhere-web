import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { LinkButton, Pending, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sistemas y software para PyMEs en Chile: precios desde",
  description:
    "Páginas web, agendamiento en línea, tiendas, inventario y apps para PyMEs. Precios desde, plazos claros y lenguaje simple.",
  alternates: { canonical: "/pymes" },
};

type Offer = {
  title: string;
  example: string;
  includes: string[];
  // Precio en CLP + IVA. Definir con los socios; null se muestra como "por definir".
  priceFrom: number | null;
  timeframe: string;
};

const offers: Offer[] = [
  {
    title: "Página web profesional",
    example: "Para que te encuentren en Google y te contacten por WhatsApp o formulario.",
    includes: ["Hasta 5 secciones", "Adaptada a celulares", "Formulario de contacto", "Política de privacidad incluida"],
    priceFrom: null,
    timeframe: "2 a 3 semanas",
  },
  {
    title: "Agenda y reservas en línea",
    example: "Tus clientes reservan solos y reciben recordatorios. Tú dejas de coordinar por chat.",
    includes: ["Página de reservas", "Recordatorios automáticos", "Panel para tu equipo", "Historial de clientes"],
    priceFrom: null,
    timeframe: "1 a 3 semanas",
  },
  {
    title: "Tienda online",
    example: "Vende por internet con pago en línea y control de stock.",
    includes: ["Catálogo de productos", "Pago con tarjeta y transferencia", "Control de stock", "Avisos de pedido"],
    priceFrom: null,
    timeframe: "4 a 6 semanas",
  },
  {
    title: "Inventario y ventas",
    example: "Deja la planilla: sabe qué tienes, qué vendiste y qué tienes que reponer.",
    includes: ["Productos y bodegas", "Ventas y compras", "Reportes simples", "Usuarios con permisos"],
    priceFrom: null,
    timeframe: "4 a 8 semanas",
  },
  {
    title: "App para tu equipo en terreno",
    example: "Tus técnicos o vendedores registran visitas, fotos y firmas desde el celular.",
    includes: ["Formularios a medida", "Fotos y geolocalización", "Funciona sin señal", "Reportes para la oficina"],
    priceFrom: null,
    timeframe: "6 a 10 semanas",
  },
  {
    title: "Respaldo y seguridad básica",
    example: "Que un computador robado o un virus no te haga perder tu información.",
    includes: ["Respaldo automático", "Cuentas con doble verificación", "Revisión de equipos", "Guía para tu equipo"],
    priceFrom: null,
    timeframe: "1 semana",
  },
];

const clp = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

const faqs = [
  {
    q: "¿Por qué dicen \"desde\"?",
    a: "Porque cada negocio es distinto. El precio \"desde\" corresponde a la versión base. Antes de empezar te damos un precio cerrado por escrito, y no cambia a menos que tú pidas cambios.",
  },
  {
    q: "No sé nada de tecnología, ¿me sirve?",
    a: "Sí. Te explicamos todo en lenguaje simple y te enseñamos a usar lo que construimos. Si algo no lo necesitas, te lo decimos.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Tienes un período de garantía para corregir cualquier error sin costo. Después puedes contratar una mantención mensual o seguir por tu cuenta.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Normalmente en dos o tres cuotas asociadas a avances del proyecto. Emitimos factura.",
  },
];

export default function PymesPage() {
  return (
    <>
      <PageHero
        eyebrow="PyMEs y emprendimientos"
        title={
          <>
            Un sistema para tu negocio, <em>con precio y plazo desde el primer día.</em>
          </>
        }
        description="Sin letra chica ni palabras técnicas. Te decimos cuánto cuesta, cuánto demora y qué recibes. Y lo que construimos es tuyo."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contacto?tipo=pyme">Pedir una cotización</LinkButton>
          <LinkButton href="#soluciones" variant="secondary" arrow={false}>
            Ver soluciones y precios ↓
          </LinkButton>
        </div>
      </PageHero>

      <Section id="soluciones" index="01" label="Soluciones" tone="deep" className="scroll-mt-24">
        <SectionHeading
          title={
            <>
              Lo que más nos piden, <em>con precio desde.</em>
            </>
          }
          description="Valores referenciales en pesos chilenos, más IVA. Te entregamos un precio cerrado antes de empezar."
        />
        <ul className="mt-14 grid gap-px bg-ink ring-1 ring-ink md:grid-cols-2 lg:grid-cols-3">
          {offers.map(({ title, example, includes, priceFrom, timeframe }, i) => (
            <li key={title} className="flex flex-col bg-white p-7 sm:p-8">
              <div className="flex items-baseline justify-between">
                <span className="label-mono text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                <span className="label-mono text-ink/55">{timeframe}</span>
              </div>
              <h3 className="mt-6 font-display text-display-md">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{example}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-ink/35">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink pt-5">
                <p className="label-mono text-ink/50">Desde</p>
                <p className="mt-2 font-display text-display-md">
                  {priceFrom ? (
                    <>
                      {clp.format(priceFrom)} <span className="font-sans text-sm text-ink/55">+ IVA</span>
                    </>
                  ) : (
                    <span className="text-base">
                      <Pending>Precio por definir</Pending>
                    </span>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-ink/65">
          ¿No ves lo que necesitas? Cuéntanos tu problema; es probable que ya lo hayamos resuelto antes.
        </p>
      </Section>

      <Section index="02" label="Preguntas">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            title={
              <>
                Lo que todo dueño de negocio <em>pregunta.</em>
              </>
            }
          />
          <div className="border-t border-ink">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-ink/15 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                  {faq.q}
                  <span className="text-3xl leading-none transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink/65">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand title="Cuéntanos qué necesita tu negocio." description="Te respondemos con un precio y un plazo. Sin compromiso." />
    </>
  );
}
