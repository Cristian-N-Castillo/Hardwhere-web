export type CaseStudy = {
  slug: string;
  kind: "producto-propio" | "trabajo-previo";
  title: string;
  summary: string;
  context: string;
  problem: string;
  built: string[];
  result: string | null;
  // true mientras el texto no haya sido validado por los socios.
  draft?: boolean;
};

export const cases: CaseStudy[] = [
  {
    slug: "agendaschile",
    kind: "producto-propio",
    title: "AgendasChile",
    summary: "Plataforma de agendamiento en línea para negocios y profesionales en Chile.",
    context:
      "Muchos negocios y profesionales en Chile todavía agendan por WhatsApp, teléfono o cuaderno. Eso significa horas coordinando, inasistencias sin aviso y datos de clientes repartidos en chats personales.",
    problem:
      "Hacía falta una forma simple de que los clientes reserven por su cuenta, reciban recordatorios y que el negocio tenga su agenda y sus datos ordenados en un solo lugar, con acceso controlado.",
    built: [
      "Página de reservas propia para cada negocio.",
      "Gestión de servicios, horarios y profesionales.",
      "Recordatorios automáticos para reducir inasistencias.",
      "Panel de administración con acceso por roles.",
    ],
    result: null,
    draft: true,
  },
];
