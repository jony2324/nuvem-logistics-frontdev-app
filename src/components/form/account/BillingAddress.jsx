export default function BillingAddress({ register }) {
  return (
    <>
      <div className="section-title">Billing Address</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Street</label>
          <input {...register("billing_street")} />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input {...register("billing_zip_postal_code")} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input {...register("billing_city")} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input {...register("billing_state_province")} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input {...register("billing_country")} />
        </div>
      </div>
    </>
  );
}