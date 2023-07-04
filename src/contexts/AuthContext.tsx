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
        `http://localhost:8000/api/users/${email}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data && response.data.password === password) {
        setIsAuthenticated(true);

        if (response.data.email === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setLoginError(true);
        window.alert("Wrong email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError(true);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      if (token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", token);
        console.log(token);
        navigate("/login");
      } else {
        setLoginError(true);
        window.alert("Registration failed");
      }
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
