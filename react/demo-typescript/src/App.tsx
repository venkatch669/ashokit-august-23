import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GridDemo from "./GridDemo"
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Dashboard from "./Dashboard"
import NoMatch from "./NoMatch"

function App() {
  return (
    <div className="App">
      <h1> header </h1>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      <h1> footer </h1>
    </div>
  );
}

export default App;
