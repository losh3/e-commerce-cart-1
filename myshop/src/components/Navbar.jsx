import { NavLink } from "react-router-dom";
import { useState } from "react";
import logotipo from "../assets/logotipo.png";
import "../styles/navbar.css";

export default function Navbar({ onSearchChange }) {
  const [searchProducts, setSearchProducts] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Mobile: Toggler + Logo on left */}
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink className="navbar-brand pe-3" to="/">
            <img src={logotipo} alt="Logo" height="50" />
          </NavLink>
        </div>

        {/* Mobile: Icons on right */}
        <div className="d-flex d-lg-none gap-3">
          <NavLink to="/favorites" className="nav-link">
            <i className="bi bi-heart fs-5 icon-hover"></i>
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            <i className="bi bi-cart fs-5 icon-hover"></i>
          </NavLink>
        </div>

        {/* Collapsible content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          {/* Desktop: Navigation links center */}
          <ul className="navbar-nav  flex-grow-1">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ofertas" className="nav-link">
                Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/nosotros" className="nav-link">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
            </li>
          </ul>

          {/* Desktop: Search + Icons on right */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <form className="d-flex me-3">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                onChange={(e) => {
                  setSearchProducts(e.target.value);
                  onSearchChange(e.target.value); // esto pasa el valor a App
                }}
                value={searchProducts}
              />
            </form>
            <NavLink to="/favorites" className="nav-link">
              <i className="bi bi-heart fs-5 icon-hover"></i>
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              <i className="bi bi-cart fs-5 icon-hover"></i>
            </NavLink>
          </div>

          {/* Mobile: Search inside collapsed menu */}
          <form className="d-lg-none mt-3">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                onChange={(e) => {
                  setSearchProducts(e.target.value);
                  onSearchChange(e.target.value); // esto pasa el valor a App
                }}
                value={searchProducts}
              />
              <button className="btn btn-outline-secondary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
