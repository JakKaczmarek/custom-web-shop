import React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Payment() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert(
      "Thank you for shopping! We will send you an email confirming your purchase."
    );
  };
  const handleSubmitPrevious = () => {
    navigate("/checkout");
  };

  return (
    <div className="checkout">
      <div className="checkoutInfo">
        <p className="checkoutInfoTitle">Billing Address</p>
        <div>
          <TextField
            margin="normal"
            required
            id="firstName"
            label="First Name"
            InputLabelProps={{ style: { color: "gray" } }}
            name="firstName"
            autoComplete="given-name"
            autoFocus
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
          <TextField
            margin="normal"
            required
            id="lastName"
            label="Last Name"
            InputLabelProps={{ style: { color: "gray" } }}
            name="lastName"
            autoComplete="family-name"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
        </div>
        <div>
          <TextField
            margin="normal"
            required
            id="adress"
            label="Adress Line"
            InputLabelProps={{ style: { color: "gray" } }}
            name="street-address"
            autoComplete="street-address"
            className="adress"
            sx={{
              width: 600,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
        </div>
        <div>
          <TextField
            margin="normal"
            required
            id="city"
            label="City"
            InputLabelProps={{ style: { color: "gray" } }}
            name="address-level2"
            autoComplete="address-level2"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
          <TextField
            margin="normal"
            id="provinceState"
            label="Province/State"
            InputLabelProps={{ style: { color: "gray" } }}
            name="address-level1"
            autoComplete="address-level1"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
        </div>
        <div>
          <TextField
            margin="normal"
            required
            id="country"
            label="Country"
            InputLabelProps={{ style: { color: "gray" } }}
            name="country-name"
            autoComplete="country-name"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
          <TextField
            margin="normal"
            required
            id="zipPostal"
            label="Zip/Postal Code"
            InputLabelProps={{ style: { color: "gray" } }}
            name="postal-code"
            autoComplete="postal-code"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
        </div>
        <p className="checkoutInfoTitle">Credit Card</p>
        <div>
          <TextField
            margin="normal"
            required
            id="cardNumber"
            label="Card number"
            InputLabelProps={{ style: { color: "gray" } }}
            name="cc-number"
            autoComplete="cc-number"
            inputProps={{ maxLength: 19 }}
            placeholder="####-####-####-####"
            sx={{
              width: 600,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
        </div>
        <div>
          <TextField
            margin="normal"
            required
            id="cc-exp"
            label="Expiry Date"
            InputLabelProps={{ style: { color: "gray" } }}
            name="cc-exp"
            autoComplete="cc-exp"
            inputProps={{ maxLength: 7 }}
            placeholder="00/0000"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
          <TextField
            margin="normal"
            required
            id="cc-csc"
            label="Security Code"
            InputLabelProps={{ style: { color: "gray" } }}
            name="cvc"
            autoComplete="cvc"
            inputProps={{ maxLength: 3 }}
            placeholder="___"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />{" "}
        </div>
        <div>
          <Button
            onClick={handleSubmitPrevious}
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: 200, padding: 1.5, marginTop: 3 }}
          >
            Previous
          </Button>
        </div>
        <div>
          <Button
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: 200, padding: 1.5, marginTop: 3, background: "green" }}
          >
            Confirmation
          </Button>
        </div>
      </div>
    </div>
  );
}
