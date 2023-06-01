import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function Sign() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = () => {
    navigate("/login");
    setIsAuthenticated(false);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        onClick={handleSubmit}
        sx={{
          color: "black",
        }}
        data-testid="buttonSO"
      >
        {isAuthenticated ? (
          <>
            <LogoutIcon />
            SIGN OUT
          </>
        ) : (
          <>
            <LoginIcon />
            SIGN IN
          </>
        )}
      </Button>
    </Stack>
  );
}