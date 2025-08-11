import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import "../styles/productCard.css";
import { useCart } from "../context/CartContext";

function ProductCard({
  product,
  onFavorite = () => {},
  onView = () => {},
  showCategory = false,
}) {
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

  // ✅ Calcular precio con descuento
  const discountedPrice = discountPercentage
    ? (price - (price * discountPercentage) / 100).toFixed(2)
    : price?.toFixed(2);

  const { addToCart } = useCart();

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

        <div className="position-absolute top-0 end-0 d-flex flex-column gap-1 m-2">
          <button
            className="btn btn-sm btn-light p-1 rounded hover-effect"
            onClick={() => onFavorite(product)}
          >
            <i className="bi bi-heart"></i>
          </button>
          <button
            className="btn btn-sm btn-light p-1 rounded hover-effect"
            onClick={() => onView(product)}
          >
            <i className="bi bi-eye"></i>
          </button>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <Link
          to={`/product/${id}`}
          className="text-decoration-none text-dark"
          onClick={onView}
        >
          <h6 className="card-title product-title">{title}</h6>
        </Link>

        {showCategory && (
          <small className="text-muted mb-1 text-capitalize">{category}</small>
        )}

        <div className="d-flex align-items-center gap-2 mt-1">
          <h5 className="mb-0 text-danger">${discountedPrice}</h5>
          {discountPercentage && (
            <small className="text-muted text-decoration-line-through">
              ${price?.toFixed(2)}
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
      <div>
        <Link>
          <button
            className="btn-add-to-cart"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Agregar al carrito
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
