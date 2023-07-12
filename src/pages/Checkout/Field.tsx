import React from "react";
import TextField from "@mui/material/TextField";
import { FieldProps } from "../../../@types/types";

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
  value = "",
  onChange,
}: FieldProps) {
  return (
    <TextField
      onChange={onChange}
      value={value}
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
