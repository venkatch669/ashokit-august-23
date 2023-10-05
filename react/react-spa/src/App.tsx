import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Portfolio from './Portfolio';
import NoMatch from './NoMatch';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoMatch />} />          
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
