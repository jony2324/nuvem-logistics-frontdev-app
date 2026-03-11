import { useMemo, useState } from "react";
import { QUOTE_STATUS_OPTIONS } from "../constants/quote.constants";

const statusClasses = {
  Pendiente: "badge badge--pending",
  "En transito": "badge badge--intransit",
  Entregado: "badge badge--delivered",
};

export default function QuotesTable({ quotes, loading }) {
  // Filtros locales de tabla desacoplados del flujo de creacion.
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filtra en memoria para no hacer roundtrip al backend por cada cambio.
  const filteredQuotes = useMemo(() => {
    const text = query.trim().toLowerCase();

    return quotes.filter((quote) => {
      const matchesText =
        !text ||
        String(quote.id || "").toLowerCase().includes(text) ||
        String(quote.customerName || quote.customer || "")
          .toLowerCase()
          .includes(text) ||
        String(quote.email || "").toLowerCase().includes(text);

      const quoteStatus = quote.status || "Pendiente";
      const matchesStatus = statusFilter === "all" || quoteStatus === statusFilter;

      return matchesText && matchesStatus;
    });
  }, [quotes, query, statusFilter]);

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Cotizaciones registradas</h3>

      <div className="filters-row">
        <div className="field-group" style={{ marginBottom: 0 }}>
          <label htmlFor="searchQuote">Buscar</label>
          <input
            id="searchQuote"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ID, cliente o correo"
            autoComplete="off"
          />
        </div>

        <div className="field-group" style={{ marginBottom: 0 }}>
          <label htmlFor="statusFilter">Estado</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">Todos</option>
            {QUOTE_STATUS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Correo</th>
            <th>Monto</th>
            <th>Estado</th>
            <th>Descripcion</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>
                Cargando cotizaciones...
              </td>
            </tr>
          ) : null}

          {!loading && filteredQuotes.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "1rem" }}>
                No se encontraron cotizaciones.
              </td>
            </tr>
          ) : null}

          {!loading
            ? filteredQuotes.map((quote) => {
                const status = quote.status || "Pendiente";
                const rowId = quote.id || quote._id || `${quote.customerName}-${quote.email}`;

                return (
                  <tr key={rowId}>
                    <td>{quote.id || "-"}</td>
                    <td>{quote.customerName || quote.customer || "-"}</td>
                    <td>{quote.email || "-"}</td>
                    <td>
                      {Number(quote.amount || 0).toLocaleString("es-MX", {
                        style: "currency",
                        currency: "MXN",
                      })}
                    </td>
                    <td>
                      <span className={statusClasses[status] || "badge"}>{status}</span>
                    </td>
                    <td>{quote.description || "-"}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}
