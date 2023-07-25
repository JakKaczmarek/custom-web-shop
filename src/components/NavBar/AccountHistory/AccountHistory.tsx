import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";

export default function AccountHistory() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const handleSubmit = () => {
    navigate("/history");
  };

  if (!isAuthenticated) return null;
  return (
    <Stack spacing={2} direction="row">
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          onClick={handleSubmit}
          sx={{
            color: "black",
          }}
          data-testid="buttonSO"
        >
          <WorkHistoryIcon />
          History
        </Button>
      </Stack>
    </Stack>
  );
}
