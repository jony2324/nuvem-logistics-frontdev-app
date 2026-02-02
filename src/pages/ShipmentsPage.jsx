import React, { useMemo, useState } from "react";
import "./ShipmentsPage.css";

const initialShipments = [
  {
    id: "SHP-0001",
    status: "En tránsito",
    origin: "Guadalajara",
    destination: "CDMX",
    eta: "2025-11-15",
    carrier: "DHL",
    customer: "ACME S.A.",
  },
  {
    id: "SHP-0002",
    status: "Entregado",
    origin: "Monterrey",
    destination: "Querétaro",
    eta: "2025-11-10",
    carrier: "FedEx",
    customer: "TechCorp",
  },
  {
    id: "SHP-0003",
    status: "Pendiente",
    origin: "Zapopan",
    destination: "Tijuana",
    eta: "2025-11-20",
    carrier: "Estafeta",
    customer: "Store MX",
  },
  {
    id: "SHP-0004",
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

export default function ShipmentsPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredShipments = useMemo(() => {
    const q = query.trim().toLowerCase();

    return initialShipments.filter((s) => {
      const matchesQuery =
        !q ||
        s.id.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q) ||
        s.destination.toLowerCase().includes(q) ||
        s.customer.toLowerCase().includes(q);

      const matchesStatus = statusFilter === "all" ? true : s.status === statusFilter;

      return matchesQuery && matchesStatus;
    });
  }, [query, statusFilter]);

  return (
    <div className="page">
      <div className="page-header">
        <h2>Envíos</h2>
        <p className="page-description">
          Consulta, filtra y visualiza todos los envíos de la plataforma.
        </p>
      </div>

      <div className="filters-row">
        <div className="field-group">
          <label>Buscar</label>
          <input
            type="text"
            placeholder="ID, origen, destino, cliente..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div className="field-group">
          <label>Estado</label>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
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
              <th>Carrier</th>
              <th>ETA</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {filteredShipments.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.customer}</td>
                <td>{s.origin}</td>
                <td>{s.destination}</td>
                <td>{s.carrier}</td>
                <td>{s.eta}</td>
                <td>
                  <span className={statusColors[s.status] || "badge"}>{s.status}</span>
                </td>
              </tr>
            ))}

            {filteredShipments.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: "1rem" }}>
                  No se encontraron envíos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
