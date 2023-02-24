import React from "react";
import pieskii from "./pieskii.png";
import SearchBar from "./SearchBar/SearchBar";
import AccountList from "./AccountList/AccountList";
import Sign from "./Sign/Sign";

export default function NavBar() {
  return (
    <div className="navBar">
      <img src={pieskii} alt="Pieskii" style={{ width: 170, height: 70 }} />
      <SearchBar />
      <AccountList />
      <Sign />
    </div>
  );
}
