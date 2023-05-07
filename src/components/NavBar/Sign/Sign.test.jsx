import React from "react";
import { render, screen } from "@testing-library/react";
import * as router from "react-router";
import Sign from "./Sign";
import "@testing-library/jest-dom";

describe("Sign component", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("Check if ACCOUNT is color black", () => {
    render(<Sign />);
    const buttonElement = screen.getByTestId("buttonSO");
    expect(buttonElement).toHaveStyle({
      color: "black",
    });
  });
});
