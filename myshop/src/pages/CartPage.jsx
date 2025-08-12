import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  // Calcular total aplicando descuentos
  const totalPrice = cartItems.reduce((sum, item) => {
    const discountValue = item.price * (item.discountPercentage / 100);
    const finalPrice = item.price - discountValue;
    return sum + finalPrice * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-5 py-5">
        <i className="bi bi-cart-x fs-1 text-muted"></i>
        <p className="mt-3">Tu carrito está vacío.</p>
        <a href="/" className="btn btn-primary mt-2">
          Volver a la tienda
        </a>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2 className="mb-4">
        <i className="bi bi-cart3 me-2"></i>Carrito de compras
      </h2>

      {/* Encabezados */}
      <div className="row fw-bold border-bottom pb-2 mb-3 d-none d-md-flex text-center">
        <div className="col-md-5 text-start">Producto</div>
        <div className="col-md-2">Precio</div>
        <div className="col-md-2">Descuento</div>
        <div className="col-md-1">Cantidad</div>
        <div className="col-md-2">Subtotal</div>
        <div className="col-md-1"></div>
      </div>

      {/* Lista de productos */}
      {cartItems.map((item) => {
        const discountValue = item.price * (item.discountPercentage / 100);
        const finalPrice = item.price - discountValue;
        const subtotal = finalPrice * item.quantity; // Definimos subtotal aquí

        return (
          <div
            key={`${item.id}-${item.quantity}`} // Key única que cambia con la cantidad
            className="row align-items-center border-bottom py-3 text-center"
          >
            {/* Producto */}
            <div className="col-7 col-md-5 d-flex align-items-center text-start mb-2 mb-md-0">
              {item.thumbnail && (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="rounded me-2"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
              )}
              <span className="text-truncate">{item.title}</span>
            </div>

            {/* Precio original - solo en desktop */}
            <div className="d-none d-md-block col-md-2">
              ${item.price.toFixed(2)}
            </div>

            {/* Descuento en dinero - solo en desktop */}
            <div className="d-none d-md-block col-md-2 text-danger">
              -${discountValue.toFixed(2)}
            </div>

            {/* Cantidad */}
            <div className="col-5 col-md-1 mb-2 mb-md-0">
              <div
                className="input-group input-group-sm mx-auto"
                style={{ maxWidth: "120px" }}
              >
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={item.quantity}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={item.quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <div className="col-6 col-md-2 text-success fw-bold">
              ${subtotal.toFixed(2)}
            </div>

            {/* Botón eliminar */}
            <div className="col-6 col-md-1 d-flex align-items-center justify-content-center">
              <button
                className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center"
                onClick={() => removeFromCart(item.id)}
                style={{
                  width: "24px",
                  height: "24px",
                  fontSize: "0.75rem",
                }}
                aria-label="Eliminar producto"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>

            {/* Info móvil */}
            <div className="d-md-none col-12 mt-2 small text-muted">
              <div>Precio: ${item.price.toFixed(2)}</div>
              <div className="text-danger">
                Descuento: -${discountValue.toFixed(2)}
              </div>
            </div>
          </div>
        );
      })}

      {/* Resumen */}
      <div className="row mt-4">
        <div className="col-md-4 offset-md-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h4 className="mb-3">Resumen del pedido</h4>
              <div className="d-flex justify-content-between mb-3">
                <span>
                  Productos:{" "}
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary py-2">
                  <i className="bi bi-credit-card me-2"></i>Finalizar compra
                </button>
                <button
                  className="btn btn-outline-danger py-2"
                  onClick={clearCart}
                >
                  <i className="bi bi-trash me-2"></i>Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
