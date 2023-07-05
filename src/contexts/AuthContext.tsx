import { createContext, useMemo } from "react";
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
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const logoSubmit = () => {
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        {
          email,
          password,
        }
      );

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        console.log(token);

        if (email === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
          setIsAuthenticated(true);
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError(true);
      window.alert("Wrong email or password");
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    if (!email || !password) {
      window.alert("Please enter both email and password");
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/users/register", {
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setLoginError(true);
      window.alert("Registration failed");
    }
  };

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      loginError,
      handleSubmit,
      logoSubmit,
      handleRegisterSubmit,
    }),
    [
      loginError,
      logoSubmit,
      handleSubmit,
      handleRegisterSubmit,
      isAuthenticated,
      setIsAuthenticated,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
