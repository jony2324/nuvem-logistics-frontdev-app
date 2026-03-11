import { QUOTES_API_URL } from "../constants/quote.constants";

// Centraliza el manejo de respuesta para estandarizar errores HTTP.
async function parseApiResponse(response, defaultMessage) {
  if (!response.ok) {
    throw new Error(defaultMessage);
  }

  const data = await response.json();
  return data;
}

// GET: obtiene la lista de cotizaciones para poblar la tabla.
export async function getQuotes() {
  const response = await fetch(QUOTES_API_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await parseApiResponse(
    response,
    "No fue posible obtener las cotizaciones."
  );

  // Soporta APIs que devuelven array directo o array en la propiedad results.
  if (Array.isArray(data)) {
    return data;
  }

  return Array.isArray(data.results) ? data.results : [];
}

// POST: envia una nueva cotizacion creada desde el formulario.
export async function createQuote(payload) {
  const response = await fetch(QUOTES_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseApiResponse(response, "No fue posible guardar la cotizacion.");
}
