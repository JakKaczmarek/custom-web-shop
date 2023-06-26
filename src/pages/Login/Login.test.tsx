import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import * as router from "react-router";
import { AuthContextProvider } from "../../contexts/AuthContext";
import Login from "./Login";

describe("Login Page", () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("Should render login page", () => {
    render(
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    );
  });

  it("Should render proper value in email and password input", () => {
    render(
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    );
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "b" } });
    fireEvent.change(passwordInput, { target: { value: "b" } });
    expect(emailInput.value).toBe("b");
    expect(passwordInput.value).toBe("b");
  });
});
