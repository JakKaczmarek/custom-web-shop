import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Field from "./Field";

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
          <Field
            label="First Name"
            name="firstName"
            autoComplete="given-name"
          />
          <Field label="Last Name" name="lastName" autoComplete="family-name" />
        </div>
        <div>
          <Field
            label="Adress Line"
            name="street-address"
            autoComplete="street-address"
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
          <Field
            label="City"
            name="address-level2"
            autoComplete="address-level2"
          />
          <Field
            label="Province/State"
            name="address-level1"
            autoComplete="address-level1"
          />
        </div>
        <div>
          <Field
            label="Country"
            name="country-name"
            autoComplete="country-name"
          />
          <Field
            label="Zip/Postal Code"
            name="postal-code"
            autoComplete="postal-codee"
          />
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
          <Field label="Email adress" name="email" autoComplete="email" />
          <Field label="Phone number" name="tel" autoComplete="tel" />
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
