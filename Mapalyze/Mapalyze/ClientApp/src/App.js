import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
//import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import Home from './components/Home';

import AboutUs from './components/AboutUs';
import AppInterface from './components/AppInterface';
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/App" element={<AppInterface/>}/>
        </Routes>
      </Layout>
    );
  }
}
