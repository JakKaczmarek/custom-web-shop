import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";

describe("navbar component", () => {
  it("Should show navbar", () => {
    render(<NavBar />);
  });
});
