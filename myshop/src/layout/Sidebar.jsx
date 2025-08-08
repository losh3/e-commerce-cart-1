import CategoriaDropdown from "../components/CategoryDropdown";
import "../styles/sidebar.css";
import logotipo from "../assets/logotipo.png";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""} ${
          !sidebarOpen && window.innerWidth >= 768 ? "collapsed" : ""
        }`}
      >
        {/* Solo renderiza contenido si está abierto */}
        {sidebarOpen && (
          <div className="sidebar-content">
            {/* Botón de cerrar (solo en mobile) */}
            <div className="d-flex justify-content-end px-3 pt-3 show-only-mobile">
              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setSidebarOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <nav className="nav flex-column">
              <CategoriaDropdown
                icon="bi-tv"
                label="Tecnología"
                items={[
                  "Smartphones",
                  "Tablets",
                  "Laptops",
                  "Accesorios Mobiles",
                ]}
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
        )}
      </aside>
    </>
  );
}
