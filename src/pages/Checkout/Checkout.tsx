import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Field from "./Field";
import { ICartItem, IShopContext } from "../../../@types/types";
import { ShopContext } from "../../contexts/ShopContext";

export default function Checkout() {
  const { cartItems }: IShopContext = useContext(ShopContext);
  const totalPrice = Object.values(cartItems).reduce(
    (acc: number, curr: ICartItem) => acc + curr.price * curr.quantity,
    0
  );
  const [order, setOrder] = useState({
    name: "",
    email: "",
    shipping_address: "",
    postal_code: "",
    phone: "",
    city: "",
    country: "",
    total_amount: totalPrice,
  });

  const navigate = useNavigate();

  const handleSubmitPrevious = () => {
    navigate("/cart");
  };

  const handleSubmitNewOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderData = order;
    axios
      .post(`http://localhost:8000/api/orders/register`, orderData)
      .then((response) => {
        console.log(response.status);
      });
    alert(
      "Thank you for shopping! We will send you an email confirming your purchase."
    );
    navigate("/");
  };
  const handleChangeOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkout">
      <div className="checkoutInfo">
        <form onSubmit={handleSubmitNewOrder}>
          <p className="checkoutInfoTitle">Billing Address</p>
          <div>
            <Field
              name="name"
              label="Full Name"
              autoComplete="given-name"
              value={order.name}
              onChange={handleChangeOrder}
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
              value={order.shipping_address}
              onChange={handleChangeOrder}
              label="Adress Line"
              name="shipping_address"
              autoComplete="street-address"
            />
            <Field
              value={order.postal_code}
              onChange={handleChangeOrder}
              label="Zip/Postal Code"
              name="postal_code"
              autoComplete="postal-code"
            />
          </div>
          <div>
            <Field
              value={order.city}
              onChange={handleChangeOrder}
              label="City"
              name="city"
              autoComplete="address-level2"
            />
            <Field
              value={order.country}
              onChange={handleChangeOrder}
              label="Country"
              name="country"
              autoComplete="country-name"
            />
          </div>
          <p className="checkoutInfoTitle">Shipping Method</p>
          <div>
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
            <Field
              label="Email adress"
              name="email"
              autoComplete="email"
              value={order.email}
              onChange={handleChangeOrder}
            />
            <Field
              value={order.phone}
              onChange={handleChangeOrder}
              label="Phone number"
              name="phone"
              autoComplete="tel"
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
              Back to cart
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: 200,
                padding: 1.5,
                marginTop: 3,
                background: "green",
              }}
            >
              Confirmation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
