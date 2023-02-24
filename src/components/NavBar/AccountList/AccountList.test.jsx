import React from "react";
import { render } from "@testing-library/react";
import AccountList from "./AccountList";

describe("AcconutList component", () => {
  it("Should render AccountList", () => {
    render(<AccountList />);
  });
});
