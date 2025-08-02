import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getProducts } from "./services/productsApi.js";
import ProductCard from "./components/ProductCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Deals from "./pages/Deals.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar onSearchChange={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ProductCard products={filteredProducts} />
            </>
          }
        />
        <Route path="/ofertas" element={<Deals />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
