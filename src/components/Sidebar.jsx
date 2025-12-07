import React from "react";

export default function Sidebar({ activePage, onChangePage }) {
  const items = [
    { id: "shipments", label: "Envíos" },
    { id: "users", label: "Usuarios & Roles" },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">📦</span>a
        <span className="logo-text">Tracker</span>
      </div>
      <nav className="sidebar-nav">
        {items.map((i) => (
          <button
            key={i.id}
            className={
              "sidebar-nav-item" +
              (activePage === i.id ? " sidebar-nav-item--active" : "")
            }
            onClick={() => onChangePage(i.id)}
          >
            {i.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
