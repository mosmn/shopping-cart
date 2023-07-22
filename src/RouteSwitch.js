import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import Products from "./components/Products";
import About from "./components/About";
import Cart from "./components/Cart";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <BrowserRouter basename="/shopping-cart">
      <div className="App">
        <NavBar cartItems={cartItems} setCartItems={setCartItems} />
        <main className="pages">
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
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
