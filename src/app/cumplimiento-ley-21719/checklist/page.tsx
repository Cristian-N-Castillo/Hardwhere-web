import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { PrintButton } from "@/components/print-button";
import { checklist, checklistItemCount } from "@/content/checklist";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Checklist de cumplimiento Ley 21.719",
  description: "Checklist imprimible para revisar el estado de cumplimiento de la Ley 21.719 en tu organización.",
  robots: { index: false, follow: true },
};

export default function ChecklistPage() {
  return (
    <div className="bg-cream-deep py-10 sm:py-14 print:bg-white print:py-0">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 px-5 print:hidden">
        <Link href="/cumplimiento-ley-21719" className="label-mono hover:underline hover:underline-offset-4">
          ← Volver a la guía
        </Link>
        <PrintButton />
      </div>

      <div className="mx-auto mt-8 max-w-3xl bg-white p-8 ring-1 ring-ink sm:p-12 print:mt-0 print:max-w-none print:p-0 print:ring-0">
        <header className="flex items-start justify-between gap-6 border-b border-ink pb-8">
          <div>
            <p className="label-mono text-ink/55">{site.name} · Checklist · Septiembre 2026</p>
            <h1 className="mt-4 font-display text-display-lg">
              Checklist de cumplimiento <em>Ley 21.719</em>
            </h1>
            <p className="mt-4 text-ink/65">
              {checklistItemCount} controles para revisar con tu equipo. Marca lo que ya puedes demostrar con
              evidencia, no solo lo que está escrito.
            </p>
          </div>
          <LogoMark className="size-12 shrink-0" />
        </header>

        <div className="mt-8 grid grid-cols-3 gap-4 text-xs">
          {["Organización", "Responsable", "Fecha de revisión"].map((f) => (
            <p key={f}>
              <span className="label-mono block text-ink/60">{f}</span>
              <span className="mt-5 block border-b border-ink/40" />
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {checklist.map((group, gi) => (
            <section key={group.title} className="break-inside-avoid">
              <h2 className="flex items-baseline gap-3 font-display text-display-sm">
                <span className="label-mono text-ink/45">{String(gi + 1).padStart(2, "0")}</span>
                {group.title}
              </h2>
              <ul className="mt-3 border-t border-ink">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-ink/15 py-3 text-sm leading-relaxed">
                    <span className="mt-0.5 size-4 shrink-0 ring-1 ring-ink" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="label-mono mt-12 border-t border-ink pt-6 leading-relaxed text-ink/50">
          Documento informativo; no constituye asesoría legal. © {site.legalName} · RUT {site.rut} · {site.email}
        </footer>
      </div>
    </div>
  );
}
