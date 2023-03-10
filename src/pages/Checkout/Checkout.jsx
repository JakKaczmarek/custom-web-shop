import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutInfo">
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
            autoFocus
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
            id="provinceState"
            label="Province/State"
            InputLabelProps={{ style: { color: "gray" } }}
            name="address-level1"
            autoComplete="address-level1"
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
            id="zipPostal"
            label="Zip/Postal Code"
            InputLabelProps={{ style: { color: "gray" } }}
            name="postal-code"
            autoComplete="postal-code"
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
        </div>
        <div>
          <h1>Shipping Method</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Free (expect to recive in 5-7 days)"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Express (expect to receive in 3-5 days)"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Next Day"
            />
          </FormGroup>
        </div>
        <div>
          <TextField
            inputProps={{ "data-testid": "email-input" }}
            margin="normal"
            required
            id="email"
            label="Email Address"
            InputLabelProps={{ style: { color: "gray" } }}
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              width: 600,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldSet": {
                  borderColor: "gray",
                },
              },
            }}
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
