import { createContext, useState, useMemo } from "react";
import { bikes } from "../mocks/bikes";

export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    const bikeIdx = bikes.findIndex((bike) => bike.id === itemId);
    const bike = bikes[bikeIdx];
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId]
        ? [prev[itemId][0] + 1, bike.price]
        : [1, bike.price],
    }));
  };

  const removeFromCart = (itemId) => {
    const bikeIdx = bikes.findIndex((bike) => bike.id === itemId);
    const bike = bikes[bikeIdx];
    const cartItemsCopy = JSON.parse(JSON.stringify(cartItems));
    delete cartItemsCopy[itemId];

    console.log(cartItemsCopy);

    if (cartItems[itemId][0] - 1 < 1) {
      setCartItems(cartItemsCopy);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: [prev[itemId][0] - 1, bike.price],
      }));
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
    }),
    [cartItems, addToCart, updateCartItemCount, removeFromCart]
  );
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
