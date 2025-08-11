import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoriteContext";

function ProductCard({ product, onView = () => {}, showCategory = false }) {
  const {
    id,
    title,
    category,
    price,
    discountPercentage,
    rating,
    images,
    thumbnail,
  } = product || {};

  const imageSrc =
    Array.isArray(images) && images.length > 0
      ? images[0]
      : thumbnail || "https://via.placeholder.com/300x250?text=No+image";

  const safeRating =
    typeof rating === "number" && !isNaN(rating) ? rating : null;

  const discountedPrice = discountPercentage
    ? (price - (price * discountPercentage) / 100).toFixed(2)
    : price?.toFixed(2);

  const { addToCart } = useCart();

  // ✅ Traer del contexto de favoritos
  const { favorites, setFavorites } = useFavorites();

  const addToFavorites = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="product-card">
      <div className="position-relative">
        <Link
          to={`/product/${id}`}
          onClick={onView}
          aria-label={`Ver ${title}`}
        >
          <img
            src={imageSrc}
            alt={title}
            className="card-img-top object-fit-contain"
            style={{ height: "180px" }}
            loading="lazy"
          />
        </Link>

        {discountPercentage && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            {discountPercentage}%
          </span>
        )}

        {/* Botón de favoritos */}
        <div className="position-absolute top-0 end-0 d-flex flex-column gap-1 m-2">
          <button
            className="btn btn-sm btn-light p-1 rounded hover-effect"
            onClick={() => toggleFavorite(product)}
          >
            <i
              className={
                isFavorite(id) ? "bi bi-heart-fill text-danger" : "bi bi-heart"
              }
            ></i>
          </button>
        </div>
      </div>

      {/* Info del producto */}
      <div className="p-3">
        <div
          className="card-body  d-flex flex-column"
          style={{ height: "130px" }}
        >
          <Link
            to={`/product/${id}`}
            className="text-decoration-none text-dark"
            onClick={onView}
          >
            <h6 className="card-title mb-2 product-title">{title}</h6>
          </Link>

          {showCategory && (
            <small className="text-muted mb-1 text-capitalize">
              {category}
            </small>
          )}

          <div className="d-flex align-items-center gap-2 mt-1">
            <h6 className="mb-0 text-danger">S/.{discountedPrice}</h6>
            {discountPercentage && (
              <small className="text-muted text-decoration-line-through">
                S/.{price?.toFixed(2)}
              </small>
            )}
          </div>

          <div className="d-flex align-items-center gap-2 mt-2">
            {safeRating ? (
              <>
                <StarRating rating={safeRating} />
                <small className="text-body-secondary">
                  ({safeRating.toFixed(1)})
                </small>
              </>
            ) : (
              <small>Sin calificación</small>
            )}
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button
            className="btn-add-to-cart"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Botón carrito */}
    </div>
  );
}

export default ProductCard;
