import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sign from "./Sign";
import { AuthContext } from "../../../contexts/AuthContext";

describe("Sign", () => {
  it("renders the Sign component correctly when authenticated", () => {
    const setIsAuthenticated = jest.fn();
    const authContextValue = {
      isAuthenticated: true,
      setIsAuthenticated,
      error: false,
      logoSubmit: jest.fn(),
      handleSubmit: jest.fn(),
      handleRegisterSubmit: jest.fn(),
    };
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={authContextValue}>
          <Sign />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const signButton = getByTestId("buttonSO");
    fireEvent.click(signButton);

    expect(getByText("SIGN OUT")).toBeInTheDocument();
    expect(setIsAuthenticated).toHaveBeenCalledWith(false);
  });

  it("renders the Sign component correctly when not authenticated", () => {
    const setIsAuthenticated = jest.fn();
    const authContextValue = {
      isAuthenticated: false,
      setIsAuthenticated,
      error: false,
      logoSubmit: jest.fn(),
      handleSubmit: jest.fn(),
      handleRegisterSubmit: jest.fn(),
    };
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <AuthContext.Provider value={authContextValue}>
          <Sign />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const signButton = getByTestId("buttonSO");
    fireEvent.click(signButton);

    expect(getByText("SIGN IN")).toBeInTheDocument();
    expect(setIsAuthenticated).toHaveBeenCalledWith(false);
  });
});
