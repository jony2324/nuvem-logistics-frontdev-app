import React, { useState, useMemo } from "react";

const initialQuotes = [
  {
    id: "COT-0001",
    status: "En tránsito",
    origin: "Guadalajara",
    destination: "CDMX",
    eta: "2025-11-15",
    carrier: "DHL",
    customer: "ACME S.A.",
  },
  {
    id: "COT-0002",
    status: "Entregado",
    origin: "Monterrey",
    destination: "Querétaro",
    eta: "2025-11-10",
    carrier: "FedEx",
    customer: "TechCorp",
  },
  {
    id: "COT-0003",
    status: "Pendiente",
    origin: "Zapopan",
    destination: "Tijuana",
    eta: "2025-11-20",
    carrier: "Estafeta",
    customer: "Store MX",
  },
  {
    id: "COT-0004",
    status: "En tránsito",
    origin: "CDMX",
    destination: "Guadalajara",
    eta: "2025-11-18",
    carrier: "RedPack",
    customer: "Retailers GDL",
  },
];

const statusColors = {
  Pendiente: "badge badge--pending",
  "En tránsito": "badge badge--intransit",
  Entregado: "badge badge--delivered",
};

export default function QuotesPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredQuotes = useMemo(() => {
    return initialQuotes.filter((q) => {
      const matchesQuery =
        q.id.toLowerCase().includes(query.toLowerCase()) ||
        q.origin.toLowerCase().includes(query.toLowerCase()) ||
        q.destination.toLowerCase().includes(query.toLowerCase()) ||
        q.customer.toLowerCase().includes(query.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : q.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Cotizaciones</h2>
        <p className="page-description">
          Consulta y filtra las cotizaciones de envíos generadas en la
          plataforma.
        </p>
      </div>

      <div className="filters-row">
        <div className="field-group">
          <label>Buscar</label>
          <input
            type="text"
            placeholder="ID, cliente, origen, destino..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="field-group">
          <label>Estado</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En tránsito">En tránsito</option>
            <option value="Entregado">Entregado</option>
          </select>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Proveedor</th>
              <th>Fecha estimada</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuotes.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.customer}</td>
                <td>{q.origin}</td>
                <td>{q.destination}</td>
                <td>{q.carrier}</td>
                <td>{q.eta}</td>
                <td>
                  <span className={statusColors[q.status]}>{q.status}</span>
                </td>
              </tr>
            ))}

            {filteredQuotes.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "1rem" }}
                >
                  No se encontraron cotizaciones.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
