import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Checkout from "./Checkout";

test("renders Checkout component without errors", () => {
  render(
    <MemoryRouter>
      <Checkout />
    </MemoryRouter>
  );
});
