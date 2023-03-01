import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

export default function ShoppingCart() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/cart");
  };
  return (
    <Stack spacing={2} direction="row">
      <Button style={{ color: "black" }} onClick={handleSubmit}>
        <ShoppingCartIcon />
        CART
      </Button>
    </Stack>
  );
}
