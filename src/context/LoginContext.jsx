import React, { createContext, useContext, useState, useEffect } from 'react';

// Create LoginContext
const LoginContext = createContext();

// Custom hook to use LoginContext
export const useLogin = () => useContext(LoginContext);

// Provider to wrap the application and provide login values
export const LoginProvider = ({ children }) => {
  // Check if there's an existing authentication status in localStorage
  const storedAuthStatus = localStorage.getItem("isAuthenticated") === "true";
  const storedUserName = localStorage.getItem("userName");

  const [isAuthenticated, setIsAuthenticated] = useState(storedAuthStatus || false);
  const [userName, setUserName] = useState(storedUserName || "");

  // Update localStorage when authentication state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
    localStorage.setItem("userName", userName);
  }, [isAuthenticated, userName]);

  // Login function
  const login = (id, name) => {
    if (id === '1234567' && name === 'Ibrahim') {
      setIsAuthenticated(true);
      setUserName(name); // Set username
      return true; // Successful login
    }
    return false; // Failed login
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserName(''); // Clear username on logout
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
  };

  return (
    <LoginContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
