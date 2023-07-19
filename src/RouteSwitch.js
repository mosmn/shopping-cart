import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import Men from "./components/Men";
import Women from "./components/Women";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<App />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
