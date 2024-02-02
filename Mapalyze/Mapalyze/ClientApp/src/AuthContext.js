import React, { createContext, useState, useEffect } from 'react';

// Create authentication context
export const AuthContext = createContext(null);

// Provider component for managing auth state
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check session storage for login state on component mount
  useEffect(() => {
    const userLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  // Set login state and store in session storage
  const login = () => {
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  // Clear login state and session storage
  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };

  // Provide auth state and handlers to child components
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
