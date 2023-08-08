import {
  createContext,
  useState,
  useMemo,
  useEffect,
  SetStateAction,
} from "react";
import { loadData } from "../img/FetchData";
import { ICartItems, IData, IShopContext } from "../../@types/types";

export const ShopContext = createContext<IShopContext>(null!);

export function ShopContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<IData[] | null>(null);
  const [cartItems, setCartItems] = useState<ICartItems>({});
  const [itemCount, setItemCount] = useState(0);

  const dataIndex = useMemo(() => {
    const index = new Map<number, IData>();
    if (data) {
      data.forEach((item) => {
        index.set(item.id, item);
      });
    }
    return index;
  }, [data]);

  const clone = (input: Record<string, any>) => {
    if (input === null || typeof input !== "object") {
      return input;
    }

    const initialOutput = Array.isArray(input) ? [] : {};

    return Object.keys(input).reduce((acc: Record<string, any>, key) => {
      acc[key] = clone(input[key]);
      return acc;
    }, initialOutput);
  };

  const addToCart = (itemId: number) => {
    const bike = dataIndex.get(itemId);
    if (bike) {
      setItemCount(itemCount + 1);
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId]
          ? { quantity: prev[itemId].quantity + 1, price: bike.price }
          : { quantity: 1, price: bike.price },
      }));
    }
  };

  const removeFromCart = (itemId: number) => {
    const bike = dataIndex.get(itemId);
    if (!bike) return;

    const newCartItems: ICartItems = Object.fromEntries(
      Object.entries(clone(cartItems)).filter(
        (item) => parseInt(item[0], 10) !== Number(itemId)
      )
    ) as ICartItems;

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

  const [discount, setDiscount] = useState(0);

  const setDiscountValue = (discountValue: SetStateAction<number>) => {
    setDiscount(discountValue);
  };

  const clearCart = () => {
    setCartItems({});
    setItemCount(0);
  };

  const contextValue = useMemo(
    () => ({
      cartItems,
      itemCount,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      discount,
      setDiscount: setDiscountValue,
      clearCart,
    }),
    [
      cartItems,
      addToCart,
      updateCartItemCount,
      removeFromCart,
      discount,
      setDiscount,
      setDiscountValue,
      clearCart,
    ]
  );

  useEffect(() => {
    loadData("/api/bikes/cart", setData);
  }, []);

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
