import { useState } from "react";

export default function useForm(initialValues) {

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const setField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData(initialValues);
  };

  return {
    formData,
    setFormData,
    handleChange,
    setField,
    resetForm
  };
}