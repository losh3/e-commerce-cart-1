import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border-bottom py-2"
        >
          <div>
            <strong>{item.title}</strong> x {item.quantity}
          </div>
          <div>
            ${item.price * item.quantity}
            <button
              className="btn btn-sm btn-danger ms-3"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-warning mt-3" onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
}
