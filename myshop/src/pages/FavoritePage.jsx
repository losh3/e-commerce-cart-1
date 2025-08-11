import { useFavorites } from "../context/FavoriteContext";
import ProductCard from "../components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No tienes productos en favoritos ❤️</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Mis Favoritos</h2>
      <div className="row">
        {favorites.map((product) => (
          <div key={product.id} className="col-md-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
