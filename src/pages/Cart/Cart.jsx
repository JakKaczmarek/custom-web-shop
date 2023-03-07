import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../contexts/ShopContext";
import { bikes } from "../../mocks/bikes";
import NavBar from "../../components/NavBar/NavBar";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);

  let totalPrice = 0;

  Object.keys(cartItems).forEach((key) => {
    totalPrice += cartItems[key][0] * cartItems[key][1];
  });

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div className="shoppingCart">
      <NavBar />
      <span>
        <h1 className="cartTitle">Your Cart Items</h1>
      </span>
      <div className="cart">
        <div className="cartBikes">
          {bikes.map((bike) => {
            if (cartItems[bike.id] && cartItems[bike.id] !== 0) {
              return <CartItem data={bike} key={bike.id} />;
            }
            return false;
          })}
        </div>
        <div className="cartSummary">
          {" "}
          <p className="subPrice"> Subtotal: ${totalPrice} </p>
          <p className="subPrice">Discount: $0</p>
          <p className="subPrice">Shipping: $0</p>
          <p className="totalPrice">Total: ${totalPrice} </p>
          <button
            type="button"
            className="cartContinueShoppingBtn"
            onClick={() => {
              handleSubmit();
            }}
          >
            {" "}
            Continue Shopping{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
