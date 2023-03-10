import React, { useContext } from "react";
import { ShopContext } from "../../contexts/ShopContext";

export function CartItem({ data }) {
  const { id, bikeName, price, src, alt } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={src} alt={alt} />
      <div className="description">
        <p>
          <b>{bikeName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button
            type="button"
            className="countHandlerMinus"
            onClick={() => removeFromCart(id)}
          >
            {" "}
            -{" "}
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
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
