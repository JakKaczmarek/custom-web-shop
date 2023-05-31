import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { iSearchBar } from "../../../../@types/types";

describe("Search  component", () => {
  // it("Calls onChange function when user type input", () => {
  //   const onChangeMock = jest.fn();

  //   render(<SearchBar onClick={onChangeMock} />);
  //   const inputElement = screen.getByPlaceholderText("Search…");
  //   fireEvent.change(inputElement, { target: { value: "abc" } });
  //   expect(onChangeMock).toBeCalledWith("abc");
  // });

  it("Renders correct default value", () => {
    const value = "default";

    render(<SearchBar value={value} />);
    const inputElement = screen.getByPlaceholderText("Search…");
    expect((inputElement as HTMLInputElement).value).toBe(value);
  });
});
