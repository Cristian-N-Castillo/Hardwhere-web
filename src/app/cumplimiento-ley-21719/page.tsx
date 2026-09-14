import type { Metadata } from "next";
import { ChecklistForm } from "@/components/checklist-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { LinkButton, TextLink } from "@/components/ui";
import { checklist, checklistItemCount } from "@/content/checklist";
import { daysUntilLawDeadline, site } from "@/content/site";

// Contenido normativo: validar con asesoría legal antes de cada actualización.

export const revalidate = 21600;

const title = "Ley 21.719: guía práctica de cumplimiento para el 1 de diciembre de 2026";
const description =
  "Qué obliga la nueva ley de protección de datos personales en Chile, qué cambia el 1 de diciembre de 2026 y qué evidencia técnica pedirá la Agencia: logs, registros de acceso y reporte de vulneraciones.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cumplimiento-ley-21719" },
  openGraph: { type: "article", title, description },
};

const toc = [
  { id: "resumen", label: "La ley en 60 segundos" },
  { id: "que-obliga", label: "Qué obliga" },
  { id: "que-cambia", label: "Qué cambia en diciembre" },
  { id: "evidencia", label: "Evidencia que pide un fiscalizador" },
  { id: "vulneraciones", label: "Reporte de vulneraciones" },
  { id: "colegios", label: "Colegios y sostenedores" },
  { id: "sanciones", label: "Sanciones" },
  { id: "documento-vs-evidencia", label: "Por qué un documento no alcanza" },
  { id: "checklist", label: "Checklist descargable" },
  { id: "preguntas", label: "Preguntas frecuentes" },
];

const facts = [
  { value: "13 dic 2024", label: "Publicación en el Diario Oficial", text: "Moderniza la Ley 19.628 de 1999 sobre protección de la vida privada." },
  { value: "1 dic 2026", label: "Entrada en vigencia", text: "Tras un período de adecuación de 24 meses que termina este año." },
  { value: "Agencia", label: "Nuevo organismo fiscalizador", text: "La Agencia de Protección de Datos Personales podrá fiscalizar, resolver reclamos y sancionar." },
  { value: "20.000 UTM", label: "Multa máxima por infracción gravísima", text: "Más de mil millones de pesos, y más en caso de reincidencia." },
];

const obligations = [
  {
    title: "Principios",
    text: "Licitud y lealtad, finalidad, proporcionalidad, calidad, responsabilidad, seguridad, transparencia y confidencialidad. El de responsabilidad es clave: no basta con cumplir, hay que poder demostrarlo.",
  },
  {
    title: "Una base de licitud para cada tratamiento",
    text: "Consentimiento libre, informado, específico e inequívoco, o alguna otra base legal: obligación legal, ejecución de un contrato, interés legítimo, entre otras. Sin base, el tratamiento es ilícito.",
  },
  {
    title: "Derechos de los titulares",
    text: "Acceso, rectificación, supresión, oposición, portabilidad y bloqueo, además del derecho a no ser objeto de decisiones basadas únicamente en tratamientos automatizados, con excepciones.",
  },
  {
    title: "Deber de seguridad",
    text: "Medidas técnicas y organizativas apropiadas al riesgo: control de accesos, cifrado, respaldos, trazabilidad. La ley no da una lista cerrada; exige que sean adecuadas y demostrables.",
  },
  {
    title: "Reporte de vulneraciones",
    text: "Las vulneraciones de seguridad que generen riesgo para los titulares deben reportarse a la Agencia y, en ciertos casos, comunicarse a las personas afectadas.",
  },
  {
    title: "Datos sensibles y de menores",
    text: "Salud, datos biométricos, situación socioeconómica y datos de niños, niñas y adolescentes tienen reglas reforzadas y exigen un estándar mayor de protección.",
  },
  {
    title: "Proveedores y transferencias",
    text: "Quien trata datos por encargo tuyo debe hacerlo bajo contrato y con garantías. Enviar datos fuera de Chile requiere un nivel adecuado de protección o garantías suficientes.",
  },
  {
    title: "Evaluación de impacto",
    text: "Obligatoria antes de tratamientos de alto riesgo, como el tratamiento masivo de datos sensibles o la observación sistemática de personas.",
  },
  {
    title: "Modelo de prevención de infracciones",
    text: "Voluntario y certificable. Incluye un delegado de protección de datos y controles internos. Funciona como atenuante ante una sanción.",
  },
];

