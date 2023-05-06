import { createContext, useMemo, useContext } from "react";
// import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";

export const AuthContext = createContext(false);

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
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
    }),
    [error, logoSumbit, handleSubmit]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
