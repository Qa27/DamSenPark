import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/layout/Home";
import "./App.css";
import { Event } from "./components/layout/Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/event" Component={Event} />
      </Routes>
    </div>
  );
}

export default App;
