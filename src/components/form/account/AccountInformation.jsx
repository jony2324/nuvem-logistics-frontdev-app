export default function AccountInfo({ register }) {
  return (
    <>
      <div className="section-title">Account Info</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Name</label>
          <input {...register("name")} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register("contact_email")} />
        </div>
        <div className="form-group">
          <label>RFC</label>
          <input {...register("rfc")} />
        </div>
        <div className="form-group">
          <label>Type</label>
          <input {...register("type")} />
        </div>
        <div className="form-group">
          <label>Account Owner</label>
          <span>1</span>
        </div>
        <div className="form-group">
          <label>Contact Phone</label>
          <input {...register("contact_phone")} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input {...register("phone")} />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input {...register("website")} />
        </div>
        <div className="form-group">
          <label>Account Currency</label>
          <input {...register("account_currency")} />
        </div>
        <div className="form-group">
          <label>Collection Executive</label>
          <input {...register("collection_executive")} />
        </div>
        <div className="form-group">
          <label>Credit Days</label>
          <input type="number" {...register("credit_days")} />
        </div>
        <div className="form-group">
          <label>Operations Executive</label>
          <input {...register("operations_executive")} />
        </div>
        <div className="form-group checkbox-group">
          <label>Authorized Credit</label>
          <input type="checkbox" {...register("authorized_credit")} />
        </div>        
        <div className="form-group full-width">
          <label>Description</label>
          <textarea {...register("description")} />
        </div>        
      </div>
    </>
  );
}