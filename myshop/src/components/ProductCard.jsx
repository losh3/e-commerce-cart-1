import StarRating from "./StarRating";
import "../styles/productCard.css";

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

  return (
    <div
      className="card product-card"
      style={{ width: "270px", height: "380px" }}
    >
      <div>
        <Link
          to={`{/product/${id}`}
          onClick={onView}
          aria-label={`Ver${title}`}
        >
          <img
            src={imageSrc}
            alt={title}
            className="card-img-top object-fit-contain"
            style={{ height: "200px", objectFit: "contain" }}
            loading="lazy"
          />
        </Link>
        {discountPercentage ? (
          <p className="position-absolute top-0 start-0">
            -{Math.round(discountPercentage)}%
          </p>
        ) : null}

        <div className="position-absolute top-0 end-0 d-flex flex-column gap-1">
          <button
            className="btn btn-sm btn-light p-1 rounded hover-effect"
            onClick={() => onFavorite(product)}
            aria-label={`Agregar ${title} a favoritos`}
            type="button"
          >
            <i className="bi bi-heart"></i>
          </button>
          <button
            className="btn btn-sm btn-light p-1 rounded hover-effect"
            onClick={() => onView(product)}
            aria-label={`Ver ${title}`}
            type="button"
          >
            <i className="bi bi-eye"></i>
          </button>
        </div>
      </div>
      <div className="card-body d-flex flex-column">
        <Link></Link>
      </div>
    </div>
  );
}

export default ProductCard;
