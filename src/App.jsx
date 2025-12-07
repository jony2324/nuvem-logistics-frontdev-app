import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import ShipmentsPage from "./pages/ShipmentsPage.jsx";
import UsersRolesPage from "./pages/UsersRolesPage.jsx";

export default function App() {
  const [activePage, setActivePage] = useState("shipments");

  const renderPage = () => {
    if (activePage === "users") return <UsersRolesPage />;
    if (activePage === "profile") return <div>Perfil (en construcción)</div>;
    return <ShipmentsPage />;
  };

  return (
    <div className="app-root">
      <Sidebar activePage={activePage} onChangePage={setActivePage} />
      <div className="app-main">
        <Topbar activePage={activePage} onChangePage={setActivePage} />
        <div className="app-content">{renderPage()}</div>
      </div>
    </div>
  );
}
