export const site = {
  name: "HardWhere",
  legalName: "Informatica Hardwhere IT Solutions Limitada",
  rut: "78.508.885-9",
  email: "hardwhereitsolutions@gmail.com",
  // Pendientes: completar antes de publicar. Mientras sean null se muestran marcados como "por confirmar".
  phone: null as string | null,
  address: null as string | null,
  comuna: null as string | null,
  region: null as string | null,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Empresa chilena de software y tecnología: desarrollo a medida, aplicaciones web y móviles, cloud, ciberseguridad, consultoría TI e infraestructura. Implementamos el cumplimiento de la Ley 21.719 con evidencia técnica.",
  lawName: "Ley 21.719",
  lawDeadline: "2026-12-01",
  privacyPolicyVersion: "2026-09-12",
} as const;

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/cumplimiento-ley-21719", label: "Ley 21.719" },
  { href: "/empresas-e-instituciones", label: "Instituciones" },
  { href: "/pymes", label: "PyMEs" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
] as const;

export function daysUntilLawDeadline(now = new Date()) {
  const deadline = new Date(`${site.lawDeadline}T00:00:00-03:00`);
  return Math.max(0, Math.ceil((deadline.getTime() - now.getTime()) / 86_400_000));
}
