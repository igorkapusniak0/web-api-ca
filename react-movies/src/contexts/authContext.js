import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authenticateUser = (token) => {
    try {
      const decodedToken = jwtDecode(token); 
      if (decodedToken) {
        setUser({ username: decodedToken.username });
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken) {
          setUser({ username: decodedToken.username });
        }
      } catch (error) {
        console.error("Error decoding JWT on page load:", error);
      }
    }
  }, []);

  const isAuthenticated = user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, authenticateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
