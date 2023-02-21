import React from "react";
import SearchBar from "./SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Search  component", () => {
  it("Should render value in input", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Search…");
    fireEvent.change(inputElement, { target: { value: "abc" } });
    expect(inputElement.value).toBe("abc");
  });
});
