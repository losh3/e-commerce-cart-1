import { useEffect, useState } from "react";
import { getProducts } from "./services/productsApi.js";
import ProductCard from "./components/ProductCard.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setProducts(data.products); // 👈 extraemos solo el array
      } catch (error) {
        console.error("Error al obtener productos", error);
      }
    })();
  }, []);

  return (
    <>
      <h1>HOLA</h1>
      <ProductCard products={products} />
    </>
  );
}

export default App;
