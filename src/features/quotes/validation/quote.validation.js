// Valida los campos obligatorios y formato basico del formulario.
export function validateQuoteForm(formValues) {
  const errors = {};

  if (!formValues.customerName.trim()) {
    errors.customerName = "El nombre del cliente es obligatorio.";
  }

  if (!formValues.email.trim()) {
    errors.email = "El correo es obligatorio.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formValues.email && !emailRegex.test(formValues.email)) {
    errors.email = "El correo no tiene un formato valido.";
  }

  const numericAmount = Number(formValues.amount);
  if (!formValues.amount || Number.isNaN(numericAmount) || numericAmount <= 0) {
    errors.amount = "El monto debe ser mayor a 0.";
  }

  return errors;
}
