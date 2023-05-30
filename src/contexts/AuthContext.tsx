import { createContext, useMemo, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { IAuthContext } from "../../@types/types";

type Props = {
  children: ReactNode;
};
export const AuthContext = createContext<IAuthContext>(null!);

export function AuthContextProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();
  const [error, setError] = React.useState(false);

  const logoSubmit = () => {
    navigate("/");
  };

  const handleSubmit = (e: any) => {
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
