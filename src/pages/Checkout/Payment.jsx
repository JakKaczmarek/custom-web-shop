import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Field from "./Field";

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
            autoComplete="postal-code"
          />
        </div>
        <p className="checkoutInfoTitle">Credit Card</p>
        <div>
          <Field
            label="Card number"
            name="cc-number"
            autoComplete="cc-number"
            placeholder="####-####-####-####"
            inputProps={{ maxLength: 19 }}
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
            label="Card number"
            name="cc-number"
            autoComplete="cc-number"
            placeholder="00/0000"
            inputProps={{ maxLength: 7 }}
          />
          <Field
            label="Security Code"
            name="cvc"
            autoComplete="cvc"
            placeholder="___"
            inputProps={{ maxLength: 3 }}
          />
        </div>
        <div className="paymentBtns">
          <Button
            onClick={handleSubmitPrevious}
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: 200, padding: 1.5, marginTop: 3 }}
          >
            Previous
          </Button>
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
