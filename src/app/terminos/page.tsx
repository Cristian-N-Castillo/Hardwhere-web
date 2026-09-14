import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/content/site";

// Revisar con asesoría legal antes de publicar.

export const metadata: Metadata = {
  title: "Términos de uso",
  description: `Condiciones de uso del sitio web de ${site.legalName}.`,
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalPage eyebrow="Legal" title="Términos de uso" version="2026-09-12" updated="12 de septiembre de 2026">
      <p className="lead">
        Estos términos regulan el uso de este sitio web. Al navegarlo, aceptas estas condiciones. Si no estás de
        acuerdo, te pedimos no utilizarlo.
      </p>

      <h2 id="identificacion">1. Identificación</h2>
      <p>
        Este sitio es operado por {site.legalName}, RUT {site.rut} (en adelante, “HardWhere”). Puedes contactarnos en{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2 id="objeto">2. Objeto del sitio</h2>
      <p>
        El sitio entrega información sobre los servicios de HardWhere y contenidos de interés general. La información
        sobre servicios, plazos y precios “desde” es referencial y no constituye una oferta vinculante. Toda
        contratación se formaliza mediante una propuesta o contrato por escrito.
      </p>

      <h2 id="contenido-informativo">3. Contenido informativo</h2>
      <p>
        La guía sobre la Ley 21.719, la checklist y los artículos del blog tienen fines informativos y no constituyen
        asesoría legal. Procuramos que sean precisos y actualizados, pero las decisiones sobre casos específicos
        deben tomarse con asesoría jurídica profesional.
      </p>

      <h2 id="propiedad-intelectual">4. Propiedad intelectual</h2>
      <p>
        Los textos, diseños, logotipos y demás contenidos del sitio pertenecen a HardWhere o se usan con autorización.
        Puedes compartir la checklist y citar nuestros artículos para uso interno de tu organización, indicando la
        fuente. Cualquier otro uso requiere autorización previa por escrito.
      </p>

      <h2 id="uso-aceptable">5. Uso aceptable</h2>
      <p>
        No está permitido usar el sitio para fines ilícitos, intentar acceder sin autorización a sus sistemas,
        interferir con su funcionamiento ni enviar contenido malicioso a través de sus formularios.
      </p>
      <p>
        Si encuentras una vulnerabilidad de seguridad, te agradecemos reportarla de forma responsable a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> antes de divulgarla. No emprenderemos acciones contra
        quienes reporten de buena fe, sin afectar datos de terceros ni la disponibilidad del sitio.
      </p>

      <h2 id="enlaces">6. Enlaces a terceros</h2>
      <p>
        El sitio puede incluir enlaces a sitios de terceros. No controlamos su contenido ni sus políticas de
        privacidad, por lo que no somos responsables de ellos.
      </p>

      <h2 id="responsabilidad">7. Disponibilidad y responsabilidad</h2>
      <p>
        Hacemos nuestro mejor esfuerzo para que el sitio esté disponible y libre de errores, pero no podemos
        garantizarlo en todo momento. En la medida permitida por la ley, HardWhere no será responsable por daños
        derivados del uso del contenido informativo del sitio o de su falta de disponibilidad.
      </p>

      <h2 id="datos-personales">8. Datos personales</h2>
      <p>
        El tratamiento de los datos personales que nos entregas a través del sitio se rige por nuestra{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>

      <h2 id="ley-aplicable">9. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia será conocida por los
        tribunales ordinarios de justicia de Chile.
      </p>

      <h2 id="cambios">10. Cambios</h2>
      <p>
        Podemos actualizar estos términos. La versión vigente es siempre la publicada en esta página, con su fecha de
        actualización.
      </p>
    </LegalPage>
  );
}
