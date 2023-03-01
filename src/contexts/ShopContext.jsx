import { createContext, useState } from "react";
import { bikes } from "../mocks/bikes";

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cart = {};
  for (let i = 1; i < bikes.length + 1; i += 1) {
    cart[i] = {};
  }

  return cart;
};

export function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
