export type Partner = {
  name: string;
  role: string;
  bio: string;
  // Ruta en /public, p. ej. "/equipo/jorge-latorre.jpg". Sin foto se muestran las iniciales.
  photo?: string;
};

export const team: Partner[] = [
  {
    name: "Jorge Latorre",
    role: "Director General",
    bio: "Conduce la dirección estratégica de la empresa y la relación con aliados. Se asegura de que las decisiones de la sociedad se tomen con la voz de los seis socios.",
  },
  {
    name: "Cristian Castillo",
    role: "Director Comercial",
    bio: "Responsable del desarrollo comercial, las propuestas y la relación con clientes. Es el primer punto de contacto para empresas e instituciones.",
  },
  {
    name: "Vicente Morales",
    role: "Director Técnico",
    bio: "Define la arquitectura, los estándares de calidad y de seguridad del código, y las decisiones tecnológicas de cada proyecto.",
  },
  {
    name: "David Valdes",
    role: "Jefe de Proyectos",
    bio: "Planifica y conduce la ejecución de los proyectos: alcance, plazos, riesgos y comunicación con el cliente de principio a fin.",
  },
  {
    name: "Nicolas Salazar",
    role: "Líder de Producto y Diseño",
    bio: "Lidera la experiencia de usuario y el diseño de producto, para que cada sistema sea claro, accesible y útil para quien lo usa.",
  },
  {
    name: "Christian Silva",
    role: "Gestión de Proyectos",
    bio: "Da seguimiento operativo a los proyectos: coordinación del equipo, control de avance, documentación y entregables.",
  },
];

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
