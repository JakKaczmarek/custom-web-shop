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
  const [userEmail, setUserEmail] = React.useState("");

  const isValidToken = async () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/users/verify",
          { token }
        );
        const { isValid } = response.data;
        if (isValid === true) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          navigate("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  const storedUserEmail = localStorage.getItem("userEmail");

  React.useEffect(() => {
    isValidToken();
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

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

      const { token, role } = response.data;
      if (token) {
        document.cookie = `token=${token}; path=/;`;
        setUserEmail(email);
        localStorage.setItem("userEmail", email);

        if (role === "admin") {
          setIsAuthenticated(true);
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
      userEmail,
      setUserEmail,
    }),
    [
      loginError,
      logoSubmit,
      handleSubmit,
      handleRegisterSubmit,
      isAuthenticated,
      setIsAuthenticated,
      userEmail,
      setUserEmail,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
