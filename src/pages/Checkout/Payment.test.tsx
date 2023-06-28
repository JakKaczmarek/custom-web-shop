import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Payment from "./Payment";

test("renders Payment component without errors", () => {
  render(
    <MemoryRouter>
      <Payment />
    </MemoryRouter>
  );
});
