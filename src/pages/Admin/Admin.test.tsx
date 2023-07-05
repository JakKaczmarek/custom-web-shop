import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Admin from "./Admin";
import { AuthContext } from "../../contexts/AuthContext";

test("renders Admin component without errors", () => {
  const authContextValue = {
    setIsAuthenticated: jest.fn(),
    error: false,
    handleSubmit: jest.fn(),
    logoSubmit: jest.fn(),
    isAuthenticated: false,
    handleRegisterSubmit: jest.fn(),
  };

  render(
    <MemoryRouter>
      <AuthContext.Provider value={authContextValue}>
        <Admin />
      </AuthContext.Provider>
    </MemoryRouter>
  );
});
