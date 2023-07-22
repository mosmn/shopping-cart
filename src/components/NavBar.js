import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = ({ cartItems }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png" alt="Cart" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
