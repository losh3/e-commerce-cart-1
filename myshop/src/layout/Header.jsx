// Header.jsx
import logotipo from "../assets/logotipo.png";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const { cartItems } = useCart();

  return (
    <header className="bg-light d-flex justify-content-between align-items-center p-3">
      {/* Botón toggle SIEMPRE visible */}
      <button
        className="btn btn-outline-secondary me-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Logo */}
      <NavLink className="navbar-brand d-flex align-items-center m-0" to="/">
        <img src={logotipo} alt="Logo" height="60" />
      </NavLink>

      {/* Íconos */}
      <div className="d-flex align-items-center gap-4 ms-auto">
        <NavLink to="/" className="text-black">
          Ofertas
        </NavLink>
        <NavLink className="text-black">Mis compras</NavLink>
        <NavLink to="/favorites" className="nav-link">
          <i className="bi bi-heart fs-4"></i>
        </NavLink>
        <NavLink to="/cart" className="nav-link position-relative">
          <i className="bi bi-cart fs-4"></i>
          {cartItems.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </NavLink>
      </div>
    </header>
  );
}
