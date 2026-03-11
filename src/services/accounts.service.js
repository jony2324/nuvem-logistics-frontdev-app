import api from "../api/axios";

export const getAccounts = async () => {
  const res = await api.get("/accounts");
  return res.data;
};