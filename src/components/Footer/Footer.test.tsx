import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer component correctly", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("About us")).toBeInTheDocument();
    expect(getByText("CONTACT")).toBeInTheDocument();
    expect(getByText("Opening hours")).toBeInTheDocument();
    expect(getByText("eBike.com")).toBeInTheDocument();
  });
});
