import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import ShipmentsPage from "./pages/ShipmentsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shipmentsPage" element={<ShipmentsPage />} />
    </Routes>
  );
}
