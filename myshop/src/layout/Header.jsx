import { useState } from "react";
import logotipo from "../assets/logotipo.png";
import { NavLink } from "react-router-dom";

export default function Header({ onSearchChange }) {
  const [searchProducts, setSearchProducts] = useState("");

  return (
    <div className="p-3 bg-light d-flex justify-content-between align-items-center">
      {/* Logo a la izquierda */}
      <NavLink className="navbar-brand" to="/">
        <img src={logotipo} alt="Logo" height="50" />
      </NavLink>

      {/* Buscador + Iconos a la derecha (siempre visibles) */}
      <div className="d-flex align-items-center gap-3 ms-auto">
        {/* Search */}
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
            onChange={(e) => {
              setSearchProducts(e.target.value);
              onSearchChange(e.target.value);
            }}
            value={searchProducts}
          />
        </form>

        {/* Íconos */}
        <NavLink to="/favorites" className="nav-link">
          <i className="bi bi-heart fs-5 icon-hover"></i>
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <i className="bi bi-cart fs-5 icon-hover"></i>
        </NavLink>
      </div>
    </div>
  );
}
