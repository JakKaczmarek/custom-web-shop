import React from "react";
import { render } from "@testing-library/react";
import Products from "./Products";

describe("image component", () => {
  it("Should render images component", () => {
    render(<Products />);
    // screen.debug();
  });
});