const timeline = [
  { date: "13 dic 2024", title: "Publicación", text: "La ley se publica en el Diario Oficial y comienza el período de adecuación." },
  { date: "Hoy", title: "Estás aquí", text: "Quedan pocos meses para ordenar datos, accesos, procedimientos y evidencia.", current: true },
  { date: "1 dic 2026", title: "Vigencia plena", text: "La Agencia puede fiscalizar, recibir reclamos de los titulares y aplicar sanciones." },
  { date: "Después", title: "Registro público", text: "Las sanciones quedan inscritas en el Registro Nacional de Sanciones y Cumplimiento." },
];

const evidenceRows = [
  {
    question: "¿Quién accedió a los datos de esta persona, y cuándo?",
    evidence: "Registros de acceso por usuario: fecha, hora, acción y registro afectado.",
    how: "Logs de auditoría a nivel de aplicación, centralizados y protegidos contra alteración.",
  },
  {
    question: "¿Quién tiene acceso hoy, y por qué?",
    evidence: "Matriz de roles y permisos, con revisiones periódicas documentadas.",
    how: "Acceso por roles, autenticación multifactor, revisión trimestral y baja al desvincular.",
  },
  {
    question: "¿Qué datos tratan, para qué y con qué base legal?",
    evidence: "Inventario de tratamientos actualizado.",
    how: "Levantamiento por sistema y por proceso, mantenido como documento vivo.",
  },
  {
    question: "¿Cómo respondieron las solicitudes de los titulares?",
    evidence: "Registro de solicitudes: fecha de ingreso, respuesta y cumplimiento del plazo.",
    how: "Canal único, flujo con plazos y herramientas para extraer, corregir o eliminar datos por persona.",
  },
  {
    question: "¿Qué pasó en el último incidente, y cuándo lo reportaron?",
    evidence: "Bitácora del incidente con línea de tiempo, evaluación de riesgo y comunicaciones.",
    how: "Procedimiento de respuesta, plantillas de reporte y simulacros periódicos.",
  },
  {
    question: "¿Cómo protegen los datos?",
    evidence: "Configuraciones de cifrado, respaldos y resultados de pruebas de restauración.",
    how: "Cifrado en tránsito y en reposo, respaldos automáticos y restauraciones de prueba registradas.",
  },
  {
    question: "¿Qué proveedores tratan datos por ustedes, y dónde?",
    evidence: "Contratos de encargo y registro de transferencias internacionales.",
    how: "Revisión contractual con tu asesoría legal y verificación técnica de regiones y medidas.",
  },
];

const incidentClock = [
  { hours: "Hora 0", title: "Detección", text: "Una alerta o un aviso. Se abre la bitácora y se designa a un responsable." },
  { hours: "0–24 h", title: "Contención y alcance", text: "Qué datos, cuántas personas, desde cuándo. Sin registros de acceso, esta pregunta no tiene respuesta." },
  { hours: "24–48 h", title: "Evaluación de riesgo", text: "¿Hay riesgo razonable para los titulares? ¿Involucra datos sensibles, de menores o financieros?" },
  { hours: "48–72 h", title: "Reporte y comunicación", text: "Reporte a la Agencia y, cuando corresponde, comunicación a las personas afectadas." },
  { hours: "Después", title: "Cierre", text: "Medidas correctivas documentadas y lecciones aprendidas incorporadas al procedimiento." },
];

const schoolPoints = [
  "Tratan datos de niños, niñas y adolescentes a gran escala: identificación, notas, asistencia, convivencia escolar.",
  "Muchos son datos sensibles: fichas de salud, necesidades educativas especiales, situación socioeconómica.",
  "Por regla general, los datos de menores de 14 años requieren el consentimiento de padres o representantes legales, y siempre debe primar el interés superior del niño.",
  "Las plataformas de gestión escolar, de aprendizaje y de comunicación con apoderados son proveedores que tratan datos por encargo: requieren contrato y verificación.",
  "Una vulneración que afecte datos de menores debe comunicarse también a las personas afectadas, no solo a la Agencia.",
];

