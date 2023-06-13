import cart from "../../assets/img/cart.png";

const CartWidget = () => {
  return (
    <div className="cart mr-5">
      <img src={cart} alt="cart-widget"></img>
      <span className="cartNumber">0</span>
    </div>
  );
};

export default CartWidget;
