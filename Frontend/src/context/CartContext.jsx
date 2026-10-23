import { createContext, useState } from 'react';

// Context que maneja el carrito de compras de toda la aplicación.
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega una pizza al carrito. Si ya existe, aumenta su cantidad.
  const addToCart = ({ id, name, price, img }) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === id);

      if (exists) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...prevCart, { id, name, price, img, count: 1 }];
    });
  };

  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Resta una unidad; si la cantidad llega a 0, la pizza sale del carrito.
  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increment, decrement, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
