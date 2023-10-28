import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import AppInterface from './components/AppInterface';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div  className="">
      <div className="">
        <Layout/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<SignUp/>}/>
          <Route path="/App" element={<AppInterface/>}/>
        </Routes>
     
      </div>
      </div>
    );
  }
}