const sanctions = [
  { level: "Leves", amount: "Hasta 5.000 UTM", text: "O amonestación escrita." },
  { level: "Graves", amount: "Hasta 10.000 UTM", text: "Según la naturaleza y las circunstancias de la infracción." },
  { level: "Gravísimas", amount: "Hasta 20.000 UTM", text: "Con montos mayores en caso de reincidencia." },
];

const documentOnly = [
  "Una política de privacidad publicada",
  "Cláusulas de consentimiento en los formularios",
  "Un manual de procedimientos",
  "La declaración de que existen medidas de seguridad",
];

const operational = [
  "Logs que muestran quién accedió a qué dato y cuándo",
  "Consentimientos registrados con fecha y versión del texto",
  "Solicitudes de titulares respondidas en plazo, con registro",
  "Incidentes con bitácora, línea de tiempo y reporte",
  "Accesos revisados y cuentas dadas de baja a tiempo",
];

const faqs = [
  {
    q: "¿La ley aplica a mi organización?",
    a: "Si tratas datos de personas naturales (clientes, trabajadores, estudiantes, apoderados, pacientes), sí. Aplica a empresas de cualquier tamaño y también a los organismos públicos, con reglas específicas para ellos.",
  },
  {
    q: "¿Es obligatorio tener un delegado de protección de datos?",
    a: "No en todos los casos. El delegado es parte del modelo de prevención de infracciones, que es voluntario y puede servir como atenuante. En la práctica, alguien tiene que ser responsable del tema dentro de la organización.",
  },
  {
    q: "¿Basta con actualizar la política de privacidad?",
    a: "No. La política es necesaria, pero describe compromisos. Lo que se fiscaliza es si la operación los cumple: registros de acceso, atención de solicitudes, gestión de incidentes y seguridad demostrable.",
  },
  {
    q: "¿Qué pasa con los datos que ya tenemos?",
    a: "Las nuevas reglas aplican a los tratamientos que se realicen desde la entrada en vigencia, incluidos los datos que ya tienes. Conviene revisar que cada base de datos existente tenga una base de licitud y un plazo de conservación.",
  },
  {
    q: "¿Cuánto cuesta adecuarse?",
    a: "Depende de cuántos sistemas y datos tengas. Un diagnóstico acotado permite dimensionarlo antes de invertir. Muchas brechas se cierran con configuración y procedimientos, no con software nuevo.",
  },
  {
    q: "¿Ustedes reemplazan a un abogado?",
    a: "No. Trabajamos junto a tu asesoría legal: ellos interpretan la norma y redactan los documentos; nosotros implementamos los controles y dejamos la evidencia técnica.",
  },
];

