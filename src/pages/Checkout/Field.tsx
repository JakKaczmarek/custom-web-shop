import React from "react";
import TextField from "@mui/material/TextField";

export default function Field({
  sx = {
    width: 300,
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldSet": {
        borderColor: "gray",
      },
    },
  },
  label = "",
  name = "",
  autoComplete = "",
  InputLabelProps = { style: { color: "gray" } },
  inputProps = {},
  placeholder = "",
}) {
  return (
    <TextField
      required
      margin="normal"
      label={label}
      name={name}
      autoComplete={autoComplete}
      InputLabelProps={InputLabelProps}
      sx={sx}
      inputProps={inputProps}
      placeholder={placeholder}
    />
  );
}
