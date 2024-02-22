import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);

  // If not logged in, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/Login" replace />;
  }

  // If logged in, render the child components
  return <Outlet />;
};

export default ProtectedRoute;
