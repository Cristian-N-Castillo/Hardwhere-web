import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { Pending } from "@/components/ui";
import { site } from "@/content/site";

// Revisar con asesoría legal antes de publicar y en cada cambio de proveedores o formularios.

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${site.legalName} trata los datos personales que recibe a través de este sitio, conforme a la Ley 19.628 y la Ley 21.719.`,
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage eyebrow="Legal" title="Política de privacidad" version={site.privacyPolicyVersion} updated="12 de septiembre de 2026">
      <p className="lead">
        Nos dedicamos, entre otras cosas, a ayudar a otras organizaciones a proteger datos personales. Esta política
        explica, sin letra chica, qué datos recibimos a través de este sitio, para qué los usamos, cuánto tiempo los
        guardamos y cómo puedes ejercer tus derechos.
      </p>
      <p>
        Tratamos los datos personales conforme a la Ley N° 19.628 sobre protección de la vida privada y, desde su
        entrada en vigencia el 1 de diciembre de 2026, conforme a las modificaciones introducidas por la Ley N° 21.719.
      </p>

      <h2 id="responsable">1. Quién es el responsable</h2>
      <ul>
        <li>
          <strong>Razón social:</strong> {site.legalName}
        </li>
        <li>
          <strong>RUT:</strong> {site.rut}
        </li>
        <li>
          <strong>Domicilio:</strong> {site.address ?? <Pending>Dirección por confirmar</Pending>}
        </li>
        <li>
          <strong>Contacto para temas de datos personales:</strong>{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
      </ul>

      <h2 id="datos">2. Qué datos tratamos, para qué y por cuánto tiempo</h2>
      <p>Solo pedimos los datos necesarios para cada finalidad. Los campos marcados como opcionales son eso: opcionales.</p>
      <div className="not-prose my-6 overflow-x-auto bg-white ring-1 ring-ink">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead className="bg-ink text-cream">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Origen</th>
              <th scope="col" className="px-4 py-3 font-semibold">Datos</th>
              <th scope="col" className="px-4 py-3 font-semibold">Finalidad</th>
              <th scope="col" className="px-4 py-3 font-semibold">Base de licitud</th>
              <th scope="col" className="px-4 py-3 font-semibold">Conservación</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/15 align-top text-ink/80">
            <tr>
              <td className="px-4 py-3 font-medium text-ink">Formulario de contacto</td>
              <td className="px-4 py-3">Nombre, correo, tipo de organización y mensaje. Opcionales: organización y teléfono.</td>
              <td className="px-4 py-3">Responder tu consulta y, si corresponde, preparar una propuesta.</td>
              <td className="px-4 py-3">Tu consentimiento.</td>
              <td className="px-4 py-3">24 meses desde el último contacto, salvo que se inicie una relación contractual.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-ink">Descarga de la checklist</td>
              <td className="px-4 py-3">Correo. Opcionales: nombre y organización.</td>
              <td className="px-4 py-3">Entregarte la checklist y enviarte contenidos sobre la Ley 21.719.</td>
              <td className="px-4 py-3">Tu consentimiento.</td>
              <td className="px-4 py-3">Hasta que retires tu consentimiento o tras 24 meses sin interacción.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-ink">Registros técnicos del servidor</td>
              <td className="px-4 py-3">Dirección IP, fecha y hora, página solicitada y tipo de navegador.</td>
              <td className="px-4 py-3">Seguridad del sitio y detección de abusos.</td>
              <td className="px-4 py-3">Interés legítimo en proteger el sitio y a sus usuarios.</td>
              <td className="px-4 py-3">Hasta 90 días, salvo que se requieran para investigar un incidente.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Cuando aceptas esta política en un formulario, registramos la fecha y la versión aceptada. Así podemos
        demostrar que contamos con tu consentimiento, tal como exige la ley.
      </p>

      <h2 id="que-no-hacemos">3. Lo que no hacemos</h2>
      <ul>
        <li>No vendemos ni arrendamos datos personales.</li>
        <li>No usamos cookies de analítica, publicidad ni seguimiento entre sitios.</li>
        <li>No tomamos decisiones basadas únicamente en tratamientos automatizados.</li>
        <li>
          No solicitamos datos sensibles a través del sitio. Te pedimos no incluirlos en tus mensajes; si es necesario
          tratarlos en un proyecto, lo acordamos por un canal adecuado.
        </li>
      </ul>

      <h2 id="destinatarios">4. Con quién compartimos datos</h2>
      <p>
        Recurrimos a proveedores que tratan datos por nuestro encargo, como servicios de alojamiento del sitio, correo
        electrónico y gestión de contactos. Solo acceden a los datos necesarios para prestar su servicio, bajo
        obligaciones de confidencialidad y seguridad, y no pueden usarlos para fines propios.
      </p>
      <p>También podemos comunicar datos a autoridades cuando una ley o una resolución judicial lo exija.</p>

      <h2 id="transferencias">5. Transferencias internacionales</h2>
      <p>
        Algunos de nuestros proveedores pueden almacenar datos en servidores ubicados fuera de Chile. En esos casos
        verificamos que ofrezcan un nivel adecuado de protección o garantías suficientes, según lo exige la ley.
      </p>

      <h2 id="derechos">6. Tus derechos</h2>
      <p>En cualquier momento puedes ejercer tus derechos de:</p>
      <ul>
        <li>
          <strong>Acceso:</strong> saber qué datos tuyos tenemos y cómo los usamos.
        </li>
        <li>
          <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
        </li>
        <li>
          <strong>Supresión:</strong> pedir que eliminemos tus datos.
        </li>
        <li>
          <strong>Oposición:</strong> oponerte a un tratamiento determinado.
        </li>
        <li>
          <strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.
        </li>
        <li>
          <strong>Bloqueo:</strong> pedir la suspensión temporal de un tratamiento.
        </li>
      </ul>
      <p>
        También puedes retirar tu consentimiento cuando quieras, sin que eso afecte la licitud del tratamiento previo.
        Para ejercer cualquiera de estos derechos, escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a> con
        el asunto “Derechos de datos personales”. Es gratuito. Podremos pedirte información razonable para verificar
        tu identidad, y responderemos dentro del plazo legal.
      </p>
      <p>
        Si consideras que no atendimos correctamente tu solicitud, puedes reclamar ante la Agencia de Protección de
        Datos Personales, una vez que esta entre en funciones.
      </p>

      <h2 id="seguridad">7. Cómo protegemos tus datos</h2>
      <ul>
        <li>El sitio funciona exclusivamente sobre conexiones cifradas (HTTPS).</li>
        <li>El acceso a los datos está restringido a los socios que los necesitan, con autenticación multifactor.</li>
        <li>Los accesos a los sistemas donde se almacenan los datos quedan registrados.</li>
        <li>
          Contamos con un procedimiento de respuesta a incidentes. Si ocurre una vulneración que te afecte, la
          reportaremos a la autoridad y te informaremos cuando corresponda.
        </li>
      </ul>

      <h2 id="menores">8. Menores de edad</h2>
      <p>
        Este sitio está dirigido a personas adultas que representan a organizaciones. No recopilamos a sabiendas datos
        de menores de 14 años; si detectamos que lo hicimos sin la autorización correspondiente, los eliminaremos.
      </p>

      <h2 id="cookies">9. Cookies y almacenamiento local</h2>
      <p>
        Este sitio no utiliza cookies de analítica ni de publicidad. Solo podría usar almacenamiento técnico
        estrictamente necesario para su funcionamiento. Si en el futuro incorporamos otras herramientas, actualizaremos
        esta política y, cuando la ley lo exija, pediremos tu consentimiento antes de activarlas.
      </p>

      <h2 id="cambios">10. Cambios a esta política</h2>
      <p>
        Cada versión de esta política tiene un número y una fecha. Si hacemos cambios relevantes, lo indicaremos en
        este sitio y, cuando corresponda, te lo comunicaremos. Para cualquier duda, escríbenos o visita nuestra{" "}
        <Link href="/contacto">página de contacto</Link>.
      </p>
    </LegalPage>
  );
}
