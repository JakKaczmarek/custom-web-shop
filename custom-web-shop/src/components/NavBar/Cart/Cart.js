import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

export default function Cart() {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <ShoppingCartIcon />
        CART
      </Box>
    </div>
  );
}
