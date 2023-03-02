import { createContext, useState } from "react";

export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

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
  // console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
