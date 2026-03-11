export default function ShippingAddress({ register }) {
  return (
    <>
      <div className="section-title">Shipping Address</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Street</label>
          <input {...register("shipping_street")} />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input {...register("shipping_zip_postal_code")} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input {...register("shipping_city")} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input {...register("shipping_state_province")} />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input {...register("shipping_country")} />
        </div>
      </div>
    </>
  );
}