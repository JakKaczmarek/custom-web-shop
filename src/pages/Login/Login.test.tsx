import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import * as router from "react-router";
import Login from "./Login";

describe("Login Page", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("Should render login page", () => {
    render(<Login />);
  });
  it("Should render proper value in email and password input", () => {
    render(<Login />);
    const emailInput: any = screen.getByTestId("email-input");
    const passwordInput: any = screen.getByTestId("password-input");
    fireEvent.change(emailInput, { target: { value: "b" } });
    fireEvent.change(passwordInput, { target: { value: "b" } });
    expect(emailInput.value).toBe("b");
    expect(passwordInput.value).toBe("b");
  });
});
