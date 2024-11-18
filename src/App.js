import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="md:max-w-6xl mx-auto px-4">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
