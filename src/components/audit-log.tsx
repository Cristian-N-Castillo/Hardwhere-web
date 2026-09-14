import { cx } from "@/lib/cx";

const lines = [
  { time: "09:14:02", tag: "ACCESO", text: "u:mfuentes · ficha_estudiante/4821", status: "OK" },
  { time: "09:14:07", tag: "EXPORT", text: "u:mfuentes · nomina_3B.csv", status: "REGISTRADO" },
  { time: "10:02:51", tag: "ALERTA", text: "5 intentos fallidos · cuenta admin", status: "BLOQUEADO", strong: true },
  { time: "10:03:00", tag: "INCID.", text: "INC-017 · evaluación de riesgo", status: "EN CURSO", strong: true },
  { time: "11:40:12", tag: "TITULAR", text: "solicitud de acceso · folio 0093", status: "EN PLAZO" },
  { time: "12:05:33", tag: "BACKUP", text: "restauración de prueba · alumnos", status: "VERIFICADO" },
];

export function AuditLog({ className }: { className?: string }) {
  return (
    <figure className={cx("bg-white ring-1 ring-ink", className)}>
      <div className="flex items-center justify-between border-b border-ink px-4 py-2.5">
        <span className="label-mono">registro-auditoria.log</span>
        <span className="label-mono text-ink/50">28.11.2026</span>
      </div>
      <ol className="divide-y divide-dashed divide-ink/20 px-4 font-mono text-[11.5px] leading-relaxed sm:text-xs">
        {lines.map((line, i) => (
          <li
            key={line.time}
            className="grid animate-log-line grid-cols-[auto_4.6rem_1fr] items-center gap-x-3 py-2.5"
            style={{ animationDelay: `${300 + i * 240}ms` }}
          >
            <span className="text-ink/45">{line.time}</span>
            <span className={cx("px-1 text-center text-[10.5px] font-semibold", line.strong ? "bg-ink text-cream" : "ring-1 ring-ink/40 ring-inset")}>
              {line.tag}
            </span>
            <span className="flex min-w-0 justify-between gap-x-3">
              <span className="truncate">{line.text}</span>
              <span className="hidden shrink-0 text-ink/45 sm:inline">{line.status}</span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="border-t border-ink px-4 py-3 text-xs leading-relaxed text-ink/70">
        <span className="font-medium text-ink">Cumplimiento operativo:</span> cada acceso, exportación e
        incidente queda registrado y se puede demostrar.
      </figcaption>
    </figure>
  );
}
