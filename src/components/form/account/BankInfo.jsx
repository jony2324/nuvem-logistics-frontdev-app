export default function BankInfo({ register }) {
  return (
    <>
      <div className="section-title">Bank Info</div>
      <div className="form-grid">
        <div className="form-group">
          <label>Bank Name</label>
          <input {...register("bank_name")} />
        </div>
        <div className="form-group">
          <label>Bank Account Number</label>
          <input {...register("bank_account_number")} />
        </div>
      </div>
    </>
  );
}