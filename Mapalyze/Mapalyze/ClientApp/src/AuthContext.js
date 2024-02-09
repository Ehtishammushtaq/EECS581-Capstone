import React, { createContext, useState, useEffect } from "react";

// Create authentication context
export const AuthContext = createContext(null);

// Provider component for managing auth state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check session storage for login state on component mount
  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(userLoggedIn);
  }, []);

  // Set login state and store in session storage
  const login = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem("isLoggedIn", "true");
  };

  // Implement the logout function
  const logout = () => {
    // Clear the session storage or any other persistent storage used
    sessionStorage.removeItem("isLoggedIn");
    // Update the state to reflect the user is logged out
    setIsLoggedIn(false);
  };

  // Provide auth state and handlers to child components
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
