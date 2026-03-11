import QuoteForm from "../features/quotes/components/QuoteForm";
import QuotesTable from "../features/quotes/components/QuotesTable";
import { useQuotes } from "../features/quotes/hooks/useQuotes";
import "./ShipmentsPage.css";

export default function CotizacionesPage() {
  const {
    quotes,
    loadingQuotes,
    submitting,
    apiError,
    formValues,
    formErrors,
    handleInputChange,
    submitQuote,
  } = useQuotes();

  return (
    <div className="page">
      <div className="page-header">
        <h2>Cotizaciones</h2>
        <p className="page-description">
          Registra nuevas cotizaciones y consulta las existentes desde una sola vista.
        </p>
      </div>

      {apiError ? <p style={{ color: "#f87171" }}>{apiError}</p> : null}

      <div className="page--split">
        <QuoteForm
          formValues={formValues}
          formErrors={formErrors}
          submitting={submitting}
          onChange={handleInputChange}
          onSubmit={submitQuote}
        />

        <QuotesTable quotes={quotes} loading={loadingQuotes} />
      </div>
    </div>
  );
}
