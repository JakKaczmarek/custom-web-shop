import React from "react";
import { useNavigate } from "react-router-dom";
import logoebike from "./logoebike.png";
import AccountList from "./ShoppingCart/ShoppingCart";
import Sign from "./Sign/Sign";

export default function NavBar() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="navBar">
      <input
        type="image"
        src={logoebike}
        alt="logoebike"
        style={{ width: 170, height: 70 }}
        onClick={handleSubmit}
      />
      <AccountList />
      <Sign />
    </div>
  );
}
