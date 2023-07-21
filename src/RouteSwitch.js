import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import Products from "./components/Products";
import About from "./components/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="pages">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2023 Threads & Co. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
