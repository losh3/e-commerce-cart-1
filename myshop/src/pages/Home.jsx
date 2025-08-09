import ProductCard from "../components/ProductCard";
import { useRef } from "react";
import "../styles/home.css";
import banner_1 from "../assets/banner_1.png";
import banner_2 from "../assets/banner_2.png";
import banner_3 from "../assets/banner_3.png";
import banner_4 from "../assets/banner_4.png";

export default function Home({ products }) {
  const flashSalesRef = useRef(null);

  // 2. Función reusable para el desplazamiento
  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // 3. Filtramos productos para Flash Sales
  const flashSalesProducts = [...products]
    .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0))
    .slice(0, 8);
  return (
    <div>
      <div className="p-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner" style={{ height: "500px" }}>
            <div className="carousel-item active">
              <img
                src={banner_1}
                className="d-block w-100 h-100 object-fit-cover"
                alt="Promoción"
                loading="lazy" // Carga diferida
              />
            </div>
            <div className="carousel-item">
              <img
                src={banner_2}
                className="d-block w-100 h-100 object-fit-cover"
                alt="Promoción"
                loading="lazy" // Carga diferida
              />
            </div>
            <div className="carousel-item">
              <img
                src={banner_3}
                className="d-block w-100 h-100 object-fit-cover"
                alt="Promoción"
                loading="lazy" // Carga diferida
              />
            </div>
            <div className="carousel-item">
              <img
                src={banner_4}
                className="d-block w-100 h-100 object-fit-cover"
                alt="Promoción"
                loading="lazy" // Carga diferida
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mt-4">
        <div className="d-flex align-items-center mb-4">
          <div
            className="rectangle bg-danger"
            style={{ width: "20px", height: "40px" }}
          ></div>
          <h6 className="px-3 text-danger m-0">Ofertas de hoy</h6>
        </div>

        {/* Carrusel de Flash Sales (8 productos) */}
        <div className="container my-2">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold mb-0">Ofertas Flash</h2>
              <div className="d-flex align-items-center"></div>
            </div>
            <div className="d-flex">
              {" "}
              <div className="timer-badge bg-light text-dark px-3 py-1 rounded-pill me-3">
                <i className="bi bi-clock me-2"></i>
                <span>Termina en 24:00:00</span>
              </div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => handleScroll(flashSalesRef, "left")}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => handleScroll(flashSalesRef, "right")}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          <div
            ref={flashSalesRef}
            className="d-flex overflow-auto scrollbar-hidden py-3"
            style={{ gap: "20px", scrollSnapType: "x mandatory" }}
          >
            {flashSalesProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 position-relative"
                style={{ width: "250px", scrollSnapAlign: "start" }}
              >
                <ProductCard product={product} />
                {product.discountPercentage && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2 fs-6">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
