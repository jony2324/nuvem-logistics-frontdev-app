import React, { useEffect, useRef, useState } from "react";

export default function Topbar({ activePage, onChangePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // En un escenario real, este valor vendría del contexto de autenticación
  const isAdmin = true;

  const wrapperRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleProfileClick = (event) => {
    event.preventDefault();
    onChangePage("profile"); // <- aquí cambias la página
    closeMenu();
  };

  const handleUsersClick = (event) => {
    event.preventDefault();
    onChangePage("users"); // <- aquí cambias la página
    closeMenu();
  };

  // Cerrar como en Facebook: click fuera o tecla ESC
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="topbar">
      <div>
        <h1 className="topbar-title">Shipment Tracker</h1>
        <p className="topbar-subtitle">
          Panel para monitorear envíos y administrar usuarios.
        </p>
      </div>

      <div className="topbar-user-wrapper" ref={wrapperRef}>
        <button
          type="button"
          className="topbar-user-button"
          onClick={toggleMenu}
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
        >
          <div className="topbar-user">
            <div className="topbar-user-avatar">JA</div>
            <div className="topbar-user-info">
              <span className="topbar-user-name">Admin</span>
              <span className="topbar-user-role">Super Admin</span>
            </div>
            <span className="topbar-user-arrow">▾</span>
          </div>
        </button>

        {isMenuOpen && (
          <div className="topbar-user-menu" role="menu">
            <div className="topbar-user-menu-header">
              <div className="topbar-user-avatar">JA</div>
              <div className="topbar-user-menu-header-info">
                <span className="topbar-user-name">Admin</span>
                <span className="topbar-user-role">Super Admin</span>
              </div>
            </div>

            <div className="topbar-user-menu-divider" />

            <button
              type="button"
              className="topbar-user-menu-item"
              onClick={handleProfileClick}
              role="menuitem"
            >
              Perfil
            </button>

            {isAdmin && (
              <button
                type="button"
                className="topbar-user-menu-item"
                onClick={handleUsersClick}
                role="menuitem"
              >
                Usuarios
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
