import { LinkButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto max-w-[1280px] px-5 py-24 text-center sm:px-10 lg:border-x lg:border-ink/15">
        <p className="label-mono text-ink/50">Error 404</p>
        <p className="mt-6 font-display text-display-num text-ink/25">404</p>
        <h1 className="mt-4 font-display text-display-lg">No encontramos esta página.</h1>
        <p className="mx-auto mt-4 max-w-md text-ink/65">
          Puede que el enlace esté roto o que la página se haya movido. Revisemos juntos por dónde seguir.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/">Ir al inicio</LinkButton>
          <LinkButton href="/contacto" variant="secondary">
            Contactarnos
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
