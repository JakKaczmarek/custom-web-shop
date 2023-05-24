import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [itemCount, setItemCount] = useState(0);

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

  const addToCart = (itemId) => {
    const bike = data.find((item) => item.id === itemId);
    setItemCount(itemCount + 1);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId]
        ? { quantity: prev[itemId].quantity + 1, price: bike.price }
        : { quantity: 1, price: bike.price },
    }));
  };

  const removeFromCart = (itemId) => {
    const bike = data.find((item) => item.id === itemId);
    const newCartItems = Object.fromEntries(
      Object.entries(clone(cartItems)).filter(
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/bikes/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
