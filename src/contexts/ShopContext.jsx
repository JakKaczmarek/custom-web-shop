import { createContext, useState, useMemo } from "react";
import { bikes } from "../img/bikes";

export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (itemId) => {
    const bikeIdx = bikes.findIndex((bike) => bike.id === itemId);
    const bike = bikes[bikeIdx];
    setItemCount(itemCount + 1);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId]
        ? { quantity: prev[itemId].quantity + 1, price: bike.price }
        : { quantity: 1, price: bike.price },
    }));
  };

  const clone = (input) => {
    if (input === null || typeof input !== "object") {
      return input;
    }

    const initialOutput = Array.isArray(input) ? [] : {};

    return Object.keys(input).reduce((acc, key) => {
      acc[key] = clone(input[key]);
      return acc;
    }, initialOutput);
  };

  const removeFromCart = (itemId) => {
    const bikeIdx = bikes.findIndex((bike) => bike.id === itemId);
    const bike = bikes[bikeIdx];
    const cartItemsCopy = clone(cartItems);
    const newCartItems = Object.fromEntries(
      Object.entries(cartItemsCopy).filter(
        (item) => parseInt(item[0], 10) !== itemId
      )
    );

    setItemCount(Math.max(itemCount - 1, 0));

    if (cartItems[itemId].quantity - 1 < 1) {
      setCartItems(newCartItems);
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: { quantity: prev[itemId].quantity - 1, price: bike.price },
      }));
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = useMemo(
    () => ({
      cartItems,
      itemCount,
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
