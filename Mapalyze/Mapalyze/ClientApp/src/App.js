// App.js
import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import AppInterface from "./components/AppInterface";
import ProtectedRoute from "./ProtectedRoute";
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/App" element={<ProtectedRoute />}>
              <Route index element={<AppInterface />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}
