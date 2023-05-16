import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import logoebike from "../../img/logoebike.png";
import Sign from "./Sign/Sign";

export default function NavBar() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="navBar">
      <div className="image">
        <input
          type="image"
          src={logoebike}
          alt="logoebike"
          style={{ width: 170, height: 70 }}
          onClick={handleSubmit}
        />
      </div>
      <div className="right">
        <div className="cart">
          <ShoppingCart />
        </div>
        <div className="sign">
          <Sign />
        </div>
      </div>
    </div>
  );
}
