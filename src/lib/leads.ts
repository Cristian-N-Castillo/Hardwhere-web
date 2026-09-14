import "server-only";

export type Lead = {
  kind: "contacto" | "checklist-ley-21719";
  email: string;
  consentAt: string;
  policyVersion: string;
  [field: string]: string | undefined;
};

// LEADS_WEBHOOK_URL puede apuntar a n8n, Make, Zapier o un Apps Script que escriba en una planilla.
export async function saveLead(lead: Lead) {
  const url = process.env.LEADS_WEBHOOK_URL;

  if (!url) {
    if (process.env.NODE_ENV === "development") {
      console.info("[lead]", lead);
      return;
    }
    throw new Error("LEADS_WEBHOOK_URL no está configurado");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(lead),
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`El webhook de leads respondió ${res.status}`);
}
