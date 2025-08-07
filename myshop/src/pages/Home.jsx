import ProductCard from "../components/ProductCard";

export default function Home({ products }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </div>
  );
}
