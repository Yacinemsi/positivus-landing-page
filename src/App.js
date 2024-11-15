import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <BrowserRouter>
        <Header />
        <Hero />
      </BrowserRouter>
    </div>
  );
}

export default App;