function Part({ id, n, label, children }: { id: string; n: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-ink/15 px-5 py-14 sm:px-10 sm:py-16">
      <p className="label-mono text-ink/50">
        § {n} — {label}
      </p>
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-4 font-display text-display-lg">{children}</h2>;
}

export default function LeyPage() {
  const days = daysUntilLawDeadline();

  return (
    <>
      <PageHero
        dark
        eyebrow="Guía Ley 21.719"
        title={
          <>
            Ley 21.719: lo que tu organización tendrá que <em>poder demostrar</em> desde el 1 de diciembre de 2026.
          </>
        }
        description="Una guía escrita por ingenieros para quienes tienen que implementar. Qué obliga la ley, qué cambia en diciembre y qué evidencia técnica va a pedir la Agencia de Protección de Datos Personales. Léela aunque no nos contrates."
        aside={
          <div className="border border-cream/25 p-6 lg:w-60">
            <p className="font-display text-display-num tabular-nums">{days}</p>
            <p className="label-mono mt-5 text-cream/60">días para la vigencia plena</p>
            <p className="label-mono mt-1 text-cream/40">Revisada · sept. 2026</p>
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#checklist" variant="light">
            Descargar la checklist
          </LinkButton>
          <LinkButton href="/contacto" variant="outlineLight">
            Hablar con el equipo
          </LinkButton>
        </div>
      </PageHero>

      <div className="border-b border-ink/15">
        <div className="mx-auto grid max-w-[1280px] lg:grid-cols-[15rem_1fr] lg:border-x lg:border-ink/15">
          <nav aria-label="Contenido de la guía" className="hidden border-r border-ink/15 lg:block">
            <div className="sticky top-28 px-8 py-16">
              <p className="label-mono text-ink/50">Índice</p>
              <ol className="mt-6 space-y-3 text-sm">
                {toc.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="group flex gap-3 text-ink/65 hover:text-ink">
                      <span className="label-mono pt-0.5 text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className="group-hover:underline group-hover:underline-offset-4">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0 [&>section:last-of-type]:border-b-0">
            <Part id="resumen" n="01" label="Resumen">
              <H2>La ley en 60 segundos</H2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed sm:text-lg text-ink/70">
                La Ley 21.719 reemplaza un régimen de 1999 que tenía sanciones bajas y casi nula fiscalización. Define
                reglas claras para tratar datos personales, amplía los derechos de las personas, crea una Agencia con
                facultades para fiscalizar y fija multas que ya no son simbólicas.
              </p>
              <dl className="mt-12 grid bg-white ring-1 ring-ink/15 sm:grid-cols-2">
                {facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={
                      "border-ink/15 p-7 " +
                      (i % 2 === 0 ? "sm:border-r " : "") +
                      (i < 2 ? "border-b" : i === 2 ? "border-b sm:border-b-0" : "")
                    }
                  >
                    <dt className="label-mono text-ink/50">{f.label}</dt>
                    <dd className="mt-3">
                      <span className="block font-display text-display-md">{f.value}</span>
                      <span className="mt-3 block text-sm leading-relaxed text-ink/65">{f.text}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Part>

            <Part id="que-obliga" n="02" label="Obligaciones">
              <H2>Qué obliga la ley</H2>
              <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">
                Aplica a toda organización, pública o privada, que trate datos de personas naturales. Estas son las
                obligaciones que más impacto tienen en la operación diaria.
              </p>
              <ol className="mt-12 grid gap-x-12 sm:grid-cols-2">
                {obligations.map((o, i) => (
                  <li key={o.title} className="border-t border-ink py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="label-mono text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display text-display-sm">{o.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65 sm:pl-9">{o.text}</p>
                  </li>
                ))}
              </ol>
            </Part>

            <Part id="que-cambia" n="03" label="Plazos">
              <H2>Qué cambia el 1 de diciembre de 2026</H2>
              <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">
                Hasta esa fecha corre el período de adecuación. Desde ese día, la Agencia de Protección de Datos
                Personales puede actuar: recibir reclamos de las personas, fiscalizar de oficio y sancionar. Y la carga
                de demostrar el cumplimiento recae en la organización, no en quien reclama.
              </p>
              <ol className="mt-12 grid border-t border-ink sm:grid-cols-4">
                {timeline.map((t) => (
                  <li
                    key={t.title}
                    className={"relative border-b border-ink/15 px-5 py-7 sm:border-b-0 " + (t.current ? "bg-ink text-cream sm:-mt-px" : "sm:first:pl-0")}
                  >
                    <p className="label-mono opacity-60">{t.date}</p>
                    <h3 className="mt-3 font-display text-display-sm">{t.current ? <em>{t.title}</em> : t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-70">{t.text}</p>
                  </li>
                ))}
              </ol>
            </Part>

            <Part id="evidencia" n="04" label="El corazón de la guía">
              <H2>
                Qué evidencia técnica <em>pide un fiscalizador</em>
              </H2>
              <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">
                Una fiscalización no pregunta si tienes una política. Pregunta cosas concretas, y cada respuesta
                necesita un respaldo que salga de tus sistemas. Estas son las preguntas que conviene poder responder
                hoy, con la evidencia que las sostiene.
              </p>
              <div className="mt-12 overflow-x-auto bg-white ring-1 ring-ink">
                <table className="w-full min-w-[42rem] text-left text-sm">
                  <thead className="bg-ink text-cream">
                    <tr>
                      <th scope="col" className="label-mono w-[36%] px-5 py-4 font-medium">Lo que pregunta el fiscalizador</th>
                      <th scope="col" className="label-mono w-[32%] px-5 py-4 font-medium">Evidencia que lo responde</th>
                      <th scope="col" className="label-mono px-5 py-4 font-medium">Cómo se implementa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/15">
                    {evidenceRows.map((row) => (
                      <tr key={row.question} className="align-top">
                        <th scope="row" className="px-5 py-5 font-medium">
                          {row.question}
                        </th>
                        <td className="px-5 py-5 text-ink/80">{row.evidence}</td>
                        <td className="px-5 py-5 text-ink/60">{row.how}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <aside className="mt-10 border-l-4 border-ink pl-6">
                <p className="font-display text-display-md">
                  Sin logs no hay alcance, <em>y sin alcance no hay reporte.</em>
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
                  Ante un incidente, lo primero que necesitas saber es qué datos se vieron comprometidos y de cuántas
                  personas. Si tus sistemas no registran accesos, esa pregunta no tiene respuesta, y sin ella no puedes
                  evaluar el riesgo ni reportar correctamente.
                </p>
              </aside>
            </Part>

            <Part id="vulneraciones" n="05" label="Incidentes">
              <H2>
                Reporte de vulneraciones: <em>el reloj corre</em>
              </H2>
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-ink/70">
                <p>
                  La ley obliga a reportar a la Agencia,{" "}
                  <strong className="font-medium text-ink">por los medios más expeditos posibles y sin dilaciones indebidas</strong>,
                  las vulneraciones de seguridad que provoquen la destrucción, filtración, pérdida o alteración de datos
                  personales, o su comunicación o acceso no autorizado, cuando exista un riesgo razonable para los
                  derechos de las personas. Si involucran datos sensibles, datos de niños, niñas y adolescentes o datos
                  de carácter económico o financiero, también hay que comunicarlo a los afectados.
                </p>
                <p>
                  La ley no fija un número de horas. Por eso recomendamos diseñar el procedimiento con una{" "}
                  <strong className="font-medium text-ink">meta operativa de 72 horas</strong>: es el plazo que usa el
                  reglamento europeo de protección de datos y el estándar de referencia en la industria. Cumplirlo
                  depende de lo que hayas preparado antes del incidente, no durante.
                </p>
              </div>
              <ol className="mt-12 grid border-t border-ink sm:grid-cols-5">
                {incidentClock.map((step, i) => (
                  <li key={step.title} className="border-b border-ink/15 py-6 pr-5 sm:border-r sm:border-b-0 sm:pl-5 sm:first:pl-0 sm:last:border-r-0">
                    <p className="font-display text-display-md font-light">{step.hours}</p>
                    <h3 className="label-mono mt-4">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink/65">{step.text}</p>
                    <span className="sr-only">Paso {i + 1}</span>
                  </li>
                ))}
              </ol>
            </Part>

            <Part id="colegios" n="06" label="Educación">
              <H2>
                Colegios y sostenedores: <em>los datos más delicados</em>
              </H2>
              <div className="mt-10 bg-white p-7 ring-1 ring-ink/15 sm:p-10">
                <p className="font-display text-display-sm">
                  Pocas organizaciones concentran tantos datos sensibles de menores como un colegio. Eso lo convierte en
                  uno de los sectores donde la ley exige más cuidado.
                </p>
                <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
                  {schoolPoints.map((p, i) => (
                    <li key={p} className="flex gap-4 py-4 text-sm leading-relaxed text-ink/75">
                      <span className="label-mono pt-0.5 text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-lg font-medium">
                  Preguntas para hacerse hoy: ¿quién puede ver la ficha de salud de un estudiante? ¿Queda registro?
                  ¿Siguen activas las cuentas de docentes que ya no trabajan en el colegio?
                </p>
                <TextLink href="/empresas-e-instituciones" className="mt-8">
                  Cómo trabajamos con sostenedores
                </TextLink>
              </div>
            </Part>

            <Part id="sanciones" n="07" label="Riesgo">
              <H2>Sanciones</H2>
              <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">
                Las infracciones se clasifican según su gravedad. En caso de reincidencia las multas pueden aumentar
                considerablemente, y las sanciones quedan inscritas en un registro público. Contar con un modelo de
                prevención de infracciones certificado es un atenuante.
              </p>
              <ul className="mt-12 grid border-t border-ink sm:grid-cols-3">
                {sanctions.map((s) => (
                  <li key={s.level} className="border-b border-ink/15 py-7 pr-6 sm:border-r sm:border-b-0 sm:pl-6 sm:first:pl-0 sm:last:border-r-0">
                    <p className="label-mono text-ink/50">{s.level}</p>
                    <p className="mt-3 font-display text-display-md">{s.amount}</p>
                    <p className="mt-2 text-sm text-ink/65">{s.text}</p>
                  </li>
                ))}
              </ul>
            </Part>

            <Part id="documento-vs-evidencia" n="08" label="Enfoque">
              <H2>
                Por qué un documento <em>no alcanza</em>
              </H2>
              <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">
                Las dos columnas son necesarias. La diferencia es que la segunda es la que responde cuando llega una
                fiscalización o un reclamo.
              </p>
              <div className="mt-12 grid ring-1 ring-ink md:grid-cols-2">
                <div className="bg-white p-8">
                  <p className="label-mono text-ink/50">A — Cumplimiento en papel</p>
                  <ul className="mt-6 space-y-3">
                    {documentOnly.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-ink/60">
                        <span aria-hidden>—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ink p-8 text-cream">
                  <p className="label-mono text-cream/60">B — Cumplimiento operativo</p>
                  <ul className="mt-6 space-y-3">
                    {operational.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-cream/85">
                        <span aria-hidden>✳</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink/65">
                Trabajamos junto a tu asesoría legal: ellos interpretan la norma y redactan; nosotros implementamos lo
                que la política promete y dejamos la evidencia técnica.
              </p>
            </Part>

            <section id="checklist" className="scroll-mt-28 border-b border-ink/15 bg-ink text-cream">
              <div className="grid gap-10 px-5 py-14 sm:px-10 sm:py-16 xl:grid-cols-[1fr_1.1fr]">
                <div>
                  <p className="label-mono text-cream/55">§ 09 — Recurso gratuito</p>
                  <h2 className="mt-4 font-display text-display-lg">
                    Checklist de cumplimiento <em>Ley 21.719</em>
                  </h2>
                  <p className="mt-6 leading-relaxed text-cream/70">
                    {checklistItemCount} controles en {checklist.length} áreas para revisar dónde está tu organización
                    hoy. Imprimible y lista para compartir con tu equipo.
                  </p>
                  <ol className="mt-8 border-t border-cream/15">
                    {checklist.map((g, i) => (
                      <li key={g.title} className="flex gap-4 border-b border-cream/15 py-3 text-sm text-cream/80">
                        <span className="label-mono pt-0.5 text-cream/40">{String(i + 1).padStart(2, "0")}</span>
                        {g.title}
                      </li>
                    ))}
                  </ol>
                </div>
                <ChecklistForm />
              </div>
            </section>

            <Part id="preguntas" n="10" label="FAQ">
              <H2>Preguntas frecuentes</H2>
              <div className="mt-10 border-t border-ink">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group border-b border-ink/15 py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                      {faq.q}
                      <span className="text-3xl leading-none transition-transform group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-ink/65">{faq.a}</p>
                  </details>
                ))}
              </div>
              <p className="mt-12 max-w-3xl border-l-2 border-ink/30 pl-5 text-sm leading-relaxed text-ink/60">
                Este contenido es informativo, se basa en el texto de la Ley 21.719 y no constituye asesoría legal.
                Para decisiones específicas, consulta con tu asesoría jurídica. ¿Tienes una duda o encontraste algo que
                corregir? Escríbenos a{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-2">
                  {site.email}
                </a>
                .
              </p>
            </Part>
          </article>
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: "es-CL",
          dateModified: "2026-09-12",
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name, legalName: site.legalName },
          mainEntityOfPage: `${site.url}/cumplimiento-ley-21719`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
