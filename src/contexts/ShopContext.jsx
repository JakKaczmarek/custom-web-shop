import { createContext, useState, useMemo } from "react";
import { bikes } from "../mocks/bikes";

export const ShopContext = createContext();

// @TODO: Replace cartItem structure from [quantity, price] to Object like {quantity, price}
// It's better not to operate on array indexes if we do not have to
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
        ? [prev[itemId][0] + 1, bike.price]
        : [1, bike.price],
    }));
  };

  const removeFromCart = (itemId) => {
    const bikeIdx = bikes.findIndex((bike) => bike.id === itemId);
    const bike = bikes[bikeIdx];
    const cartItemsCopy = JSON.parse(JSON.stringify(cartItems));
    delete cartItemsCopy[itemId];

    setItemCount(Math.max(itemCount - 1, 0));

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
