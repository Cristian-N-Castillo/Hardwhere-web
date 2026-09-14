export type ChecklistGroup = {
  title: string;
  items: string[];
};

export const checklist: ChecklistGroup[] = [
  {
    title: "Gobierno y responsabilidad",
    items: [
      "Hay una persona designada como responsable de protección de datos, con tiempo y respaldo para ejercer el rol.",
      "La política de privacidad describe los tratamientos reales, no una plantilla genérica.",
      "Existe un plan de adecuación a la Ley 21.719 con responsables y fechas.",
    ],
  },
  {
    title: "Inventario de datos",
    items: [
      "Tenemos un inventario de tratamientos: qué datos, para qué, con qué base de licitud, dónde se guardan y quién accede.",
      "Identificamos qué tratamientos incluyen datos sensibles o datos de niños, niñas y adolescentes.",
      "Sabemos qué proveedores tratan datos por nosotros y en qué país se almacenan.",
      "Cada tratamiento tiene un plazo de conservación definido.",
    ],
  },
  {
    title: "Consentimiento y bases de licitud",
    items: [
      "Cada tratamiento tiene una base de licitud identificada y documentada.",
      "Los consentimientos quedan registrados (quién, cuándo, qué versión del texto) y pueden revocarse.",
      "Para menores de 14 años se obtiene el consentimiento de padres o representantes legales cuando corresponde.",
    ],
  },
  {
    title: "Derechos de los titulares",
    items: [
      "Hay un canal visible para ejercer los derechos de acceso, rectificación, supresión, oposición, portabilidad y bloqueo.",
      "Existe un procedimiento interno con responsables y plazos para responder.",
      "Cada solicitud y su respuesta quedan registradas.",
    ],
  },
  {
    title: "Seguridad y control de accesos",
    items: [
      "Los accesos a sistemas con datos personales se asignan por rol y según necesidad.",
      "Las cuentas administrativas usan autenticación multifactor.",
      "Los accesos se revisan periódicamente y se dan de baja al terminar la relación laboral.",
      "Los datos se cifran en tránsito y en reposo, incluidos notebooks y respaldos.",
      "Los respaldos se prueban restaurándolos, con evidencia de la prueba.",
    ],
  },
  {
    title: "Registro y trazabilidad",
    items: [
      "Los sistemas registran quién accede, consulta, modifica o exporta datos personales, y cuándo.",
      "Los registros están protegidos contra alteración y tienen un plazo de retención definido.",
      "Los relojes de los sistemas están sincronizados, para que los registros sean comparables.",
    ],
  },
  {
    title: "Incidentes y reporte de vulneraciones",
    items: [
      "Existe un procedimiento de respuesta a incidentes con roles definidos.",
      "Hay plantillas listas para reportar a la Agencia y comunicar a los titulares afectados.",
      "El procedimiento está diseñado para reportar en horas, no en semanas (meta operativa: 72 horas).",
      "Se lleva una bitácora de incidentes, incluidos los que no se reportaron y por qué.",
      "El procedimiento se ha probado al menos una vez con un simulacro.",
    ],
  },
  {
    title: "Proveedores y evaluación de impacto",
    items: [
      "Los contratos con proveedores que tratan datos incluyen obligaciones de confidencialidad y seguridad.",
      "Las transferencias internacionales tienen una base o garantía identificada.",
      "Los tratamientos de alto riesgo cuentan con una evaluación de impacto documentada.",
      "El equipo recibió capacitación y queda registro de ella.",
    ],
  },
];

export const checklistItemCount = checklist.reduce((n, g) => n + g.items.length, 0);
