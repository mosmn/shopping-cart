import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import Products from "./components/Products";
import About from "./components/About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
