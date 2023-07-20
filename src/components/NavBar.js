import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div>
      <Link to="/"><Logo /></Link>
      <Link to="/">Home</Link>
      <Link to="/products ">Products</Link>
      <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
      <Outlet />
    </div>
  );
};

export default NavBar;
