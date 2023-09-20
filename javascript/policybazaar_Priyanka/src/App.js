import "./App.css";
import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./components/Home";
import Age from "./components/Age";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
