import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import FavoritesPage from "../pages/FavoritePage";

export default function MyRoutes({ products }) {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route index element={<Home products={products} />} />
        <Route path="/category/:category" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}
