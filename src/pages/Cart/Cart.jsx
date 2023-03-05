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
    <div className="cart">
      <NavBar />
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
        <div>
          {" "}
          <h2> Subtotal: ${totalPrice} </h2>
          <button
            type="button"
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
