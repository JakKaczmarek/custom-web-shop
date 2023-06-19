import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";
import { IData } from "../../../@types/types";

export function CartItem({ data }: { data: IData }) {
  const { id, bike_name, price, src, alt } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={src} alt={alt} />
      <div className="description">
        <p>
          <b>{bike_name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button
            type="button"
            className="countHandlerMinus"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            value={cartItems[id].quantity}
            disabled
            className="countHandlerInput"
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value.toString()), id)
            }
          />
          <button
            type="button"
            className="countHandlerPlus"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
