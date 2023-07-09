import cart from "../../assets/img/cart.png";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cantidadTotal } = useCart();

  return (
    <div className="cart mr-5">
      <Link to="/cart">
        <img src={cart} alt="cart-widget" />
      </Link>

      <span className="text-light h2">{cantidadTotal}</span>
    </div>
  );
};

export default CartWidget;
