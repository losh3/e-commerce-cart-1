// Header.jsx
import logotipo from "../assets/logotipo.png";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="bg-light d-flex justify-content-between align-items-center">
      {/* Botón toggle solo visible en móvil */}
      {!sidebarOpen && (
        <button
          className="btn btn-outline-secondary me-2"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>
      )}

      {/* Logo */}
      <NavLink className="navbar-brand d-flex align-items-center m-0" to="/">
        <img src={logotipo} alt="Logo" height="50" />
      </NavLink>

      {/* Íconos siempre visibles */}
      <div className="d-flex align-items-center gap-3 ms-auto">
        <NavLink to="/favorites" className="nav-link">
          <i className="bi bi-heart fs-5"></i>
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <i className="bi bi-cart fs-5"></i>
        </NavLink>
      </div>
    </header>
  );
}
