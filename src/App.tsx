import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/layout/Home";
import "./App.css";
import { Event } from "./components/layout/Event";
import BG1 from "./components/assets/BG1.png";

function App() {
  return (
    <div className="App">
      <img className="bg1" src={BG1} alt="" />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/event" Component={Event} />
      </Routes>
    </div>
  );
}

export default App;
