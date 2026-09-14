"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { buttonClass } from "@/components/ui";
import { nav } from "@/content/site";
import { cx } from "@/lib/cx";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  if (open && openedAt !== pathname) {
    setOpen(false);
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 print:hidden">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10 focus:bg-cream focus:px-3 focus:py-2 focus:text-sm"
      >
        Saltar al contenido
      </a>

      <div className="bg-ink text-cream">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-2 sm:px-10">
          <p className="label-mono truncate text-cream/75">
            Ley 21.719 <span className="text-cream/40">—</span> <span className="hidden sm:inline">vigencia plena el 1 de diciembre de 2026</span>
            <span className="sm:hidden">01.12.2026</span>
          </p>
          <Link href="/cumplimiento-ley-21719" className="label-mono shrink-0 underline-offset-4 hover:underline">
            Leer la guía →
          </Link>
        </div>
      </div>

      <div className="border-b border-ink/15 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-10 lg:border-x lg:border-ink/15">
          <Link href="/" aria-label="HardWhere, ir al inicio">
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cx(
                      "label-mono relative py-2 transition-colors",
                      isActive(item.href) ? "text-ink" : "text-ink/60 hover:text-ink",
                      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-ink after:transition-transform",
                      isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link href="/contacto" className={buttonClass("primary", "px-5 py-2.5")}>
                Contacto
              </Link>
            </div>
            <button
              type="button"
              className="label-mono inline-flex h-10 items-center px-3 ring-1 ring-ink ring-inset lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => {
                setOpen((v) => !v);
                setOpenedAt(pathname);
              }}
            >
              {open ? "Cerrar" : "Menú"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="h-[calc(100dvh-6.5rem)] overflow-y-auto border-b border-ink/15 bg-cream lg:hidden">
          <ul className="mx-auto max-w-[1280px] px-5 py-6 sm:px-10">
            {[...nav, { href: "/contacto", label: "Contacto" }].map((item, i) => (
              <li key={item.href} className="border-b border-ink/15">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className={cx("font-display text-display-md", isActive(item.href) && "underline underline-offset-8")}>{item.label}</span>
                  <span className="label-mono text-ink/50">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
