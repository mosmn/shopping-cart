import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/Cart">Cart</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cart" element={<h1>Cart</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
