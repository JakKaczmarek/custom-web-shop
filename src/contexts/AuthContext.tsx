import { createContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import axios from "axios";
import { IAuthContext } from "../../@types/types";

export const AuthContext = createContext<IAuthContext>(null!);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);

  const logoSubmit = () => {
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/${email}`
      );
      const user = response.data;

      if (user && user.password === password) {
        setIsAuthenticated(true);

        if (email === "admin" && password === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setLoginError(true);
        window.alert("wrong email or password");
      }
    } catch (error) {
      console.error("Error getting user:", error);
      setLoginError(true);
    }
  };
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      await axios.post("http://localhost:8000/api/users/register", {
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setLoginError(true);
    }
  };
  const contextValue = useMemo(
    () => ({
      setIsAuthenticated,
      loginError,
      handleSubmit,
      logoSubmit,
      isAuthenticated,
      handleRegisterSubmit,
    }),
    [
      loginError,
      logoSubmit,
      handleSubmit,
      isAuthenticated,
      handleRegisterSubmit,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
