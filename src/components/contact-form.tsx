"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions";
import { ConsentField, Honeypot, SelectField, TextArea, TextField } from "@/components/form-fields";
import { Arrow, buttonClass } from "@/components/ui";

const initialState: FormState = { status: "idle" };

const tipos = [
  { value: "institucion", label: "Institución pública" },
  { value: "colegio", label: "Colegio o sostenedor" },
  { value: "empresa", label: "Empresa mediana o grande" },
  { value: "pyme", label: "PyME o emprendimiento" },
  { value: "otro", label: "Otro" },
];

export function ContactForm({ defaultTipo }: { defaultTipo?: string }) {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const errors = state.fieldErrors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="bg-ink p-10 text-cream">
        <p className="label-mono text-cream/60">Enviado</p>
        <h2 className="mt-4 font-display text-display-lg">
          Gracias. <em>Te leemos.</em>
        </h2>
        <p className="mt-4 text-cream/75">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="relative space-y-8">
      <Honeypot />
      <div className="grid gap-8 sm:grid-cols-2">
        <TextField label="Nombre" name="nombre" autoComplete="name" required defaultValue={v.nombre} error={errors.nombre} />
        <TextField label="Correo" name="email" type="email" autoComplete="email" required defaultValue={v.email} error={errors.email} />
        <TextField
          label="Organización"
          name="organizacion"
          autoComplete="organization"
          optional
          defaultValue={v.organizacion}
          error={errors.organizacion}
        />
        <TextField label="Teléfono" name="telefono" type="tel" autoComplete="tel" optional defaultValue={v.telefono} error={errors.telefono} />
      </div>
      <SelectField
        label="Tipo de organización"
        name="tipo"
        required
        options={tipos}
        defaultValue={v.tipo ?? defaultTipo ?? ""}
        error={errors.tipo}
      />
      <TextArea
        label="¿En qué te podemos ayudar?"
        name="mensaje"
        required
        defaultValue={v.mensaje}
        error={errors.mensaje}
        hint="No incluyas datos sensibles (salud, datos de estudiantes, etc.). Los conversamos después, por un canal adecuado."
      />
      <ConsentField
        purpose="responder esta consulta y, si corresponde, preparar una propuesta"
        error={errors.consentimiento}
        defaultChecked={v.consentimiento === "on"}
      />

      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-2 border-red-700 bg-white px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className={buttonClass("primary", "w-full sm:w-auto")}>
        {pending ? "Enviando…" : "Enviar mensaje"}
        <Arrow />
      </button>
    </form>
  );
}
