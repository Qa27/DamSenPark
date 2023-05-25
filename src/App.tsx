import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/layout/Home";
import "./App.css";
import { Event } from "./components/layout/Event";
import BG1 from "./components/assets/BG1.png";
import { EventDetail } from "./components/layout/EventDetail";
import { Contact } from "./components/layout/Contact";
import { Pay } from "./components/layout/Pay";
import { Success } from "./components/layout/Success";

function App() {
  return (
    <div className="App">
      <img className="bg1" src={BG1} alt="" />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/event" Component={Event} />
        <Route path="/event/detail" Component={EventDetail} />
        <Route path="/contact" Component={Contact} />
        <Route path="/pay" Component={Pay} />
        <Route path="/pay/payment_success" Component={Success} />
      </Routes>
    </div>
  );
}

export default App;
