import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import ProductsPage from "../pages/ProductsPage";

export default function MyRoutes({ products }) {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home products={products} />} />
        <Route path="/category/:category" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}
