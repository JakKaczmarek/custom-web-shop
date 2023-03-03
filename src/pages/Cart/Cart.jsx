import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../contexts/ShopContext";
import { bikes } from "../../mocks/bikes";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  // console.log(cartItems, "test");

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {bikes.map((bike) => {
          if (cartItems[bike.id] && cartItems[bike.id] !== 0) {
            return <CartItem data={bike} key={bike.id} />;
          }
          return false;
        })}
      </div>
    </div>
  );
}
