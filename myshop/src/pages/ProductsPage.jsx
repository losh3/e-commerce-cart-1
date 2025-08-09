import { getProducts, getProductsByCategory } from "../services/productsApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ selectedCategory }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = category
          ? await getProductsByCategory(category)
          : await getProducts();
        setProducts(data.products || []);
      } catch (error) {
        setError(error.message || "Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (products.length === 0) return <p>No hay productos</p>;

  return (
    <div className="d-flex flex-wrap gap-3">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          onFavorite={(prod) => console.log("fav", prod.id)}
          onView={(prod) => console.log("view", prod.id)}
        />
      ))}
    </div>
  );
}
