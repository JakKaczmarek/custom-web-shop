import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../contexts/ShopContext";

export default function ShoppingCart() {
  const { itemCount } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/cart");
  };
  return (
    <Badge
      sx={{
        "& .MuiBadge-badge": {
          color: "black",
          backgroundColor: "#c9940d",
        },
      }}
      badgeContent={itemCount}
      onClick={handleSubmit}
    >
      <ShoppingCartIcon />
      &nbsp;
    </Badge>
  );
}
