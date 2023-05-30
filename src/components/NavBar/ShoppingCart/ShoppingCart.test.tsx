import React from "react";
import { render } from "@testing-library/react";
import AccountList from "./ShoppingCart";

describe("AcconutList component", () => {
  it("Should render AccountList", () => {
    render(<AccountList />);
  });
});
