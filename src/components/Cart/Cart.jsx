import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

import { useState } from "react";
const Cart = () => {
  const { cart, totalAPagar, handleCompraExitosa } = useCart();

  const [cartHidden, setCartHidden] = useState(false);

  return (
    <>
      <h1 className="title">Detalle de la Compra</h1>
      <div className={`cart-container ${cartHidden ? "cart-hidden" : ""}`}>
        <table className="mt-5 mb-5 cartTable">
          <thead>
            <tr className="cartTable">
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <img src={prod.img} className="cartImg" alt={prod.nombre} />
                </td>
                <td>{prod.nombre}</td>
                <td>${prod.precio}</td>
                <td>{prod.quantity}</td>
                <td>${prod.quantity * prod.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cartButtons">
          <Link
            to="/checkout"
            className="btn btn-primary"
            onClick={() => handleCompraExitosa(setCartHidden, cartHidden)}
          >
            Finalizar Compra
          </Link>
          <Link className="btn btn-success" to="/">
            Agregar mas Productos
          </Link>
          <h3>Total a pagar: ${totalAPagar()}</h3>
        </div>
      </div>
    </>
  );
};

export default Cart;
