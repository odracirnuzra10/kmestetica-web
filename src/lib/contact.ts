/** Contacto público KM Estética Profesional */
export const WHATSAPP_E164 = "56992234618";
export const WHATSAPP_DISPLAY = "+56 9 9223 4618";

const DEFAULT_MSG =
  "Hola Katherine, quiero agendar una evaluación en KM Estética Profesional.";

export function whatsappUrl(message: string = DEFAULT_MSG): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}

export const CLINERA_URL = "https://www.clinera.io";
