import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { iButton } from "../../../@types/types";

const handleClick = jest.fn();
const bike = [
  {
    id: 2,
    bikeName: "Vitus E-substance Carbon",
    price: 4300,
    category: "Vitus",
    src: "http://localhost:8000/api/bikes/bikesImages/bike2/bike2.jpg",
    alt: "bike2",
    srcArray: [
      {
        id: 5,
        path: "http://localhost:8000/api/bikes/bikesImages/bike2/bike2.jpg",
        bikesId: 2,
      },
      {
        id: 6,
        path: "http://localhost:8000/api/bikes/bikesImages/bike2/bike21.jpg",
        bikesId: 2,
      },
    ],
  },
];

function test() {
  return bike[0];
}
function Button({ onClick, children }: iButton) {
  return (
    <button type="button" onClick={() => onClick}>
      {children}
    </button>
  );
}
describe("Products", () => {
  it("Should return bikeName and price", () => {
    expect(bike[0].bikeName).toBe("Vitus E-substance Carbon");
    expect(bike[0].price).toBeGreaterThanOrEqual(1000);
    expect(bike[0].price).toEqual(4300);
  });
  it("test() should return srcArray", () => {
    expect(test()).toHaveProperty("srcArray");
  });

  it("Should return twice", () => {
    const mock = jest.fn(() => true);
    mock();
    mock();
    expect(mock).toHaveReturnedTimes(2);
  });

  it("calls onClick prop once when clicked", () => {
    render(<Button onClick={() => handleClick}>NEXT</Button>);
    fireEvent.click(screen.getByText(/NEXT/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
