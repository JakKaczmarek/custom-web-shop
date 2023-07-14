import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import logoebike from "../../img/logoebike.png";
import Sign from "./Sign/Sign";
import AccountHistory from "./AccountHistory/AccountHistory";

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
          className="navbarImage"
          onClick={handleSubmit}
        />
      </div>
      <div className="right">
        <div className="cart">
          <ShoppingCart />
        </div>
        <div className="sign">
          <AccountHistory />
        </div>
        <div className="sign">
          <Sign />
        </div>
      </div>
    </div>
  );
}
