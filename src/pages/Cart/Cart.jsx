import React from "react";
import { CartItem } from "./CartItem";

export default function Cart() {
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        <CartItem />;
      </div>
    </div>
  );
}
