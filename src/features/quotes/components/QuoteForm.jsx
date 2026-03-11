import { QUOTE_STATUS_OPTIONS } from "../constants/quote.constants";

export default function QuoteForm({
  formValues,
  formErrors,
  submitting,
  onChange,
  onSubmit,
}) {
  return (
    <form className="card" onSubmit={onSubmit} noValidate>
      <h3 style={{ marginTop: 0 }}>Nueva cotizacion</h3>

      <div className="field-group">
        <label htmlFor="customerName">Cliente *</label>
        <input
          id="customerName"
          name="customerName"
          value={formValues.customerName}
          onChange={onChange}
          placeholder="Empresa cliente"
          autoComplete="off"
        />
        {formErrors.customerName ? (
          <small style={{ color: "#f87171" }}>{formErrors.customerName}</small>
        ) : null}
      </div>

      <div className="field-group">
        <label htmlFor="email">Correo *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={onChange}
          placeholder="cliente@empresa.com"
          autoComplete="off"
        />
        {formErrors.email ? (
          <small style={{ color: "#f87171" }}>{formErrors.email}</small>
        ) : null}
      </div>

      <div className="field-group">
        <label htmlFor="amount">Monto *</label>
        <input
          id="amount"
          name="amount"
          type="number"
          min="0"
          step="0.01"
          value={formValues.amount}
          onChange={onChange}
          placeholder="0.00"
        />
        {formErrors.amount ? (
          <small style={{ color: "#f87171" }}>{formErrors.amount}</small>
        ) : null}
      </div>

      <div className="field-group">
        <label htmlFor="status">Estado</label>
        <select id="status" name="status" value={formValues.status} onChange={onChange}>
          {QUOTE_STATUS_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="description">Descripcion</label>
        <textarea
          id="description"
          name="description"
          value={formValues.description}
          onChange={onChange}
          placeholder="Notas internas de la cotizacion"
          rows={4}
        />
      </div>

      <button type="submit" className="btn-primary" disabled={submitting}>
        {submitting ? "Guardando..." : "Guardar cotizacion"}
      </button>
    </form>
  );
}
