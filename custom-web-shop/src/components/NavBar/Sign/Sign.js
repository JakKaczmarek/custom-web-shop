import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Sign() {
  // const navigate = useNavigate();
  // const handleSubmit = () => {
  //   navigate("/");
  // };

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="text"
        // onClick={handleSubmit}
        sx={{ mt: 3, mb: 2, color: "black" }}
      >
        <LogoutIcon />
        SIGN OUT
      </Button>
    </Stack>
  );
}
