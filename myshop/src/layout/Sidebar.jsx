import { useState } from "react";
import CategoriaDropdown from "../components/CategoryDropdown";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [openIndex, setOpenIndex] = useState(null); // corregido

  const categorias = [
    {
      icon: "bi-tv",
      label: "Tecnología",
      items: [
        { label: "Smartphones", value: "smartphones" },
        { label: "Laptops", value: "laptops" },
        { label: "Tablets", value: "tablets" },
      ],
    },
    {
      icon: "bi bi-gender-male",
      label: "Hombres",
      items: [
        { label: "Camisas", value: "mens-shirts" },
        { label: "Calzado", value: "mens-shoes" },
        { label: "Relojes", value: "mens-watches" },
      ],
    },
    {
      icon: "bi bi-gender-female",
      label: "Mujeres",
      items: [
        { label: "Vestidos", value: "womens-dresses" },
        { label: "Calzado", value: "womens-shoes" },
        { label: "Bolsos", value: "womens-bags" },
        { label: "Relojes", value: "womens-watches" },
        { label: "Joyeria", value: "womens-jewellery" },
        { label: "Tops", value: "tops" },
      ],
    },
    {
      icon: "bi bi-flower1",
      label: "Belleza",
      items: [
        { label: "Cosméticos", value: "beauty" },
        { label: "Skincare", value: "skin-care" },
        { label: "Fragancias", value: "fragrances" },
      ],
    },
    {
      icon: "bi bi-eyeglasses",
      label: "Accesorios",
      items: [
        { label: "Gafas de sol", value: "sunglasses" },
        { label: "Deportes", value: "sports-accessories" },
      ],
    },
    {
      icon: "bi bi-house",
      label: "Hogar",
      items: [
        { label: "Muebles", value: "furniture" },
        { label: "Decoración", value: "home-decoration" },
        { label: "Accesorios de cocina", value: "kitchen-accessories" },
        { label: "Alimentos", value: "groceries" },
      ],
    },
    {
      icon: "bi bi-car-front",
      label: "Vehículos",
      items: [
        { label: "Vehiculos", value: "vehicle" },
        { label: "Motocicleta", value: "motorcycle" },
      ],
    },
  ];

  return (
    <>
      {/* Overlay que cierra al hacer click fuera */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      <aside className={`sidebar ${sidebarOpen ? "open" : "hidden"}`}>
        {sidebarOpen && (
          <div className="sidebar-content bg-light">
            <nav className="nav flex-column">
              {categorias.map((cat, idx) => (
                <CategoriaDropdown
                  key={idx}
                  icon={cat.icon}
                  label={cat.label}
                  items={cat.items}
                  sidebarOpen={sidebarOpen}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </nav>
            <div>
              <NavLink>
                <i className="bi bi-facebook"></i>
              </NavLink>
              <NavLink>
                <i className="bi bi-twitter-x"></i>
              </NavLink>
              <NavLink>
                <i className="bi bi-instagram"></i>
              </NavLink>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
