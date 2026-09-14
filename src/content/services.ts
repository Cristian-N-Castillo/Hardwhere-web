import type { LucideIcon } from "lucide-react";
import { Cloud, CodeXml, Compass, Server, ShieldCheck, Smartphone } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  intro: string;
  forWhom: string[];
  includes: { title: string; text: string }[];
  deliverables: string[];
  compliance: string;
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "desarrollo-de-software-a-medida",
    icon: CodeXml,
    name: "Desarrollo de software a medida",
    seoTitle: "Desarrollo de software a medida en Chile",
    seoDescription:
      "Sistemas de gestión, integraciones y automatización construidos para tus procesos. Código de tu propiedad, documentado y con privacidad desde el diseño.",
    tagline: "Sistemas hechos para cómo trabaja tu organización, no al revés.",
    intro:
      "Diseñamos y construimos sistemas a la medida de tus procesos: plataformas de gestión, integraciones entre sistemas que hoy no se hablan y automatización de tareas que todavía se hacen a mano o en planillas. El código es tuyo, queda documentado y listo para crecer.",
    forWhom: [
      "Organizaciones que ya superaron las planillas y necesitan un sistema propio.",
      "Instituciones con procesos específicos que ningún software de mercado cubre bien.",
      "Equipos que necesitan conectar sistemas existentes (ERP, contabilidad, pagos).",
    ],
    includes: [
      {
        title: "Levantamiento y diseño",
        text: "Entendemos el proceso antes de escribir código. Entregamos flujos, un prototipo navegable y un alcance cerrado.",
      },
      {
        title: "Desarrollo iterativo",
        text: "Entregas funcionales cada dos semanas que puedes probar. Nada de esperar meses para ver avances.",
      },
      {
        title: "Integraciones",
        text: "Conectamos con ERP, sistemas contables, pasarelas de pago, APIs públicas y bases de datos existentes.",
      },
      {
        title: "Privacidad desde el diseño",
        text: "Control de acceso por roles, registro de auditoría y minimización de datos incluidos desde el primer día.",
      },
    ],
    deliverables: [
      "Código fuente en un repositorio a nombre de tu organización",
      "Documentación técnica y manual de usuario",
      "Ambientes de prueba y producción configurados",
      "Capacitación para el equipo que usará el sistema",
      "Período de garantía y plan de mantención opcional",
    ],
    compliance:
      "Todo sistema que construimos incluye registro de auditoría (quién accedió, a qué dato y cuándo), control de acceso por roles y mecanismos para atender las solicitudes de los titulares de datos. Es exactamente la evidencia técnica que pide la Ley 21.719.",
    faqs: [
      {
        q: "¿De quién es el código?",
        a: "Tuyo. Se entrega en un repositorio a nombre de tu organización, con documentación suficiente para que cualquier equipo pueda mantenerlo.",
      },
      {
        q: "¿Cuánto demora un proyecto?",
        a: "Depende del alcance. Un sistema acotado puede estar operativo en 6 a 10 semanas; los proyectos más grandes se dividen en etapas con entregas funcionales en cada una.",
      },
      {
        q: "¿Qué pasa después de la entrega?",
        a: "Hay un período de garantía para corregir errores sin costo. Después puedes contratar un plan de mantención o llevar el sistema con tu propio equipo.",
      },
    ],
  },
  {
    slug: "aplicaciones-web-y-moviles",
    icon: Smartphone,
    name: "Aplicaciones web y móviles",
    seoTitle: "Desarrollo de aplicaciones web y móviles en Chile",
    seoDescription:
      "Portales de clientes, apps para equipos en terreno y plataformas de reservas. Aplicaciones rápidas, accesibles y seguras para web, iOS y Android.",
    tagline: "Apps rápidas, accesibles y seguras, en el navegador o en el teléfono.",
    intro:
      "Construimos aplicaciones web y móviles con tecnologías actuales: portales de autoatención, apps para equipos en terreno, plataformas de reservas y sitios que cargan rápido y aparecen en Google.",
    forWhom: [
      "Empresas que quieren ofrecer autoatención a sus clientes.",
      "Equipos en terreno que necesitan registrar información desde el celular.",
      "Organizaciones que necesitan un portal para apoderados, socios o proveedores.",
    ],
    includes: [
      {
        title: "Web moderna",
        text: "Aplicaciones con React y Next.js: rápidas, indexables por buscadores y fáciles de mantener.",
      },
      {
        title: "Móvil multiplataforma",
        text: "Una sola base de código para iOS y Android, con publicación en App Store y Google Play.",
      },
      {
        title: "Diseño centrado en las personas",
        text: "Prototipos probados con usuarios reales antes de desarrollar. La accesibilidad es un requisito, no un extra.",
      },
      {
        title: "Seguridad por defecto",
        text: "Autenticación robusta, cifrado en tránsito y en reposo, y gestión de consentimientos integrada.",
      },
    ],
    deliverables: [
      "Aplicación publicada (web, App Store y/o Google Play)",
      "Panel de administración para tu equipo",
      "Diseño de interfaz y sistema de componentes",
      "Analítica respetuosa de la privacidad",
      "Documentación y traspaso técnico",
    ],
    compliance:
      "Una app empieza a recopilar datos personales desde el primer formulario. Diseñamos flujos de consentimiento claros, pedimos solo lo necesario y dejamos trazabilidad de cada acceso a los datos.",
    faqs: [
      {
        q: "¿Web o app móvil?",
        a: "Depende de quién la usa y cómo. Muchas veces una aplicación web bien hecha resuelve el problema a menor costo; te lo decimos con honestidad en la primera conversación.",
      },
      {
        q: "¿Se puede integrar con lo que ya tengo?",
        a: "Sí. Integramos con sistemas existentes mediante APIs, bases de datos o archivos, según lo que permita cada sistema.",
      },
    ],
  },
  {
    slug: "gestion-cloud",
    icon: Cloud,
    name: "Gestión de servicios cloud",
    seoTitle: "Gestión de servicios cloud en Chile: AWS, Azure y Google Cloud",
    seoDescription:
      "Migración, administración, monitoreo y optimización de costos en la nube. Infraestructura cloud ordenada, respaldada y documentada.",
    tagline: "Tu infraestructura en la nube: ordenada, monitoreada y con costos bajo control.",
    intro:
      "Migramos, configuramos y administramos servicios en la nube. Nos encargamos de que funcionen, de que estén respaldados y de que la factura mensual no te sorprenda.",
    forWhom: [
      "Organizaciones que quieren dejar servidores físicos envejecidos.",
      "Empresas con cuentas cloud que crecieron sin orden y con costos al alza.",
      "Equipos que necesitan alta disponibilidad sin contratar un área de operaciones.",
    ],
    includes: [
      {
        title: "Migración planificada",
        text: "Inventario, plan por etapas y migración sin interrumpir la operación. Con plan de vuelta atrás.",
      },
      {
        title: "Optimización de costos",
        text: "Revisamos lo que pagas, eliminamos recursos ociosos y dimensionamos correctamente cada servicio.",
      },
      {
        title: "Monitoreo y alertas",
        text: "Disponibilidad, rendimiento y seguridad monitoreados, con alertas que llegan a quien debe actuar.",
      },
      {
        title: "Respaldos y recuperación",
        text: "Respaldos automáticos y pruebas de restauración periódicas. Un respaldo que nunca se probó no es un respaldo.",
      },
    ],
    deliverables: [
      "Arquitectura cloud documentada y diagramada",
      "Infraestructura como código (reproducible y versionada)",
      "Tablero de monitoreo y costos",
      "Plan de respaldo y recuperación probado",
      "Informe mensual de operación",
    ],
    compliance:
      "La Ley 21.719 regula las transferencias internacionales de datos. Documentamos en qué región se almacena cada dato, qué garantías ofrece el proveedor y configuramos cifrado y accesos acordes.",
    faqs: [
      {
        q: "¿Con qué proveedores trabajan?",
        a: "Con los principales proveedores de nube pública. Recomendamos el que mejor se ajusta a tu caso, no el que más nos conviene.",
      },
      {
        q: "¿La nube es más cara?",
        a: "Mal configurada, puede serlo. Bien dimensionada, normalmente reduce el costo total al eliminar hardware, mantención y caídas no planificadas.",
      },
    ],
  },
  {
    slug: "ciberseguridad-y-proteccion-de-datos",
    icon: ShieldCheck,
    name: "Ciberseguridad y protección de datos",
    seoTitle: "Ciberseguridad y protección de datos personales en Chile",
    seoDescription:
      "Diagnóstico de seguridad, gestión de accesos, registro y monitoreo, respuesta a incidentes. Controles reales y evidencia técnica para la Ley 21.719.",
    tagline: "Controles que funcionan en el día a día, y evidencia para demostrarlo.",
    intro:
      "Evaluamos, implementamos y mantenemos los controles que protegen la información de tu organización: accesos, cifrado, respaldos, monitoreo y respuesta ante incidentes. Todo documentado, para que puedas demostrarlo cuando te lo pidan.",
    forWhom: [
      "Organizaciones que tratan datos sensibles: salud, educación, finanzas.",
      "Colegios y sostenedores con datos de estudiantes y apoderados.",
      "Empresas que necesitan prepararse para una fiscalización o auditoría.",
    ],
    includes: [
      {
        title: "Diagnóstico de seguridad",
        text: "Revisión de accesos, configuraciones, respaldos y exposición. Informe priorizado por riesgo, en lenguaje claro.",
      },
      {
        title: "Identidades y accesos",
        text: "Autenticación multifactor, permisos por rol, revisión periódica de accesos y baja oportuna de cuentas.",
      },
      {
        title: "Registro y monitoreo",
        text: "Logs centralizados y protegidos contra alteración, con retención definida y alertas ante comportamientos anómalos.",
      },
      {
        title: "Respuesta a incidentes",
        text: "Procedimiento, responsables, plantillas de reporte y simulacros. Para que el día del incidente nadie improvise.",
      },
    ],
    deliverables: [
      "Informe de diagnóstico con plan de remediación priorizado",
      "Políticas de seguridad aplicables (no genéricas)",
      "Procedimiento de respuesta a incidentes y plantillas de reporte",
      "Configuración de registros de auditoría y alertas",
      "Capacitación al equipo",
    ],
    compliance:
      "La Ley 21.719 exige medidas de seguridad apropiadas y reportar las vulneraciones a la Agencia sin dilaciones indebidas. Implementamos los controles y la evidencia que lo demuestran.",
    faqs: [
      {
        q: "¿Hacen pruebas de penetración?",
        a: "Sí, con alcance y autorización formal por escrito. Las recomendamos después de cerrar las brechas básicas, para que el informe aporte valor real.",
      },
      {
        q: "Somos una organización pequeña, ¿aplica?",
        a: "Sí. Los controles se dimensionan al tamaño y al riesgo: una organización pequeña necesita pocas medidas bien implementadas, no un manual de 200 páginas.",
      },
    ],
  },
  {
    slug: "consultoria-ti",
    icon: Compass,
    name: "Consultoría TI",
    seoTitle: "Consultoría TI para empresas e instituciones en Chile",
    seoDescription:
      "Diagnóstico tecnológico, hoja de ruta, evaluación de proveedores, bases técnicas de licitación y cumplimiento de la Ley 21.719 en la práctica.",
    tagline: "Decisiones tecnológicas con criterio técnico y sin conflicto de interés.",
    intro:
      "Te ayudamos a decidir antes de invertir: qué sistema comprar o construir, cómo ordenar el área TI, cómo preparar las bases técnicas de una compra y cómo cumplir la Ley 21.719 en la práctica, no solo en el papel.",
    forWhom: [
      "Directorios y gerencias que necesitan una segunda opinión técnica.",
      "Sostenedores e instituciones que preparan una compra tecnológica.",
      "Organizaciones que deben planificar su adecuación a la Ley 21.719.",
    ],
    includes: [
      {
        title: "Diagnóstico y hoja de ruta",
        text: "Dónde está hoy tu tecnología, dónde debería estar y en qué orden invertir para llegar.",
      },
      {
        title: "Evaluación de proveedores",
        text: "Comparamos soluciones y propuestas con criterios técnicos explícitos. Te decimos lo que vemos, aunque no te vendamos nada.",
      },
      {
        title: "Bases técnicas",
        text: "Redactamos requisitos técnicos claros y medibles para compras y licitaciones. Si te ayudamos a redactarlas, no postulamos a esa compra.",
      },
      {
        title: "Adecuación a la Ley 21.719",
        text: "Diagnóstico de brechas, inventario de datos y plan de implementación técnica, coordinado con tu asesoría legal.",
      },
    ],
    deliverables: [
      "Informe de diagnóstico y hoja de ruta priorizada",
      "Matriz de evaluación de proveedores",
      "Bases técnicas o especificaciones de compra",
      "Plan de adecuación a la Ley 21.719",
    ],
    compliance:
      "La adecuación a la Ley 21.719 parte con un inventario honesto de qué datos tienes, dónde están y quién accede. Es el primer entregable de cualquier consultoría de cumplimiento que hacemos.",
    faqs: [
      {
        q: "¿Reemplazan a un abogado?",
        a: "No. Trabajamos junto a tu asesoría legal: ellos interpretan la norma y redactan los documentos; nosotros implementamos y dejamos la evidencia técnica.",
      },
      {
        q: "¿Cuánto dura una consultoría?",
        a: "Un diagnóstico acotado toma entre 2 y 4 semanas. Te entregamos el alcance y el plazo antes de empezar.",
      },
    ],
  },
  {
    slug: "infraestructura-ti",
    icon: Server,
    name: "Infraestructura TI",
    seoTitle: "Creación y mantención de infraestructura TI en Chile",
    seoDescription:
      "Redes, WiFi, servidores, puestos de trabajo y respaldos. Diseño, instalación y mantención preventiva de infraestructura tecnológica.",
    tagline: "Redes, servidores y equipos que funcionan, con mantención que no espera a que algo falle.",
    intro:
      "Diseñamos, instalamos y mantenemos la infraestructura tecnológica de tu organización: redes, WiFi, servidores, puestos de trabajo y respaldos. Con mantención preventiva y soporte cuando se necesita.",
    forWhom: [
      "Colegios que necesitan WiFi confiable en salas y laboratorios.",
      "Oficinas que crecieron y cuya red ya no da abasto.",
      "Organizaciones sin área TI propia que necesitan un equipo de confianza.",
    ],
    includes: [
      {
        title: "Redes y conectividad",
        text: "Diseño e instalación de redes cableadas y WiFi, segmentadas para separar administración, usuarios e invitados.",
      },
      {
        title: "Servidores y almacenamiento",
        text: "Servidores locales o híbridos, almacenamiento compartido y virtualización, dimensionados para tu operación.",
      },
      {
        title: "Mantención preventiva",
        text: "Visitas planificadas, actualizaciones, revisión de respaldos e inventario de equipos al día.",
      },
      {
        title: "Soporte y mesa de ayuda",
        text: "Un canal claro para pedir ayuda, con tiempos de respuesta acordados y registro de cada solicitud.",
      },
    ],
    deliverables: [
      "Diagrama y documentación de la red",
      "Inventario de equipos y licencias",
      "Plan de mantención preventiva",
      "Registro de solicitudes de soporte",
    ],
    compliance:
      "La protección de datos también es física: acceso a salas de servidores, cifrado de notebooks, respaldos fuera del sitio y registro de quién administra qué.",
    faqs: [
      {
        q: "¿Atienden en terreno?",
        a: "Sí. La mantención preventiva y las instalaciones son presenciales; el soporte cotidiano se resuelve en su mayoría de forma remota.",
      },
      {
        q: "¿Venden equipos?",
        a: "Te ayudamos a especificar y cotizar lo que necesitas con proveedores, sin márgenes ocultos, y nos encargamos de la instalación.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
