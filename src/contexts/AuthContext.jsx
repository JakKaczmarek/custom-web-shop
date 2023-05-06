import { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";

export const AuthContext = createContext(false);

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = React.useState(false);

  const logoSumbit = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "b" && password === "b") {
      setIsAuthenticated(true);
      navigate("/");
    } else setError(true);
  };

  const contextValue = useMemo(
    () => ({
      error,
      handleSubmit,
      logoSumbit,
      isAuthenticated,
    }),
    [error, logoSumbit, handleSubmit, isAuthenticated]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
