import CategoriaDropdown from "../components/CategoryDropdown";
import "../styles/sidebar.css";
import logotipo from "../assets/logotipo.png";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
      {/* Botón solo visible en pantallas pequeñas */}
      <button
        className="toggle-btn btn btn-outline-secondary d-md-none"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <i className={`bi ${sidebarOpen ? "bi-x-lg" : "bi-list"}`}></i>
      </button>

      <div className="sidebar-content">
        <div className="logo-container">
          <img src={logotipo} alt="Logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-header mb-3 h2 px-3">
          {sidebarOpen && <span className="ms-2">Categorías</span>}
        </div>

        <nav className="nav flex-column">
          <CategoriaDropdown
            icon="bi-tv"
            label="Tecnología"
            items={["Smartphones", "Tablets", "Laptops", "Accesorios Mobiles"]}
            sidebarOpen={sidebarOpen}
          />
          <CategoriaDropdown
            icon="bi bi-gender-male"
            label="Hombres"
            items={["Camisas", "Calzado", "Relojes"]}
            sidebarOpen={sidebarOpen}
          />
          <CategoriaDropdown
            icon="bi bi-gender-female"
            label="Mujeres"
            items={[
              "Vestidos",
              "Calzado",
              "Bolsos",
              "Relojes",
              "Joyeria",
              "Tops",
            ]}
            sidebarOpen={sidebarOpen}
          />
          <CategoriaDropdown
            icon="bi bi-bag-heart"
            label="Belleza"
            items={["Maquillaje", "Perfumes", "Cuidado de la piel"]}
            sidebarOpen={sidebarOpen}
          />
          <CategoriaDropdown
            icon="bi bi-lightbulb"
            label="Hogar"
            items={["Decoración", "Electrodomésticos", "Muebles"]}
            sidebarOpen={sidebarOpen}
          />
          <CategoriaDropdown
            icon="bi bi-bag"
            label="Accesorios"
            items={["Carteras", "Lentes", "Sombreros"]}
            sidebarOpen={sidebarOpen}
          />
          <CategoriaDropdown
            icon="bi bi-car-front"
            label="Vehículos"
            items={["Autos", "Motos", "Repuestos"]}
            sidebarOpen={sidebarOpen}
          />
        </nav>
      </div>
    </aside>
  );
}
