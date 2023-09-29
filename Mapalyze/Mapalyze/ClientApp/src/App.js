import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
//import AppRoutes from './AppRoutes';
import { Layout } from "./components/Layout";
import "./custom.css";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import AppInterface from "./components/AppInterface";
import Signup from "./components/SignUp";
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div> 

        <Layout/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/App" element={<AppInterface />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
     
      </div>
      
    );
  }
}
