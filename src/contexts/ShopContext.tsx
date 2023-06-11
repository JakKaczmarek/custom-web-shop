import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { ICartItems, IData, IShopContext } from "../../@types/types";

export const ShopContext = createContext<IShopContext>(null!);

export function ShopContextProvider({ children }: any) {
  const [data, setData] = useState<IData[] | null>(null);
  const [cartItems, setCartItems] = useState<ICartItems>({});
  const [itemCount, setItemCount] = useState(0);

  const clone = (input: any) => {
    if (input === null || typeof input !== "object") {
      return input;
    }

    const initialOutput = Array.isArray(input) ? [] : {};

    return Object.keys(input).reduce((acc: any, key) => {
      acc[key] = clone(input[key]);
      return acc;
    }, initialOutput);
  };

  const addToCart = (itemId: number) => {
    const bike: any = data?.find((item: IData) => item.id === itemId);
    setItemCount(itemCount + 1);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId]
        ? { quantity: prev[itemId].quantity + 1, price: bike.price }
        : { quantity: 1, price: bike.price },
    }));
  };

  const removeFromCart = (itemId: number) => {
    const bike: any = data?.find((item: IData) => item.id === itemId);
    const newCartItems: any = Object.fromEntries(
      Object.entries(clone(cartItems)).filter(
        (item) => parseInt(item[0], 10) !== Number(itemId)
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

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { quantity: newAmount, price: prev[itemId].price },
    }));
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
