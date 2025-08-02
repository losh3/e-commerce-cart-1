import StarRating from "./StarRating";
import "../styles/productCard.css";

function ProductCard({ products }) {
  return (
    <div className="product-list container d-flex flex-wrap gap-3">
      {products.map((product) => {
        const {
          id,
          title,
          category,
          price,
          discountPercentage,
          rating,
          images,
        } = product;

        return (
          <div
            key={id}
            className="card "
            style={{ width: "270px", height: "380px" }}
          >
            <div className="card-img-top position-relative">
              <img
                src={
                  Array.isArray(images) && images.length > 0
                    ? images[0]
                    : product.thumbnail || "https://via.placeholder.com/150"
                }
                alt={title}
                className="card-img-top object-fit-contain"
                style={{ height: "250px", objectFit: "contain" }}
              />
              <p className="position-absolute top-0 start-0 bg-danger text-white px-2">
                -{discountPercentage}%
              </p>
              <div className="position-absolute top-0 end-0 d-flex flex-column gap-1 m-2">
                <i className="bi bi-heart fs-5 p-1 rounded hover-effect"></i>
                <i className="bi bi-eye fs-5 p-1 rounded hover-effect"></i>
              </div>
            </div>
            <div className="card-body d-flex flex-column ">
              <h5 className="card-title mb-2">{title}</h5>
              <h5 className="card-title">${price}</h5>
              <div className="d-flex align-items-center gap-2">
                <StarRating rating={rating} />
                <small className="text-body-secondary">
                  ({rating.toFixed(1)})
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
