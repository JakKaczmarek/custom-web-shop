import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AuthContext } from "../../../App";
import { useContext } from "react";

export default function Sign() {
  const navigate = useNavigate();
  const authentication = useContext(AuthContext);

  const handleSubmit = () => {
    window.alert("Try to log in");
    navigate("/login");
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        onClick={handleSubmit}
        sx={{ mt: 3, mb: 2, color: "black" }}
        data-testid="1"
      >
        {authentication[0] ? <LogoutIcon /> : <LoginIcon />}
        {authentication[0] ? "SIGN OUT" : "SIGN IN"}
      </Button>
    </Stack>
  );
}
