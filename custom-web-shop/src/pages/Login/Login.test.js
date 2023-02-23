import React from "react";
import Login from "./Login";
import { render, screen, fireEvent } from "@testing-library/react";
import * as router from "react-router";

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
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    fireEvent.change(emailInput, { target: { value: "b" } });
    fireEvent.change(passwordInput, { target: { value: "b" } });
    expect(emailInput.value).toBe("b");
    expect(passwordInput.value).toBe("b");
  });
  //   it("Should click once on button SIGN IN", () => {
  //     render(<Login />);
  //     const loginButton = screen.getByTestId("login-button");
  //     fireEvent.click(loginButton);
  //   });
});
