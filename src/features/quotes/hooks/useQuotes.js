import { useEffect, useState } from "react";
import { INITIAL_QUOTE_FORM } from "../constants/quote.constants";
import { createQuote, getQuotes } from "../services/quotes.api";
import { validateQuoteForm } from "../validation/quote.validation";

export function useQuotes() {
  // Datos de negocio para la tabla y estado de peticiones.
  const [quotes, setQuotes] = useState([]);
  const [loadingQuotes, setLoadingQuotes] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  // Estado y errores del formulario.
  const [formValues, setFormValues] = useState(INITIAL_QUOTE_FORM);
  const [formErrors, setFormErrors] = useState({});

  // Carga inicial de la tabla al montar la pagina.
  useEffect(() => {
    loadQuotes();
  }, []);

  async function loadQuotes() {
    setLoadingQuotes(true);
    setApiError("");

    try {
      const records = await getQuotes();
      setQuotes(records);
    } catch (error) {
      setApiError(error.message || "Error al cargar las cotizaciones.");
    } finally {
      setLoadingQuotes(false);
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpia el error del campo mientras el usuario corrige.
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }

  async function submitQuote(event) {
    event.preventDefault();
    setApiError("");

    const validationErrors = validateQuoteForm(formValues);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        ...formValues,
        amount: Number(formValues.amount),
      };

      await createQuote(payload);
      setFormValues(INITIAL_QUOTE_FORM);
      setFormErrors({});
      await loadQuotes();
    } catch (error) {
      setApiError(error.message || "Error al guardar la cotizacion.");
    } finally {
      setSubmitting(false);
    }
  }

  return {
    quotes,
    loadingQuotes,
    submitting,
    apiError,
    formValues,
    formErrors,
    handleInputChange,
    submitQuote,
  };
}
