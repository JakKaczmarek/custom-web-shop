import { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { IAuthContext } from "../../@types/types";

export const AuthContext = createContext<IAuthContext>(null!);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = React.useState(false);

  const logoSubmit = () => {
    navigate("/");
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (email === "b" && password === "b") {
      setIsAuthenticated(true);
      navigate("/");
    }
    if (email === "a" && password === "a") {
      setIsAuthenticated(true);
      navigate("/admin");
    } else setError(true);
  };

  const contextValue = useMemo(
    () => ({
      setIsAuthenticated,
      error,
      handleSubmit,
      logoSubmit,
      isAuthenticated,
    }),
    [error, logoSubmit, handleSubmit, isAuthenticated]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
