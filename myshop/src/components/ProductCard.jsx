import StarRating from "./StarRating";

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
          <div key={id} className="card h-100" style={{ width: "270px" }}>
            <div className="card-img-top position-relative">
              <img
                src={images[0]}
                alt={title}
                className="card-img-top object-fit-contain"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <p className="position-absolute top-0 start-0 bg-danger text-white px-2">
                -{discountPercentage}%
              </p>
              <i className="bi bi-heart position-absolute top-0 end-0 m-2"></i>
              <i className="bi bi-eye position-absolute bottom-0 end-0 m-2"></i>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-1 text-muted">{category}</h6>
              <h5 className="card-title">{title}</h5>
              <StarRating rating={rating} />
              <h5>${price}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
