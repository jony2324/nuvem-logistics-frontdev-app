import "./CreateAccount.css";
import React from "react";
import AccountForm from "../components/form/account/AccountForm";

export default function CreateForm() {
  return (
    <div className="page">
      <div className="page-header">
        <h2>Create Account</h2>
        <p className="page-description">Fill out the form below to create a new account.</p>
      </div>

      <div className="card">
        <AccountForm />
      </div>
    </div>
  );
}