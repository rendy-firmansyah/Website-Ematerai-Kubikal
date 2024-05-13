import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedEmail = "test@mail.com";
  const storedPassword = "password";

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === storedEmail && password === storedPassword) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");

      return true;
    } else {
      alert("Email atau password salah!");
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const authContextValue = {
    isLoggedIn,
    handleLogin,
    handleLogout,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
