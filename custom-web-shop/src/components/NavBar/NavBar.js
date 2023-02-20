import React from "react";
import pieskii from "./pieskii.png";
import SearchBar from "./SearchBar/SearchBar";
import AccountList from "./AccountList/AccountList";
import Cart from "./SignIO/SignIO";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={pieskii} alt="Pieskii"></img>
      <SearchBar />
      <AccountList />
      <Cart />
    </div>
  );
}
