import React from "react";
import AccountList from "./AccountList";
import { render, screen, fireEvent } from "@testing-library/react";

describe("AcconutList component", () => {
  it("Should render AccountList", () => {
    render(<AccountList />);
  });
});
