import React from "react";
import Products from "./Products";
import { render, screen } from "@testing-library/react";

describe("image component", () => {
  it("Should render images component", () => {
    render(<Products />);
    // screen.debug();
  });
});
