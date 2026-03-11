import React from "react";
import { useForm } from "react-hook-form";
import AccountInfo from "./AccountInformation";
import BankInfo from "./BankInfo";
import BillingAddress from "./BillingAddress";
import ShippingAddress from "./ShippingAddress";

const initialValues = {
  name: "",
  contact_email: "",
  rfc: "",
  type: "",
  account_owner_id: null,
  contact_phone: "",
  phone: "",
  description: "",
  website: "",
  account_currency: "MXN",
  collection_executive: "",
  authorized_credit: false,
  credit_days: 0,
  operations_executive: "",
  bank_name: "",
  bank_account_number: "",
  industry: "",
  employees: 0,
  parent_account_id: null,

  billing_street: "",
  billing_zip_postal_code: "",
  billing_city: "",
  billing_state_province: "",
  billing_country: "",

  shipping_street: "",
  shipping_zip_postal_code: "",
  shipping_city: "",
  shipping_state_province: "",
  shipping_country: ""
};

export default function AccountForm() {
  const { register, handleSubmit, reset } = useForm({ defaultValues: initialValues });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/accounts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json()
      console.log("response of server: ",result)
      alert("Account created successfully")
      reset();

    }catch(error){
      console.error("Error to create account:", error);
      alert("An error occurred while creating the account. Please try again.");
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Account Form</h2>
        <p className="page-description">Complete the information below</p>
      </div>

      <div className="card">
        <AccountInfo register={register} />
        <BankInfo register={register} />
        <BillingAddress register={register} />
        <ShippingAddress register={register} />

        <div className="button-row">
          <button type="submit" className="btn-primary" onClick={handleSubmit(onSubmit)}>
            Save
          </button>
          <button type="button" className="btn-secondary">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}