import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "@/lib/cx";

const inputClass =
  "block w-full rounded-none border-0 border-b border-ink/35 bg-transparent px-0 py-2.5 text-base text-ink placeholder:text-ink/35 focus:border-ink focus:ring-0 focus:outline-none aria-invalid:border-red-700";

type FieldProps = {
  label: string;
  name: string;
  error?: string[];
  hint?: ReactNode;
  optional?: boolean;
};

function FieldShell({ label, name, error, hint, optional, children }: FieldProps & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="flex items-baseline justify-between gap-2">
        <span className="label-mono text-ink/70">{label}</span>
        {optional && <span className="label-mono text-ink/40">Opcional</span>}
      </label>
      <div className="mt-1">{children}</div>
      {hint && !error && <p className="mt-2 text-xs leading-relaxed text-ink/55">{hint}</p>}
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-red-700">
          {error[0]}
        </p>
      )}
    </div>
  );
}

export function TextField({ label, name, error, hint, optional, className, ...props }: FieldProps & ComponentProps<"input">) {
  return (
    <FieldShell label={label} name={name} error={error} hint={hint} optional={optional}>
      <input
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cx(inputClass, className)}
        {...props}
      />
    </FieldShell>
  );
}

export function TextArea({ label, name, error, hint, optional, className, ...props }: FieldProps & ComponentProps<"textarea">) {
  return (
    <FieldShell label={label} name={name} error={error} hint={hint} optional={optional}>
      <textarea
        id={name}
        name={name}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cx(inputClass, "min-h-28 resize-y", className)}
        {...props}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  name,
  error,
  hint,
  options,
  ...props
}: FieldProps & ComponentProps<"select"> & { options: { value: string; label: string }[] }) {
  return (
    <FieldShell label={label} name={name} error={error} hint={hint}>
      <select
        id={name}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cx(inputClass, "cursor-pointer")}
        {...props}
      >
        <option value="">Selecciona una opción</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function ConsentField({ error, purpose, defaultChecked }: { error?: string[]; purpose: string; defaultChecked?: boolean }) {
  return (
    <div>
      <div className="flex gap-3">
        <input
          id="consentimiento"
          name="consentimiento"
          type="checkbox"
          required
          defaultChecked={defaultChecked}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "consentimiento-error" : undefined}
          className="mt-1 size-4 shrink-0 rounded-none accent-ink"
        />
        <label htmlFor="consentimiento" className="text-sm leading-relaxed text-ink/70">
          Acepto que HardWhere trate mis datos para {purpose}, según su{" "}
          <Link href="/privacidad" target="_blank" className="font-medium text-ink underline underline-offset-2">
            política de privacidad
          </Link>
          . Puedo retirar mi consentimiento en cualquier momento.
        </label>
      </div>
      {error && (
        <p id="consentimiento-error" className="mt-2 text-sm text-red-700">
          {error[0]}
        </p>
      )}
    </div>
  );
}

export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="sitio_web">No completar</label>
      <input id="sitio_web" name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
