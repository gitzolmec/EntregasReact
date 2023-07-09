import { useState, createContext, useContext } from "react";

const CartContext = createContext({
  addItem: () => {},
});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productoToAdd) => {
    if (!isInCart(productoToAdd.id)) {
      setCart((prev) => {
        return [...prev, productoToAdd];
      });
    } else {
      setCart((prev) => {
        return prev.map((prod) =>
          prod.id === productoToAdd.id
            ? { ...prod, quantity: prod.quantity + productoToAdd.quantity }
            : prod
        );
      });
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const getCantidadTotal = () => {
    let cantidadTotal = 0;
    cart.forEach((prod) => {
      cantidadTotal += prod.quantity;
    });
    console.log(cart);
    return cantidadTotal;
  };

  const cantidadTotal = getCantidadTotal();

  const totalAPagar = () => {
    let subTotal = 0;
    cart.map((prod) => {
      let calcular = 0;
      if (cart) {
        calcular = +prod.quantity * prod.precio;
      }
      subTotal += calcular;
    });
    return subTotal;
  };

  const handleCompraExitosa = (setCartHidden, cartHidden) => {
    setCartHidden(!cartHidden);
  };
  const guardarLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(cart));
    console.log(cart);
  };

  const cargarLocalStorage = () => {
    let storage = localStorage.getItem("carrito");
    if (storage != null) {
      setCart(JSON.parse(storage));
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        cantidadTotal,
        totalAPagar,
        handleCompraExitosa,
        cargarLocalStorage,
        guardarLocalStorage,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};
