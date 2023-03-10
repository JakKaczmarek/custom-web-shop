import React from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function Checkout() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/checkout/payment");
  };

  return (
    <div className="checkout">
      <div className="checkoutInfo">
        <p className="checkoutInfoTitle">Shipping Address</p>
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
          {/* @TODO: I'd avoid using spaces like that {" "} */}
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
        <div>
          <p className="checkoutInfoTitle">Shipping Method</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="first"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="first"
                control={<Radio />}
                label="Free (expect to recive in 5-7 days)"
              />
              <FormControlLabel
                value="second"
                control={<Radio />}
                label="Express (expect to receive in 3-5 days)"
              />
              <FormControlLabel
                value="third"
                control={<Radio />}
                label="Next Day"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <p className="checkoutInfoTitle">Customer Info</p>
        <div>
          <TextField
            margin="normal"
            required
            id="email"
            label="Email adress"
            InputLabelProps={{ style: { color: "gray" } }}
            name="email"
            autoComplete="email"
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
            id="phone"
            label="Phone number"
            InputLabelProps={{ style: { color: "gray" } }}
            name="tel"
            autoComplete="tel"
            inputProps={{ maxLength: 13 }}
            placeholder="+48 000000000"
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
            onClick={handleSubmit}
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: 200, padding: 1.5, marginTop: 3 }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
