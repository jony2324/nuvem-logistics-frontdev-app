// Endpoint unico del modulo de cotizaciones.
export const QUOTES_API_URL = "http://localhost:8000/api/v1/quotes/";

// Estado inicial del formulario para crear una cotizacion.
export const INITIAL_QUOTE_FORM = {
  customerName: "",
  email: "",
  amount: "",
  status: "Pendiente",
  description: "",
};

// Catalogo de estados permitidos.
export const QUOTE_STATUS_OPTIONS = ["Pendiente", "En transito", "Entregado"];
