import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import ShipmentsPage from "./pages/ShipmentsPage";
import AccountsTest from "./pages/AccountsPage";
import CreateAccount from "./pages/CreateAccount";
import CotizacionesPage from "./pages/Cotizaciones";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shipmentsPage" element={<ShipmentsPage />} />
      <Route path="/accounts" element={<AccountsTest />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/quotes" element={<CotizacionesPage />} />
    </Routes>
  );
}
