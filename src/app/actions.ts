"use server";

import { z } from "zod";
import { saveLead } from "@/lib/leads";
import { site } from "@/content/site";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<string, string[]>>;
  values?: Record<string, string>;
};

const consent = z.literal("on", { error: "Debes aceptar la política de privacidad para continuar." });
const optionalText = (max: number) => z.string().trim().max(max).optional();

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre.").max(100),
  email: z.email("Ingresa un correo válido.").max(200),
  organizacion: optionalText(150),
  telefono: optionalText(30),
  tipo: z.enum(["institucion", "empresa", "pyme", "colegio", "otro"], { error: "Selecciona una opción." }),
  mensaje: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres).").max(3000),
  consentimiento: consent,
});

const checklistSchema = z.object({
  email: z.email("Ingresa un correo válido.").max(200),
  nombre: optionalText(100),
  organizacion: optionalText(150),
  consentimiento: consent,
});

function readForm(formData: FormData) {
  const entries: Record<string, string> = {};
  for (const [key, value] of formData) {
    if (typeof value === "string" && !key.startsWith("$ACTION")) entries[key] = value;
  }
  return entries;
}

// Campo trampa: invisible para personas, los bots suelen completarlo.
function isBot(raw: Record<string, string>) {
  return Boolean(raw.sitio_web);
}

export async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = readForm(formData);
  if (isBot(raw)) return { status: "success" };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values: raw,
    };
  }

  const d = parsed.data;
  try {
    await saveLead({
      kind: "contacto",
      nombre: d.nombre,
      email: d.email,
      organizacion: d.organizacion,
      telefono: d.telefono,
      tipo: d.tipo,
      mensaje: d.mensaje,
      consentAt: new Date().toISOString(),
      policyVersion: site.privacyPolicyVersion,
    });
  } catch (error) {
    console.error("[contacto]", error);
    return {
      status: "error",
      message: `No pudimos enviar tu mensaje. Escríbenos directamente a ${site.email}.`,
      values: raw,
    };
  }

  return { status: "success", message: "Recibimos tu mensaje. Te responderemos pronto, normalmente dentro de un día hábil." };
}

export async function requestChecklist(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = readForm(formData);
  if (isBot(raw)) return { status: "success" };

  const parsed = checklistSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values: raw,
    };
  }

  const d = parsed.data;
  try {
    await saveLead({
      kind: "checklist-ley-21719",
      email: d.email,
      nombre: d.nombre,
      organizacion: d.organizacion,
      consentAt: new Date().toISOString(),
      policyVersion: site.privacyPolicyVersion,
    });
  } catch (error) {
    console.error("[checklist]", error);
    return {
      status: "error",
      message: `No pudimos registrar tu solicitud. Escríbenos a ${site.email} y te enviamos la checklist.`,
      values: raw,
    };
  }

  return { status: "success" };
}
