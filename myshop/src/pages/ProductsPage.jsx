import { getProducts, getProductsByCategory } from "../services/productsApi";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = selectedCategory
        ? await getProductsByCategory(selectedCategory)
        : await getProducts();
      setProducts(data.products);
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} />
      ))}
    </div>
  );
}
