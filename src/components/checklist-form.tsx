"use client";

import Link from "next/link";
import { useActionState } from "react";
import { requestChecklist, type FormState } from "@/app/actions";
import { ConsentField, Honeypot, TextField } from "@/components/form-fields";
import { Arrow, buttonClass } from "@/components/ui";

const initialState: FormState = { status: "idle" };

export function ChecklistForm() {
  const [state, action, pending] = useActionState(requestChecklist, initialState);
  const errors = state.fieldErrors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="bg-cream p-8 text-ink sm:p-10">
        <p className="label-mono text-ink/55">Listo</p>
        <h3 className="mt-3 font-display text-display-md">
          Tu checklist <em>está lista.</em>
        </h3>
        <p className="mt-3 text-ink/70">
          Ábrela y guárdala como PDF desde el botón de imprimir. Si te surge una duda, respóndenos al correo.
        </p>
        <Link href="/cumplimiento-ley-21719/checklist" className={buttonClass("primary", "mt-8")}>
          Abrir la checklist <Arrow />
        </Link>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="relative space-y-7 bg-cream p-8 text-ink sm:p-10">
      <Honeypot />
      <TextField label="Correo de trabajo" name="email" type="email" autoComplete="email" required defaultValue={v.email} error={errors.email} />
      <TextField label="Nombre" name="nombre" autoComplete="name" optional defaultValue={v.nombre} error={errors.nombre} />
      <TextField
        label="Organización"
        name="organizacion"
        autoComplete="organization"
        optional
        defaultValue={v.organizacion}
        error={errors.organizacion}
      />
      <ConsentField
        purpose="enviarme la checklist y contenidos sobre la Ley 21.719"
        error={errors.consentimiento}
        defaultChecked={v.consentimiento === "on"}
      />
      {state.status === "error" && state.message && (
        <p role="alert" className="border-l-2 border-red-700 bg-white px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}
      <button type="submit" disabled={pending} className={buttonClass("primary", "w-full")}>
        {pending ? "Preparando…" : "Descargar la checklist"}
        <Arrow />
      </button>
    </form>
  );
}
