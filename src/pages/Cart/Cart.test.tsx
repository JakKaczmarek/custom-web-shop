import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

describe("Cart component", () => {
  test("renders cart title and description", () => {
    render(<Cart />);
    const cartTitle = screen.getByText("Your Cart Items");
    const cartDescription = screen.getByText(
      /Thank you for choosing our store/i
    );
    expect(cartTitle).toBeInTheDocument();
    expect(cartDescription).toBeInTheDocument();
  });

  test("handles discount submission", () => {
    render(<Cart />);
    const discountInput = screen.getByPlaceholderText("DISCOUNT");
    const discountButton = screen.getByText("Submit");

    fireEvent.change(discountInput, { target: { value: "BIKE" } });
    fireEvent.click(discountButton);

    const discountElement = screen.getByText("Discount: $599");

    expect(discountElement).toBeInTheDocument();
  });
});
